const express = require('express');
const db = require('../db');
const upload = require('../storage');

const tapesRouter = express.Router();

tapesRouter.get('/', (req, res) => {

  const sql = `
    SELECT albums.*, artists.name AS artist
    FROM albums
    JOIN artists ON albums.artist = artists.id
    ORDER BY albums.title ASC;
  `;

  db.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('An error occurred');
    }

    res.json(results);
  });

});

tapesRouter.get('/:id', (req, res) => {

  const { id } = req.params;
  const sql = `
    SELECT albums.*, artists.name AS artist
    FROM albums
    JOIN artists ON albums.artist = artists.id
    WHERE albums.id = ?
  `;

  db.query(sql, [id], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('An error occurred');
    }

    res.json(results[0]);
  });

});

tapesRouter.post('/', upload.single('image'), (req, res) => {

    const { artist_id, title } = req.body;
  
    // The uploaded file's filename is stored in 'req.file.filename'
    const image = req.file.filename;
  
    // Create the SQL query to insert the new tape
    const addAlbumSQL = `INSERT INTO albums (artist, title, image_name) VALUES (?, ?, ?)`;
  
    // Run the query above, substituting the '?' with the artist ID, title and image in that order
    db.query(addAlbumSQL, [artist_id, title, image], (err, results) => {
  
      // If an error occurred, log it and return a 500 status code
      if (err) {
        console.error(err);
        return res.status(500).send('An error occurred');
      }
  
      res.json({ message: 'Tape added successfully' });
    });
}); 

module.exports = tapesRouter;

