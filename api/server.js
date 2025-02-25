
const express = require('express');
const cors = require('cors'); 
const app = express();
const bodyParser = require('body-parser');
const tapesRouter = require('./routers/tapes');
const artistsRouter = require('./routers/artists');
const port = 3000;
 
// Enable CORS
app.use(cors());

// Enable JSON body parsing
app.use(bodyParser.json());

// Serve the 'public' folder as a static folder
app.use(express.static('public'));

// Use the routers 
app.use('/tapes', tapesRouter);
app.use('/artists', artistsRouter);

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});