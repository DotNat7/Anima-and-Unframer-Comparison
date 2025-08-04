import React from "react";
import "./anima.css";

export const Tab = ({ tab, active, className, onClick }) => {
  return (
    <div
      className={`tab active-${active} ${className}`}
      onClick={onClick}
    >
      <div className="specifikace">
        {tab === "spec" && <>Specifikace</>}
        {tab === "review" && <>Recenze</>}
      </div>
    </div>
  );
};