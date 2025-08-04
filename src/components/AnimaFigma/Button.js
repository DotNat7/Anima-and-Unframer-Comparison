import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./anima.css";

export const Button = ({ label = "Do košíku", type, action, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    type: type || "primary",

    action: action || "default",
  });

  return (
    <a
      className={`button ${state.action} ${state.type} ${className}`}
      href="/chart"
      rel="noopener noreferrer"
      target="_blank"
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <div className="label">{label}</div>
    </a>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        action: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        action: "default",
      };
  }

  return state;
}

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(["primary", "secondary"]),
  action: PropTypes.oneOf(["pressed", "hover", "default"]),
};
