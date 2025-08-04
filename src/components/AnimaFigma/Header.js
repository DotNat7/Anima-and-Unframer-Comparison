import React from "react";
import { Button } from "./Button";
import "./anima.css";

export const Header = ({ size, className, href }) => {
  return (
    <div className={`header ${className}`}>
      <img
        className="tech-nest-logo"
        alt="Tech nest logo"
        src="https://c.animaapp.com/LQR9NvUS/img/technestlogo-5@2x.png"
      />

      <div className="icons">
        <img
          className="more"
          alt="More"
          src="https://c.animaapp.com/LQR9NvUS/img/more-1.png"
        />
      </div>

      <div className="search-bar">
        <input className="co-hled-te" placeholder="Co hledáte?" />

        <Button
          action="default"
          className="instance-node"
          label="Hledat"
          labelClassName="button-instance"
          type="primary"
        />
      </div>

      <div className="div">
        <img
          className="user"
          alt="User"
          src="https://c.animaapp.com/LQR9NvUS/img/user-3.png"
        />

        <img
          className="separator"
          alt="Separator"
          src="https://c.animaapp.com/LQR9NvUS/img/separator-3.svg"
        />

        <a href={href} rel="noopener noreferrer" target="_blank">
          <img
            className="shoppingcart-icon"
            alt="Shoppingcart icon"
            src="https://c.animaapp.com/LQR9NvUS/img/shoppingcart-icon-3.png"
          />
        </a>
      </div>
    </div>
  );
};