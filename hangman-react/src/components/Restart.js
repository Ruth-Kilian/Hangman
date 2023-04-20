import React, { useEffect } from "react";

const Restart = ({ setPlayable, playAgain }) => {
  let playable = true;

  useEffect(() => setPlayable(playable));

  return (
    <div className="restart-container">
      <button onClick={playAgain}>Restart</button>
    </div>
  );
};

export default Restart;
