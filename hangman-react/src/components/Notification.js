import React from "react";

const Notification = ({ showNotification }) => {
  return (
    /* add the show class as a condition by using template literals - 
    if the letter is entered again (logic in App.js) the className will be changed to .notification-container.show in the CSS file */
    <div className={`notification-container ${showNotification ? "show" : ""}`}>
      <p>You have already entered this letter!</p>
    </div>
  );
};

export default Notification;
