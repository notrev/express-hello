const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'mysql',
  user: 'yoda',
  password: 'theforce',
  database: 'jedi'
})

connection.connect((err) => {
  if (err) {
    console.log(`Woooops! Could not connect to database. ${err}`)
  } else {
    console.log("YAY! Connected to the database")
  }
})
connection.end()
