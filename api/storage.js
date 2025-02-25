const multer = require('multer');
const path = require('path');

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

const upload = multer({ storage: storage });

module.exports = upload;