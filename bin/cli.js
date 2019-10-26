#!/usr/bin/env node

const path = require('path')
const child_process = require('child_process')
const shell = require('shelljs')
const chalk = require('chalk')
const jsonEditor = require('edit-json-file')

const log = console.log
const { error: red, green: info } = chalk

const [, , ...args] = process.argv
const [projectName] = args

if (!projectName) {
  log(red('You should at least provide a project name'))
  log(red('e.g.: pi my-awesome-project'))
  shell.exit(1)
}

if (shell.find(projectName).code === 0) {
  log(
    red(
      `Directory '${projectName}' already exist in current path, please choose another name.`
    )
  )
  shell.exit(1)
}

if (!shell.which('npm')) {
  log(red('You should have npm installed globally. Installation aborted.'))
  shell.exit(1)
}

log(info(`Creating directory ${projectName} ...`))
shell.mkdir('-p', projectName)
shell.cd(projectName)

const templateDirectory = path.join(__dirname, '..', 'templates/bare-frontend')
if (shell.which('git')) {
  log(info('Initializing git repo ...'))
  shell.exec('git init')
  // .gitignore will got renamed to .npmignore by 'npm pack'
  // see the issue here: https://github.com/npm/npm/issues/7252
  shell.exec(`echo "node_modules\n.idea" >> .gitignore`)
}

log(info('Initializing npm, creating package.json ...'))
child_process.execFileSync('npm', ['init'], {
  stdio: 'inherit',
})

log(
  info(
    'Installing npm dependencies: ',
    [
      '@babel/core',
      '@babel/preset-env',
      '@babel/plugin-proposal-class-properties',
      'babel-eslint@next',
      'eslint',
      'eslint-config-prettier',
      'eslint-plugin-prettier',
      'husky@next',
      'jest',
      'lint-staged',
      'prettier',
    ],
    ' ...'
  )
)
child_process.execFileSync(
  'npm',
  [
    'install',
    '-D',
    '@babel/core',
    '@babel/preset-env',
    '@babel/plugin-proposal-class-properties',
    'babel-eslint',
    'eslint',
    'eslint-config-javascript-the-good-parts',
    'eslint-config-prettier',
    'eslint-plugin-prettier',
    'husky',
    'jest',
    'lint-staged',
    'prettier',
  ],
  {
    stdio: 'inherit',
  }
)

log(info('Setting up .eslintrc, .travis.yml, src/ ...'))
shell.cp(`${templateDirectory}/.eslintrc`, '.')
shell.cp(`${templateDirectory}/.travis.yml`, '.')
shell.cp('-Rn', `${templateDirectory}/src/`, '.')

log(info('Create README.md'))
shell.exec(`echo '# ${projectName} README' > README.md`)

log(info('Updating npm scripts ...'))
let packageJson = jsonEditor('./package.json')
packageJson.set('scripts', {
  lint: 'eslint src',
  test: 'jest',
  'test:watch': 'jest --watch',
  'test:ci': 'jest --coverage --verbose',
})
packageJson.set('jest', {
  testMatch: ['<rootDir>/src/*.test.js'],
  verbose: false,
  collectCoverage: false,
})
packageJson.set('prettier', {
  printWidth: 80,
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  trailingComma: 'es5',
  arrowParens: 'always',
})
packageJson.set('babel', {
  presets: ['@babel/preset-env'],
  plugins: ['@babel/plugin-proposal-class-properties'],
})
packageJson.set('husky', {
  hooks: {
    'pre-commit': 'lint-staged',
  },
})
packageJson.set('lint-staged', {
  'src/**/*.js': ['npm run lint -- --fix', 'git add'],
})
packageJson.save()

if (shell.which('git')) {
  log(info('First commit ...'))
  shell.exec('git add .')
  shell.exec('git commit -m "💥initial commit"')
}

log(
  info(
    '💥💥💥You are all done. Happy hacking around with your new project!💥💥💥'
  )
)
log(info(`You can now run 'cd ${projectName}'.`))
