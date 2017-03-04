#!/usr/bin/env node

const meow = require('meow')
const word2num = require('word2num')

const cli = meow(`
  Usage
    $ word2num <number-word>

  Examples
    $ word2num 'three hundred forty two'
    342
    $ word2num 'three million'
    3000000
    $ word2num seven
    7
`)

const numberWord = cli.input[0]

if (numberWord) {
  try {
    console.log(word2num(numberWord))
  } catch (err) {
    console.log('❌\t' + err.message)
  }
} else {
  cli.showHelp()
}
