
exports.up = function(knex, Promise) {
  console.log('up')
  return knex.schema.createTableIfNotExists('comments', function (table) {
    console.log('creating table: comments')
    table.increments('id').primary()
    table.string('author')
    table.string('text')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('comments')
    .then(function () {
        process.exit()
    })
}
