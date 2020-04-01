// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
     // filename: './src/database/migrations'
     //filename: './db.sqlite'

      filename: '../src/database/db.sqlite'
     //filename: 'home/alonso/projetos/ominiStack11.0/semanaOministack11/backend/src/database/db.sqlite'
    },
    migrations: {
      directory: '../src/database/migrations'
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
