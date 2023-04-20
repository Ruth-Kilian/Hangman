import React from "react";
// import images from folder
import state1 from "./hangmandrawings/state1.GIF";
import state2 from "./hangmandrawings/state2.GIF";
import state3 from "./hangmandrawings/state3.GIF";
import state4 from "./hangmandrawings/state4.GIF";
import state5 from "./hangmandrawings/state5.GIF";
import state6 from "./hangmandrawings/state6.GIF";
import state7 from "./hangmandrawings/state7.GIF";
import state8 from "./hangmandrawings/state8.GIF";
import state9 from "./hangmandrawings/state9.GIF";
import state10 from "./hangmandrawings/state10.gif";
import state11 from "./hangmandrawings/state11.GIF";

const Figure = ({ incorrectLetters }) => {
  const errors = incorrectLetters.length;

  return (
    <div className="game-container">
      {/*Defaut image - blank*/}
      {errors === 0 && <img src={state1} alt="state1" />}

      {/*One wrong letter - horizontal line */}
      {errors === 1 && <img src={state2} alt="state2" />}

      {/*Two wrong letters - vertical line */}
      {errors === 2 && <img src={state3} alt="state3" />}

      {/*Three wrong letter - short horizontal line */}
      {errors === 3 && <img src={state4} alt="state4" />}

      {/*Four wrong letters - short vertical line */}
      {errors === 4 && <img src={state5} alt="state5" />}

      {/*Five wrong letters - head */}
      {errors === 5 && <img src={state6} alt="state6" />}

      {/*Six wrong letters - body */}
      {errors === 6 && <img src={state7} alt="state7" />}

      {/*Seven wrong letters - left arm */}
      {errors === 7 && <img src={state8} alt="state8" />}

      {/*Eight wrong letters - right arm */}
      {errors === 8 && <img src={state9} alt="state9" />}

      {/*Nine wrong letters - left leg */}
      {errors === 9 && <img src={state10} alt="state10" />}

      {/*Ten wrong letters - right leg */}
      {errors === 10 && <img src={state11} alt="state11" />}
    </div>
  );
};

export default Figure;
