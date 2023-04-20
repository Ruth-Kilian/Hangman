import React, { useState } from "react";

function Help() {
  const [popup, SetPopup] = useState(false);

  // Setpopup to NOT so that it can be closed on button click as well
  const handleClickOpen = () => {
    SetPopup(!popup);
  };
  // SetPopup to false to let the user close the popup
  const closePopup = () => {
    SetPopup(false);
  };
  return (
    <div className="help-container">
      <button onClick={handleClickOpen}>Help</button>
      <div>
        {/* if popup is true display it else display nothing */}
        {popup ? (
          <div className="popup-help">
            <div className="popup-header">
              <h1>Hangman</h1>
              <h1 onClick={closePopup}>X</h1>
            </div>
            <div>
              <p>
                Hangman is a simple word guessing game. The user trys to figure
                out an unknown word by guessing letters using the keyboard. If
                too many letters which do not appear in the word are guessed (10
                guesses), the user is hanged (the figure).
                <br />
                <br />
                <br />
                Hint: The words are related to the Magical creatures in the
                Wizarding World.
              </p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
export default Help;
