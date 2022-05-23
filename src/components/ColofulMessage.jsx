import React from "react";

const ColofulMessage = (props) => {
  const { color, children } = props;
  const contStyle = {
    // color: color,の場合、以下でも可能
    color,
    fontSize: "20px"
  };
  return <p style={contStyle}>{children}</p>;
  // return <p style={contStyle}>{props.message}</p>;
};

export default ColofulMessage;
