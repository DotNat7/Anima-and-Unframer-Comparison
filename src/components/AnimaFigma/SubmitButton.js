import React from "react";
import { useReducer } from "react";
import "./anima.css";

export const SubmitButton = ({
  label = "Přihlásit se",
  type,
  action,
  className,
  labelClassName,
  onClick,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    type: type || "primary",
    action: action || "default",
  });

  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick(e);
    }
  };

  return (
    <button
      className={`button ${state.action} ${className}`}
      type="submit"
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onClick={handleClick}
    >
      <div className={`label ${labelClassName}`}>{label}</div>
    </button>
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
