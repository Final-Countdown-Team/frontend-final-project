import React from "react";
import "./_ButtonSecondary.scss";

function ButtonSecondary({ text, purpose, submit, userType }) {
  console.log(userType);
  return (
    <button
      type={submit && "submit"}
      className={`button-secondary ${
        userType === "venues"
          ? "button-secondary--venue"
          : "button-secondary--artist"
      } ${purpose === "login" && "button-login"}`}
    >
      {text}
    </button>
  );
}

export default ButtonSecondary;
