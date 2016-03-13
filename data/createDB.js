var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './data/comments.sqlite'
  },
  useNullAsDefault: true
})

// https://www.sqlite.org/lang_droptable.html
var dropSqlComments = 'DROP TABLE IF EXISTS comments;'

var createSqlComments = [
  'CREATE TABLE comments (',
	'id INTEGER PRIMARY KEY ASC,',
	'author VARCHAR(255),',
	'text VARCHAR(255));',

].join(' ')

knex.raw(dropSqlComments).then(function (resp) {
  return knex.raw(createSqlComments)
	}).then(function (resp) {
	  process.exit()
	})
