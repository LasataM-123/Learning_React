import React from "react";

const DisplayName = (props) => {
  return (
    <div>
      <p>
        Full Name: {props.FullName}
        <br />
        Email: {props.Email}
        <br />
        Subject: {props.Subject}
        <br />
        Message: {props.Message}
        <br />
      </p>
    </div>
  );
};
export default DisplayName;
