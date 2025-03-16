const express = require('express');
const db = require('../db');
const upload = require('../storage');

const tapesRouter = express.Router();

// Get all tapes from the database
tapesRouter.get('/', (req, res) => {

  const artists = req.query.artists;

  let sql = `
    SELECT albums.*, artists.name AS artist, artists.id AS artist_id
    FROM albums
    JOIN artists ON albums.artist = artists.id`;


  db.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('An error occurred');
    }

    res.json(results);
    
  });

});

// Get a single tape from the database
tapesRouter.get('/:id', (req, res) => {

  // Get the id from the URL
  const { id } = req.params;

  const sql = `
    SELECT albums.*, artists.name AS artist, artists.id AS artist_id
    FROM albums
    JOIN artists ON albums.artist = artists.id
    WHERE albums.id = ?`;

  // Substitute the '?' with the id from the URL to prevent SQL injection
  db.query(sql, [id], (err, results) => {

    if (err) {
      console.error(err);
      res.status(500).send('An error occurred');
    }

    console.log(results[0]);

    res.json(results[0]);
  });

});

// Update a tape entry in the database
tapesRouter.put('/:id', upload.single('image'), (req, res) => {

  // Get the id from the URL
  const { id } = req.params;

  // Get the title and artist ID from the request body
  const { title, description, artist_id } = req.body;

  // @NOTE: We are breaking the SQL query into multiple concatenated strings for readability to only add the image_name if a file was uploaded

  let updateAlbumSQL = `
    UPDATE albums
    SET title = ?, description = ?, artist = ?
  `;

  const queryParams = [title, description, artist_id];

  // The file property will only return truthy if a file was uploaded
  if (req.file) {
    updateAlbumSQL += `, image_name = ?`;
    queryParams.push(req.file.filename);
  }

  // Finish the SQL query by adding the WHERE clause to only update the tape with the matching ID
  updateAlbumSQL += ` WHERE id = ? LIMIT 1`;
  queryParams.push(id);

  // Run the query above, substituting the '?' with the title, artist ID, image (if uploaded) and ID in that order
  db.query(updateAlbumSQL, queryParams, (err, results) => {

    if (err) {
      console.error(err);
      return res.status(500).send('An error occurred');
    }

    res.json({ message: 'Tape updated successfully' });
  });
});

// Add a new tape to the database after uploading an image that was sent in the request
tapesRouter.post('/', upload.single('image'), (req, res) => {

    // Get the artist ID and title from the request body 
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

