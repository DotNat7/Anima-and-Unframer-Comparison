import React, { useState } from "react";
import { Tab } from "./Tab";
import { WIndows } from "./WIndows";
import "./anima.css";

export const TabComponents = () => {
  const [activeTab, setActiveTab] = useState("spec");

  const handleTabClick = (tabType) => {
    setActiveTab(tabType);
  };

  return (
    <div className="tab-components" data-model-id="679:937">
      <div className="frame">
        <Tab 
          active={activeTab === "spec"} 
          className="tab-instance" 
          tab="spec"
          onClick={() => handleTabClick("spec")}
        />
        <Tab
          active={activeTab === "review"}
          className="design-component-instance-node"
          tab="review"
          onClick={() => handleTabClick("review")}
        />
      </div>

      <WIndows
        className="w-indows-instance"
        divClassName="w-indows-2"
        macbookProClassName="w-indows-3"
        window={activeTab === "spec" ? "specification" : "reviews"}
        activeTab={activeTab}
      />
    </div>
  );
};
