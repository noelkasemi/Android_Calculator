import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      fill="none"
      viewBox="0 0 24 24"
      stroke="gray"
      className="cursor-pointer "
      onClick={props.onClick}
    >
      <path
        fill="#080341"
        fillRule="evenodd"
        d="M3.75 15.75l.75.75h15l.75-.75v-7.5l-.75-.75h-15l-.75.75v7.5zm15-.75H5.25V9h1.125v2.625h1.5V9h1.5v3.375h1.5V9h1.5v2.625h1.5V9h1.5v2.625h1.5V9h1.875v6z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
