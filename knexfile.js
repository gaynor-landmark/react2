module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/commentdb.sqlite3'
    },
    useNullAsDefault: true
  },

  directory: __dirname + '/migrations',

  tableName: 'migrations'

};
