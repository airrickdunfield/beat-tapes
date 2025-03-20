## MDIA 4294 - Express/React - Lab App

### Weekly Topics
- Week 7: Connecting Express, React, and MySQL (MAMP) - CRUD: Simple READ
- Week 8: CRUD - Create
- Week 9: CRUD - Update
- Week 10: CRUD - Filtering w/ READ & DELETE
- Week 11: User Sign-up & JWT in Express.js
- Week 12: Refactoring & Connecting Tapes w/ Users
- Week 13: Deployment w/ Glitch.com

---

# Beat Tapes

**Beat Tapes** is a full-stack web application for managing a collection of lofi cassette tapes. Users can sign up, log in, and manage their personal library by adding, updating, and deleting tapes. The app also includes filtering functionality and integrates with a MySQL database.

---

## Features

- **User Authentication**: Sign up and log in with secure password hashing and JWT-based authentication.
- **CRUD Operations**: Create, read, update, and delete tapes in your collection.
- **Filtering**: Filter tapes by artist.
- **File Uploads**: Upload images using `multer`.

---

## Technology

### Frontend
- **React**: For building the user interface.
- **React Router**: For client-side routing.
- **Vite**: For fast development and project creation.
- **CSS Modules**: For scoped and maintainable styles.

### Backend
- **Express.js**: For the server-side framework.
- **MySQL**: For the database.
- **JWT**: For secure user authentication.
- **Multer**: For handling file uploads.
- **bcrypt**: For password hashing.

---

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (v16 or higher)
- **npm** (comes with Node.js)
- **MySQL** (v8 or higher)

### Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/beat-tapes.git
   cd beat-tapes

### Set Up the Database

1. Use the following SQL to set up the database
   ```sql
        CREATE DATABASE music;
        USE music;

        -- Create the `artists` table
        CREATE TABLE artists (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL
        );

        -- Create the `albums` table
        CREATE TABLE albums (
            id INT AUTO_INCREMENT PRIMARY KEY,
            artist INT NOT NULL,
            title VARCHAR(255) NOT NULL,
            image_name VARCHAR(255),
            description TEXT,
            FOREIGN KEY (artist) REFERENCES artists(id) ON DELETE CASCADE
        );

        -- Create the `users` table
        CREATE TABLE users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
   ```

---

### Set Up the Backend

1. Navigate to the `api` folder:
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file by copying the example:
   ```bash
   cp .env.example .env
   ```
4. Update the `.env` file with your MySQL credentials and a secure `JWT_SECRET`.
5. Start the backend server:
   ```bash
   npm run dev
   ```

---

### Set Up the Frontend

1. Navigate to the `web` directory:
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

---

### Access the Application

Open your browser and navigate to: `http://localhost:5173`

---

### Folder Structure

```
beat-tapes/
├── api/                # Backend code
│   ├── routers/        # Express routers for users, tapes, and artists
│   ├── storage.js      # Multer configuration for file uploads
│   ├── db.js           # MySQL database connection
│   ├── auth.jwt.js     # JWT authentication middleware
│   └── server.js       # Main Express server
├── web/                # Frontend code
│   ├── src/            # React source files
│   │   ├── components/ # Reusable React components
│   │   ├── pages/      # React pages
│   │   ├── assets/     # Static assets (images, fonts)
│   │   └── global.module.css # Global styles
│   └── vite.config.js  # Vite configuration
└── README.md           # Project documentation
```

---

### Scripts

#### Backend (in `/api`)
- `npm run dev`: Start the backend server with nodemon.

#### Frontend (in `/web`)
- `npm run dev`: Start the frontend development server.
- `npm run build`: Build the frontend for production.

---

### Author

This project was built by **Airrick Dunfield** as part of the MDIA 4294 Web Scripting Course.