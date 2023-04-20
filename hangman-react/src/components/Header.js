import React from "react";

const Header = () => {
  return (
    // this is a React Fragment (the code is cleaner than using div)
    <>
      <h1>Hangman</h1>
      <p className="para">Find the hidden word - Enter a letter</p>
    </>
  );
};

export default Header;
