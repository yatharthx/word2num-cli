import test from 'ava'
import execa from 'execa'

test('should print number on cli when invoked with a word number', async t => {
  t.is(await execa.stdout('./cli.js', ['three']), '3')
})

test('should show error when invoked with an invalid number word', async t => {
  t.is(await execa.stdout('./cli.js', ['fourr hundred']), '❌	fourr is not a number.')
})
