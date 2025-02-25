
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db');
var cors = require('cors');
const multer = require('multer');
const path = require('path');
const port = 3000;

// Configure multer for file uploads
const storage = multer.diskStorage({
  // Set the destination for uploaded files
  destination: (req, file, cb) => {
    // 'public/images' is the directory where files will be stored
    cb(null, 'public/images');
  },
  // Set the filename for uploaded files
  filename: (req, file, cb) => {
    // Use the current timestamp and the original file extension to create a unique filename
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

// Create an instance of multer with the storage configuration
const upload = multer({ storage: storage });
 
app.use(cors());
app.use(bodyParser.json());

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
  const { new_artist } = req.body;

  const addArtistSQL = `INSERT INTO artists (name) VALUES (?)`;

  db.query(addArtistSQL, [new_artist], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('An error occurred');
    }

    res.json({ message: 'Artist added successfully', artistId: results.insertId });
  });
});

// Handle POST requests to add a new tape
app.post('/tapes', upload.single('image'), (req, res) => {
  const { artist_id, title } = req.body;

  // Log the file and body to debug
  console.log('File:', req.file);
  console.log('Body:', req.body);


  // The uploaded file's filename is stored in 'req.file.filename'
  const image = req.file.filename;

  const addAlbumSQL = `INSERT INTO albums (artist, title, image_name) VALUES (?, ?, ?)`;

  db.query(addAlbumSQL, [artist_id, title, image], (err, results) => {
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