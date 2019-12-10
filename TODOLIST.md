# TODOLIST

* [x] be able to run command locally
* [x] be able to generate a project structure
  * [x] init with 'git init'
  * [x] init with 'npm init' with default parameters
  * [x] install dependencies
  * [x] init `package.json` fields
  * [x] copy skeletons
    * [x] `.eslintrc` 
    * [x] `.travis.yml`
    * [x] `.gitignore`
    * [x] `src`
* [x] be able to take in parameters
  * [x] do not create folder with the same name
  * [x] create a new project folder with provided name
  * [x] run 'git init' under created project root
  * [x] make npm init customizable - not necessary, prompt user with `npm init` origin inputs
  * [x] do not call 'git init' and touch `.gitignore` when git command is not present
  * [x] abort if user does not have npm installed
  * [x] auto commit as the first commit 
* [x] better logging
* [x] published to npm and get it to work
  * [x] requires in `bin`
  * [x] update version and publish script
  * [x] + template files not copied over - use "files" approach
  * [x] + `${__dirname}/../templates/` wont' work on npm publish - not the case
* [x] added typescript support
* [ ] refactor
  * [ ] support private methods once eslint follows up
  * [ ] auto do an initial commit
  * [ ] some npm init argument no longer makes sense
  * [ ] optimize, `find` will report an error when directory not found
  * [ ] use src to develop and bin to deploy
  * [ ] compiled to /bin automatically when in dev mode
  * [ ] extract dependencies and version mapping for different project kinds as constants 
  * [ ] maintain a list of file templates
  * [ ] print out installing dependencies in log 
  * [ ] + `.gitignore` will got renamed to `.npmignore`
  * [x] `npm install` should have logs printed out
  * [ ] tests 
  * [ ] better command line
    * https://github.com/sindresorhus/meow

## Future requirements

* [ ] when provided with different project kinds arguments, generate skeletons based on different templates - e.g., react projects, markdown deck for session sharing 
