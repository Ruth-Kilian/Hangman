import React from "react";

const Word = ({ selectedWord, correctLetters }) => {
  return (
    <div className="word">
      {/* creating a template - split word and map through each letter */}
      {selectedWord.split("").map((letter, i) => {
        return (
          /* unique key => index */
          <span className="letter" key={i}>
            {/* checking to see if each letter is in the word(ie.the correct letters array). If it is display the letter if it isn't display a blank space */}
            {correctLetters.includes(letter) ? letter : ""}
          </span>
        );
      })}
    </div>
  );
};

export default Word;
