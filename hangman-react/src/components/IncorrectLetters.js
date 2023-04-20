import React from "react";

// pass incorrectLetters as a prop and destructure it
const IncorrectLetters = ({ incorrectLetters }) => {
  return (
    <div className="incorrect-letters-container">
      <div>
        {/* if the length of the letters is greater than 0 using the conditional operator && to display the output if the condtion is true */}
        {incorrectLetters.length > 0 && <p>Wrong</p>}
        {incorrectLetters
          /*  map through the wrong letters, unquie key is the index, each letter is added to the span tag */
          .map((letter, i) => <span key={i}>{letter}</span>)
          /* each letter needs a comma after it -> the function .reduce(adds a comma between each span) goes through the array element-by-element adding the current value to the result from the previous step */
          .reduce(
            /* if the prev equals null then return the curr value else return the prev value with a comma and then the curr value */
            (prev, curr) => (prev === null ? [curr] : [prev, ", ", curr]),
            null
          )}
      </div>
    </div>
  );
};

export default IncorrectLetters;
