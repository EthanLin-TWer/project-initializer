#!/usr/bin/env node

const shell = require('shelljs')

shell.exec('git init')
shell.exec('npm init --force')
shell.exec('npm i -D @babel/core @babel/preset-env babel-core@^7.0.0-bridge.0 babel-eslint eslint eslint-config-prettier eslint-plugin-prettier husky jest lint-staged prettier')

const [nodePath, commandName, ...args] = process.argv
console.log(nodePath, commandName, args)
