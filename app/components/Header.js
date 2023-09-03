import React from "react";

const Header = ({ handleDarkMode }) => {
  return (
    <div className="header">
      <h1 className="header-size">Daily Notes</h1>
      {/* <h1 className="header-color">Notes</h1> */}
      <button
        className="save"
        onClick={() => {
          handleDarkMode((prev) => !prev);
        }}
      >
        Change Theme
      </button>
    </div>
  );
};

export default Header;
