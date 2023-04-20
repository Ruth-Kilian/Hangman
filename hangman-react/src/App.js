import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Figure from "./components/Figure";
import IncorrectLetters from "./components/IncorrectLetters";
import Word from "./components/Word";
import Popup from "./components/Popup";
import Notification from "./components/Notification";
import { displayNotification } from "./helpers/helpers";
import Restart from "./components/Restart";
import Help from "./components/Help";

// chosen words
const words = [
  "acromantula",
  "ashwinder",
  "basilisk",
  "centaur",
  "demiguise",
  "diricawl",
  "dragon",
  "dugbog",
  "erumpent",
  "fairy",
  "ghoul",
  "gnome",
  "graphorn",
  "grindylow",
  "hippogriff",
  "imp",
  "jobberknoll",
  "kelpie",
  "kneazle",
  "leprechaun",
  "merpeople",
  "niffler",
  "occamy",
  "phoenix",
  "puffskein",
  "runespoor",
  "salamander",
  "thestrals",
  "thunderbird",
  "troll",
  "unicorn",
  "werewolf",
  "wyvern",
  "yeti",
  "zouwu",
];
// returns a random integer from 0 to the length of the array for the selected words index
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [incorrectLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // function to handle the keyboard
    const handleKeydown = (event) => {
      // set the parameters
      const { key, keyCode } = event;

      // if the keyCode is a playable code (all the letters between Aa and Zz)
      if (playable && keyCode >= 65 && keyCode <= 90) {
        // covert the letter to lowercase
        const letter = key.toLowerCase();

        // if the selected word includes the typed in letter
        if (selectedWord.includes(letter)) {
          // if the current correct letters does NOT inlcude the new correct letter
          if (!correctLetters.includes(letter)) {
            // take the correctLetters array and create a copy to modify it - spread the current letters(...) and add the new letter
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            // call the helper function and pass the setter function
            displayNotification(setShowNotification);
          }
        } else {
          // if the current wrong letters does NOT inlcude the new wrong letter
          if (!incorrectLetters.includes(letter)) {
            // take the incorrectLetters array and create a copy to modify it - spread the current letters(...) and add the new incorrect letter
            setWrongLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            // call the helper function and pass the setter function
            displayNotification(setShowNotification);
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeydown);

    // create a cleanup function to remove the event listener lest the event is added everytime the app renders
    return () => window.removeEventListener("keydown", handleKeydown);
    // any time these variables below are updated the function will be called
  }, [correctLetters, incorrectLetters, playable]);

  function playAgain() {
    // set as true to play again
    setPlayable(true);
    // empty the arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    // re-select a random word
    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  return (
    <>
      <Header />
      <div className="game-container">
        <Figure incorrectLetters={incorrectLetters} />
        <IncorrectLetters incorrectLetters={incorrectLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup
        correctLetters={correctLetters}
        incorrectLetters={incorrectLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
      <Notification showNotification={showNotification} />
      <Restart setPlayable={setPlayable} playAgain={playAgain} />
      <Help />
    </>
  );
}

export default App;

/* 
https://www.w3schools.com/css/css_positioning.asp
https://hackernoon.com/tutorial-building-a-hangman-game-with-react-hooks-c22c354a?hmsr=joyk.com&utm_source=joyk.com&utm_medium=referral
https://github.com/vetrivelcsamy/reactjs-hangman/blob/master/src/components/Hangman.js
https://medium.com/@tundeszirak/hangman-game-with-reactjs-32b6587c5d66
https://www.youtube.com/watch?v=jj0W8tYX_q8
https://www.youtube.com/watch?v=dgvyE1sJS3Y
https://github.com/meenakshi-dhanani/react-hangman/blob/master/src/Hangman.jsx
https://www.youtube.com/watch?v=82-Gnw-rBiQ
https://www.youtube.com/watch?v=1-hZg_6vqqw
*/
