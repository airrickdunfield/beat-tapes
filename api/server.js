
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db');
var cors = require('cors');
const multer = require('multer');
const path = require('path');
const port = 3000;

// Configure multer for file uploads so we can store items later on 
const storage = multer.diskStorage({
  // Set the destination for uploaded files
  destination: (req, file, cb) => {
    // 'public/images' is the directory where files will be stored, because we are using the 'public' folder as a static folder
    cb(null, 'public/images');
  },
  // Set the filename for uploaded files
  filename: (req, file, cb) => {
    // Use the current timestamp and the original file extension to create a unique filename
    //    @NOTE: This is a simple way to avoid filename conflicts
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

// Create an instance of multer with the storage configuration
const upload = multer({ storage: storage });
 
// Enable CORS
app.use(cors());

// Enable JSON body parsing
app.use(bodyParser.json());

// Serve the 'public' folder as a static folder
app.use(express.static('public'));

app.get('/tapes', (req, res) => {

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

// Handle POST requests to add a new artist
app.post('/artists', (req, res) => {
  // Get the new artist name from the request body
  const { new_artist } = req.body;

  // Create the SQL query to insert the new artist
  const addArtistSQL = `INSERT INTO artists (name) VALUES (?)`;

  // Execute the SQL query, but subsistute the '?' with the new artist name
  db.query(addArtistSQL, [new_artist], (err, results) => {

    // If an error occurred, log it and return a 500 status code
    if (err) {
      console.error(err);
      return res.status(500).send('An error occurred');
    }
    // If the query was successful, return a JSON response with the new artist ID to be used later
    res.json({ message: 'Artist added successfully', artistId: results.insertId });
  });
});

// Handle POST requests to add a new tape
// Here we will also upload the image file to the server
app.post('/tapes', upload.single('image'), (req, res) => {
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


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});