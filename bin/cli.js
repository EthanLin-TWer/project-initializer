#!/usr/bin/env node

const shell = require('shelljs')
const jsonEditor = require('edit-json-file')

if (shell.which('git')) {
  shell.exec('git init')
}

shell.exec('npm init')
shell.exec(
  'npm i -D @babel/core @babel/preset-env babel-core@^7.0.0-bridge.0 babel-eslint eslint eslint-config-prettier eslint-plugin-prettier husky jest lint-staged prettier'
)
shell.cp(`${__dirname}/templates/bare-frontend/.eslintrc`, '.')
shell.cp(`${__dirname}/templates/bare-frontend/.gitignore`, '.')
shell.cp(`${__dirname}/templates/bare-frontend/.travis.yml`, '.')
shell.cp('-Rn', `${__dirname}/templates/bare-frontend/src/`, '.')

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
})
packageJson.set('husky', {
  hooks: {
    'pre-commit': 'lint-staged',
  },
})
packageJson.set('lint-staged', {
  linters: {
    'src/**/*.js': ['npm run lint -- --fix', 'git add'],
  },
})
packageJson.save()

const [nodePath, commandName, ...args] = process.argv
console.log(nodePath, commandName, args)
