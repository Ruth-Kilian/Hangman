import React, { useEffect } from "react";
import { checkWin } from "../helpers/helpers";

const Popup = ({
  correctLetters,
  incorrectLetters,
  selectedWord,
  setPlayable,
  playAgain,
}) => {
  let finalMessage = "";
  let finalMessageRevealWord = "";
  let playable = true;

  // if the checkWin status equlas win then the user won
  if (checkWin(correctLetters, incorrectLetters, selectedWord) === "win") {
    finalMessage = "Congratulations! You Won!";
    playable = false;

    // else the checkWin status = lose then the user lost
  } else if (
    checkWin(correctLetters, incorrectLetters, selectedWord) === "lose"
  ) {
    finalMessage = "Unfortunately, you lost.";
    finalMessageRevealWord = `The word was: ${selectedWord}`;
    playable = false;
  }

  useEffect(() => setPlayable(playable));

  return (
    <div
      className="popup-container"
      // if the final message is not blank change the display to flex else display nothing
      style={finalMessage !== "" ? { display: "flex" } : {}}
    >
      {" "}
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  );
};

export default Popup;
