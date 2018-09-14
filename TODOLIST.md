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
* [ ] be able to take in parameters - 10min
  * [x] do not create folder with the same name
  * [ ] create a new project folder with provided name
  * [x] run 'git init' under created project root
  * [x] make npm init customizable - not necessary, prompt user with `npm init` origin inputs
  * [ ] do not call 'git init' and touch `.gitignore` when git command is not present
  * [ ] abort if user does not have npm installed
  * [ ] when provided with different project kinds arguments, generate skeletons based on different templates
* [ ] log support
  * [ ] better logging
* [ ] refactor
  * [ ] use src to develop and bin to deploy
  * [ ] compiled to /bin automatically when in dev mode
  * [ ] extract dependencies and version mapping for different project kinds as constants 
  * [ ] maintain a list of file templates
