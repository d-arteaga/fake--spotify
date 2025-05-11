## Project Overview

This project is a music streaming web application inspired by Spotify. It allows users to search for songs, view their liked songs, and manage their profile. The application is built using modern web technologies, including:

- **React**: For building the user interface.
- **Vite**: For fast development and build tooling.
- **Node.js**: For the backend server.
- **Express**: For handling API requests.
- **MySQL**: For storing and retrieving music data.

The app integrates with the **Last.fm API** to fetch additional music-related data, such as artist information and album metadata, while the core song data is retrieved from a custom **MySQL music database**.

---

## Features

### 1. **Search for Songs**

- Users can search for songs by name, artist, or album.
- The search results are dynamically displayed with options to like or unlike songs.

### 2. **Liked Songs**

- Users can view a playlist of their liked songs.
- The number of liked songs is displayed dynamically.

### 3. **User Profile**

- Users can view and edit their profile, including their username.
- The profile page displays the user's followers, following count, and a link to their liked songs playlist.

### 4. **Integration with MySQL**

- The app uses a custom MySQL database to store and retrieve song information.
- API calls are made to the backend to fetch song data from the database.

### 5. **Integration with Last.fm API**

- The app uses the Last.fm API to fetch real-time music data.
- This includes artist details and album information.

---

## Technologies Used

### Frontend

- **React**: For building the user interface.
- **Bootstrap**: For styling and responsive design.
- **React Router**: For navigation between pages.

### Backend

- **Node.js**: For the server-side runtime.
- **Express**: For creating RESTful APIs.
- **Axios**: For making HTTP requests to the Last.fm API.

### Database

- **MySQL**: For storing and managing music data.
