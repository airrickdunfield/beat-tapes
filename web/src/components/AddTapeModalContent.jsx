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

    const handleArtistSelectChange = (eventTrigger) => {
      if (eventTrigger.target.value === "-1") {
        setIsNewArtist(true);
        setArtist("");
      } else {
        setIsNewArtist(false);
        setArtist(eventTrigger.target.value);
      }
    };

    return (
      <div className={m['modal-container']}>
        <div className={`${m['modal']} ${g['card']}`}>
            
            <h3>Add a new tape</h3>
            <form action=""className={`${g['form-group']} ${g['grid-container']}`}>
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
  