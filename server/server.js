const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const db = require('./db')
const app = express();

app.use(parser.json());
app.use(cors());

app.use(express.static('dist'));

app.listen(3000, () => console.log('listening on port 3000'));

app.get('/expense', (req, res) => {
  db.getData((data) => res.send(data));
})

app.post('/expense', (req, res) => {
  db.insertData(req.body, (data) => {
    res.send('success')
  })
})