import React from "react";

const Buttons = props => {
  return (
    <div className="Buttons">
      <img
        src="https://img.icons8.com/material/40/ffe47a/long-arrow-up.png"
        onClick={props.onBeach}
      />
    </div>
  );
};

export default Buttons;
