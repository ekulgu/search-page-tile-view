import React from "react";

const Badge = ({ text }) => {
  return (
    <div
      style={{
        borderRadius: "50px",
        background: "#cbfcd6",
        fontWeight: "normal",
        display: "inline-block",
        paddingRight: "8px",
        paddingLeft: "8px",
        color: "darkgreen"
      }}
    >
      {text}
    </div>
  );
};

export default Badge;
