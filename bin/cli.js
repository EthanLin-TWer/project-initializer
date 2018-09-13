#!/usr/bin/env node

const shell = require('shelljs')

if (!shell.which('git')) {
  console.log('command not found: git. skipping git init...')
}

const [nodePath, commandName, ...args] = process.argv
console.log(nodePath, commandName, args)
