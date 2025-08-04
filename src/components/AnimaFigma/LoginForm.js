import PropTypes from "prop-types";
import React from "react";
import { Button } from "./Button";
import "./anima.css";

export const LoginForm = ({ href }) => {
  return (
    <div className="login-form">
      <div className="sign-up">Přihlášení</div>

      <div className="frame">
        <div className="element-form">
          <div className="text-wrapper">E-mail</div>

          <input className="e-mail" placeholder="Zadejte svůj e-mail" />
        </div>

        <div className="div">
          <div className="element-form">
            <div className="text-wrapper">Heslo</div>

            <input className="e-mail" placeholder="Zadejte své heslo" />
          </div>

          <a
            className="sign-up-2"
            href={href}
            rel="noopener noreferrer"
            target="_blank"
          >
            Zapomenuté heslo?
          </a>
        </div>
      </div>

      <Button
        action="default"
        href="figma.com"
        label="Přihlásit se"
        labelClassName="design-component-instance-node"
        type="primary"
        typePrimaryActionClassName="button-instance"
      />
    </div>
  );
};

LoginForm.propTypes = {
  href: PropTypes.string,
};
