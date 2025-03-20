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

**Beat Tapes** is a full-stack web application for managing a collection of lofi cassette tapes. Users can sign up, log in, and manage their personal tape library by adding, updating, and deleting tapes. The app also includes filtering functionality and integrates with a MySQL database for persistent storage.

---

## Features

- **User Authentication**: Sign up and log in with secure password hashing and JWT-based authentication.
- **CRUD Operations**: Create, read, update, and delete tapes in your collection.
- **Filtering**: Filter tapes by artist.
- **File Uploads**: Upload images for tapes using `multer`.

---

## Technology Stack

### Frontend
- **React**: For building the user interface.
- **React Router**: For client-side routing.
- **Vite**: For fast development and build tooling.
- **CSS Modules**: For scoped and maintainable styles.

### Backend
- **Express.js**: For building the RESTful API.
- **MySQL**: For database storage.
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

### Set Up the Backend

1. Navigate to the `api` directory:
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

### Set Up the Database

1. Create a MySQL database named `music`.
2. Import the schema:
   ```sql
   SOURCE path/to/schema.sql;
   ```

---

### Access the Application

Open your browser and navigate to: `http://localhost:3000`

---

### Folder Structure

```
/api    # Backend code
/web    # Frontend code
```

---

### Scripts

#### Backend (in `/api`)
- `npm run dev`: Start the backend server with nodemon.

#### Frontend (in `/web`)
- `npm run dev`: Start the frontend development server.
- `npm run build`: Build the frontend for production.
- `npm run preview`: Preview the production build.

---

### Author

This project was built by **Airrick Dunfield** as part of the MDIA 4294 course. It demonstrates the integration of React, Express, and MySQL to create a full-stack CRUD application.