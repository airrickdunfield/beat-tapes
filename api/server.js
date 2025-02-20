
const express = require('express');
const app = express();
const db = require('./db');
var cors = require('cors');
const port = 3000;

 
app.use(cors());

app.use(express.static('public'));

app.get('/tapes', (req, res) => {

  const sql = `
    SELECT albums.*, artists.name AS artist
    FROM albums
    JOIN artists ON albums.artist = artists.id
  `;

  db.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('An error occurred');
    }

    res.json(results);
  });

});

app.get('/artists', (req, res) => {

  const sql = `
    SELECT *
    FROM artists
  `;

  db.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('An error occurred');
    }

    res.json(results);
  });

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});