// a helper function to show the notification and take it away after 2 seconds

export function displayNotification(setter) {
  // set to the setter to true (display the notification)
  setter(true);
  // set a timeout to set the setter to false (take away the notification)
  setTimeout(() => {
    setter(false);
  }, 2000);
}

// a helper function to check whether the user won or lost

export function checkWin(correct, wrong, word) {
  let status = "win";

  // split the word and loop through each letter
  word.split("").forEach((letter) => {
    // if the correct array does NOT include a letter from the word - it is nither a win or a lose
    if (!correct.includes(letter)) {
      status = "";
    }
  });

  // check for lose - there are only 10 chances therefore the length of the wrong letters has to be 10
  if (wrong.length === 10) status = "lose";

  return status;
}
