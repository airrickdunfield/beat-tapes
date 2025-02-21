
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db');
var cors = require('cors');
const port = 3000;

 
app.use(cors());
app.use(bodyParser.json());

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

// Handle POST requests to add a new tape send via the web form
app.post('/tapes', (req, res) => {
  const { artist_id, new_artist, title, image } = req.body;

  if (new_artist) {

    const addArtistSQL = `INSERT INTO artists (name) VALUES (?)`;

    db.query(addArtistSQL, [new_artist], (err, results) => {

      console.log(err);

      if (err) {
        console.error(err);
        return res.status(500).send('An error occurred');
      }

      const newArtistId = results.insertId;
      const addAlbumSQL = `INSERT INTO albums (artist, title, image_name) VALUES (?, ?, ?)`;

      db.query(addAlbumSQL, [newArtistId, title, image], (err, results) => {
        if (err) {
          console.error(err);
          return res.status(500).send('An error occurred');
        }

        res.json({ message: 'success' });
      });
    });

  } else {

    const addAlbumSQL = `INSERT INTO albums (artist, title, image_name) VALUES (?, ?, ?)`;

    db.query(addAlbumSQL, [artist_id, title, image], (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).send('An error occurred');
      }

      res.json({ message: 'success' });
    });
  }
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});