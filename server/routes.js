'use strict'


var knex = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: './data/comments.sqlite'
    },
    useNullAsDefault: true
  })

exports = module.exports = function (app) {
    app.get('/comments', function (req, res) {
        knex('comments')
        .select('*')
        .then(function(data){
          console.log("in app get", data)
          res.send(data)
        })
    })

}
