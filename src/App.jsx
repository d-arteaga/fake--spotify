import React, { useEffect, useState } from "react";
import axios from "axios";
import Home from "./components/pages/Home";
import Search from "./components/pages/Search";
import Profile from "./components/pages/Profile";
import Liked from "./components/pages/Liked";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [songs, setSongs] = useState([]); // All songs from the API
  const [likedSongs, setLikedSongs] = useState(() => {
    const storedLikedSongs = localStorage.getItem("likedSongs");
    return storedLikedSongs ? JSON.parse(storedLikedSongs) : [];
  });
  const [userName, setUserName] = useState(() => {
    const storedUserName = localStorage.getItem("userName");
    return storedUserName || "Wumbo Jumbo"; // Default username
  });

  // Fetch songs when the app loads
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/songs")
      .then((response) => {
        // Assign a unique id to each song based on its position in the list
        const songsWithIds = response.data.map((song, index) => ({
          ...song,
          id: index, // Use the index as the unique id
        }));
        setSongs(songsWithIds);
      })
      .catch((error) => {
        console.error("Error fetching songs:", error);
      });
  }, []);

  // Sync likedSongs with localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("likedSongs", JSON.stringify(likedSongs));
  }, [likedSongs]);

  // Sync userName with localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("userName", userName);
  }, [userName]);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home userName={userName} />} // Pass userName to Home
          />
          <Route
            path="/Search"
            element={
              <Search
                songs={songs}
                likedSongs={likedSongs}
                setLikedSongs={setLikedSongs}
                userName={userName} // Pass userName to Search
              />
            }
          />
          <Route
            path="/LikedSongs"
            element={<Liked likedSongs={likedSongs} userName={userName} />} // Pass userName to Liked
          />
          <Route
            path="/Profile"
            element={
              <Profile
                userName={userName}
                setUserName={setUserName}
                likedSongs={likedSongs} // Pass likedSongs to Profile
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
