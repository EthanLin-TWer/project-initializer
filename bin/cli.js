#!/usr/bin/env node

console.log('hello')

const [nodePath, commandName, ...args] = process.argv
console.log(nodePath, commandName, args)
