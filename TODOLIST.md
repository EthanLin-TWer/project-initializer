# TODOLIST

* [x] be able to run command locally - 7min
* [x] be able to generate a project structure - 25min
  * [x] init with 'git init'
  * [x] init with 'npm init' with default parameters
  * [x] install dependencies :18min
  * [x] init `package.json` fields :7min
  * [x] copy skeletons :12min
    * [x] `.eslintrc` 
    * [x] `.travis.yml`
    * [x] `.gitignore`
    * [x] `src`
* [x] be able to take in parameters - 25min
  * [x] do not create folder with the same name
  * [x] create a new project folder with provided name
  * [x] run 'git init' under created project root
  * [x] make npm init customizable - not necessary, prompt user with `npm init` origin inputs :10min
  * [x] do not call 'git init' and touch `.gitignore` when git command is not present
  * [x] abort if user does not have npm installed
  * [x] auto commit as the first commit 
* [x] better logging - 15min :15min 
* [ ] refactor
  * [ ] some npm init argument no longer makes sense
  * [ ] optimize, `find` will report an error when directory not found
  * [ ] use src to develop and bin to deploy
  * [ ] compiled to /bin automatically when in dev mode
  * [ ] extract dependencies and version mapping for different project kinds as constants 
  * [ ] maintain a list of file templates
  * [ ] print out installing dependencies in log 
  * [x] `npm install` should have logs printed out

## Future requirements

* [ ] when provided with different project kinds arguments, generate skeletons based on different templates - e.g., react projects 
* [ ] tests 
* [ ] better command line
  * https://github.com/sindresorhus/meow
