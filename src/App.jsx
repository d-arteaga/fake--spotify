import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import HomeSection from "./components/HomeSection";

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/songs")
      .then((response) => {
        setSongs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <Header /> <HomeSection />
      {/* <div>
        <h1>Data from MySQL Database</h1>
        <ul>
          {songs.map((song, index) => (
            <li key={index}>{song.name}</li>
          ))}
        </ul>
      </div> */}
    </>
  );
}

export default App;
