import React, {useState, useEffect} from "react";
import m from "./AddTapeModalContent.module.css";
import g from "../global.module.css";

export default function ModalContent({ onClose }) {

    const [dbArtists, setDbArtists] = useState("");
    const [artist, setArtist] = useState("");
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [isNewArtist, setIsNewArtist] = useState(false);
    const [newArtist, setNewArtist] = useState("");

    // Load the artists from the API
    useEffect(() => {
      fetch("http://localhost:3000/artists")
        .then((res) => res.json())
        .then((data) => {
          setDbArtists(data);
          if (data.length > 0) {
            setArtist(data[0].id);
          }
        });
    }
    , []);

    // Toggle the select and the input for artists
    const handleArtistSelectChange = (eventTrigger) => {
      if (eventTrigger.target.value === "-1") {
        setIsNewArtist(true);
        setArtist("");
      } else {
        setIsNewArtist(false);
        setArtist(eventTrigger.target.value);
      }
    };
    
    // Send the form data to the API
    const handleFormSubmit = (event) => {
      event.preventDefault();
      // Handle form submission logic here
      const tapeData = {
        artist_id: artist ?? null,
        new_artist: newArtist ?? null,
        title: title,
        image: image
      };

      fetch("http://localhost:3000/tapes", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(tapeData),
      })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        onClose();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    };

    return (
      <div className={m['modal-container']}>
        <div className={`${m['modal']} ${g['card']}`}>
            <h3>Add a new tape</h3>
            <form action=""className={`${g['form-group']} ${g['grid-container']}`} onSubmit={handleFormSubmit}>
                <div className={g['col-6']}>
                  <label htmlFor="artist">Artist</label> 
                  {!isNewArtist ? (
                  <select 
                    name="artist" 
                    id="artist" 
                    value={artist} 
                    onChange={handleArtistSelectChange}>
                    {dbArtists && dbArtists.map((artist, index) => (
                      <option key={artist.id} value={artist.id}>{artist.name}</option>
                    ))}
                    <option value="-1">+ New Artist + </option>
                  </select>
                  ) : (
                    <>
                      <input 
                        type="text" 
                        name="artist" 
                        id="artist" 
                        value={newArtist} 
                        onChange={(e) => setNewArtist(e.target.value)} 
                      />
                      <button className={`${g['button']} ${m['modal__show-list']}`} onClick={() => setIsNewArtist(false)}>Show List</button>
                    </>
                  )}
                </div>
                <div className={g['col-6']}>  
                <label htmlFor="title">Title</label>
                  <input type="text" name="title" id="title" />
                  <label htmlFor="image">Image</label>
                  <input type="file" name="image" id="image" />
                </div>
                <div className={g['col-12']}>
                  <button className={g['button']} type="submit">Add tape</button>
                </div>
            </form>
            <button onClick={onClose} className={m["modal__close-button"]}>x</button>
        </div>
      </div>
    );
  }
  