import React from "react";

const Loader = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2em"
        height="2em"
        viewBox="0 0 24 24"
        className="animate-spin"
      >
        <path
          fill="none"
          stroke="#348fd5"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 3a9 9 0 1 0 9 9"
        />
      </svg>
    </div>
  );
};

export default Loader;
