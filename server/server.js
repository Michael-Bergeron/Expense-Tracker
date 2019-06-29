const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const db = require('./db')
const app = express();
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

app.use(parser.json());
app.use(cors());
app.listen(port, () => console.log(`listening on port ${port}`));

app.use(express.static('dist')); 

app.get('/expense', (req, res) => {
  db.getData((data) => res.send(data));
})

app.post('/expense', (req, res) => {
  db.insertData(req.body, (data) => {
    res.send('success')
  })
})