const mysql = require('mysql');

const db = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'expenses'
});

const getData = (cb) => {
  db.query('select c.name, e.expense, e.cost from expense e inner join categories c where e.cat_id = c.id;', (err, results) => {
    if (err){console.log(err)}
    cb(results)
  })
}

const insertData = (newData, cb) => {
  console.log(newData)
  db.query(`insert into expense (expense, cost, cat_id) values ("${newData.body.expense}", ${newData.body.cost}, (select id from categories where name = "${newData.body.category}") );`, (err, results) => {
    if (err) {console.log(err)}
    cb('success')
  });
}

module.exports = { getData, insertData }