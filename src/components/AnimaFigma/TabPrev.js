import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./anima.css";

export const TabPrev = ({ tab, active, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    tab: tab || "spec",

    active: active || true,
  });

  return (
    <div
      className={`tab-prev active-${state.active} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className="specifikace">
        {state.tab === "spec" && <>Specifikace</>}

        {state.tab === "review" && <>Recenze</>}
      </div>
    </div>
  );
};

function reducer(state, action) {
  if (state.active === false && state.tab === "spec") {
    switch (action) {
      case "click":
        return {
          active: true,

          tab: "spec",
        };
    }
  }

  if (state.active === true && state.tab === "spec") {
    switch (action) {
      case "click":
        return {
          active: false,

          tab: "spec",
        };
    }
  }

  if (state.active === false && state.tab === "review") {
    switch (action) {
      case "click":
        return {
          active: true,

          tab: "review",
        };
    }
  }

  if (state.active === true && state.tab === "review") {
    switch (action) {
      case "click":
        return {
          active: false,

          tab: "review",
        };
    }
  }

  return state;
}

TabPrev.propTypes = {
  tab: PropTypes.oneOf(["spec", "review"]),
  active: PropTypes.bool,
};
