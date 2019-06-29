const mysql = ('mysql');

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
  db.query('')
}

module.exports = { getData, insertData }