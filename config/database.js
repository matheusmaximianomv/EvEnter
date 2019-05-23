module.exports = {
  dialect : "postgres",
  port : 5432,
  host : "",
  schema : "",
  database : "",
  username : "",
  password : "",
  logging : false
}

/* Futuramente criar alguma variável global que possibilite a troca entre os tipos de banco */
/*{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
*/