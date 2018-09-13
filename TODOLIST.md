# TODOLIST

* [x] be able to run command locally - 7min
* [ ] be able to generate a project structure - 25min :18min
  * [x] init with 'git init'
  * [x] init with 'npm init' with default parameters
  * [x] install dependencies
* [ ] be able to take in parameters - 10min
  * [ ] create a new project folder with provided name
  * [ ] run 'git init' under created project root
  * [ ] make npm init customizable
  * [ ] do not call 'git init' and touch `.gitignore` when git command is not present
  * [ ] abort if user does not have npm installed
  * [ ] when provided with different project kinds arguments, generate skeletons based on different templates
* [ ] refactor
  * [ ] extract dependencies and version mapping for different project kinds as constants 
  * [ ] maintain a list of file templates
