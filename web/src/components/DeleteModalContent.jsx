import React, {useState, useEffect} from "react";
import m from "./AddTapeModalContent.module.css";
import g from "../global.module.css";

function DeleteModalContent({ id, onClose, onTapeDeleted }) {
    
    // Send the form data to the API
    const handleFormSubmit = async (event) => {
      event.preventDefault();
    
      console.log(`Deleting tape with ID: ${id}`);
      // Send the POST request to the API to create new tape
      const tapeResponse = await fetch(`http://localhost:3000/tapes/${id}`, {
        method: "DELETE"
      });

      // Get the response from the API
      const tapeResult = await tapeResponse.json();

      // Log the response to the console
      console.log("Success:", tapeResult);

      // Call the onTapeAdded function that was passed as a prop
      //    @NOTE: This is passed down from AllTapes.jsx and just calls the fetchTapes function to repopulate the tapes
      onTapeDeleted();

      // Close the modal.
      onClose();

    };

    return (
      <div className={m['modal-container']}>
        <div className={`${m['modal']} ${g['card']}`}>
            <h3>Are you sure you want to delete this tape?</h3>
            <form action=""className={`${g['form-group']} ${g['grid-container']}`} onSubmit={handleFormSubmit} encType="multipart/form-data">
                <div className={g['col-12']}>
                  <button className={`${g['button']} ${g['delete']}`} type="submit">Yes, delete this tape.... RIP...</button>
                </div>
            </form>
            <button onClick={onClose} className={m["modal__close-button"]}>x</button>
        </div>
      </div>
    );
  }
  
  export default DeleteModalContent;