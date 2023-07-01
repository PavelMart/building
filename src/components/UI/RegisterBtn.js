import React from "react";

const RegisterBtn = ({ link, children, onClick, classes = [] }) => {
  return (
    <a href={link} id="register" className={["btn", "btn-red", ...classes].join(" ")} onClick={onClick}>
      {children}
    </a>
  );
};

export default RegisterBtn;
