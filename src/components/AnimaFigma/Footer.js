import React from "react";
import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";
import "./anima.css";
import youtube from "../../images/youtube.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="column">
        <div className="text-wrapper">O nás</div>

        <div className="links">
          <a
            className="link"
            href="https://www.figma.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Kontakty
          </a>

          <a
            className="div"
            href="https://www.figma.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Kariéra
          </a>

          <a
            className="div"
            href="https://www.figma.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Základní informace
          </a>

          <a
            className="div"
            href="https://www.figma.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Historie a současnost
          </a>
        </div>
      </div>

      <div className="column">
        <div className="text-wrapper">Služby</div>

        <div className="links">
          <a
            className="link"
            href="https://www.figma.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Registrace
          </a>

          <a
            className="div"
            href="https://www.figma.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Stav objednávky
          </a>

          <a
            className="div"
            href="https://www.figma.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Obchodní podmínky
          </a>

          <a
            className="div"
            href="https://www.figma.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Reklamace a vrácení
          </a>
        </div>
      </div>

      <div className="column">
        <div className="text-wrapper">Nakupování</div>

        <div className="links">
          <a
            className="link"
            href="https://www.figma.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Dárkové poukazy
          </a>

          <a
            className="div"
            href="https://www.figma.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Možnosti platby
          </a>

          <a
            className="div"
            href="https://www.figma.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Možnosti doručení
          </a>

          <a
            className="div"
            href="https://www.figma.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Nákup na splátky
          </a>
        </div>
      </div>

      <div className="social-links">
        <div className="text-wrapper">Spojte se s námi</div>

        <div className="icons">
          <a href="youtube.com" rel="noopener noreferrer" target="_blank">
            <img className="img" alt="Youtube" src={youtube} />
          </a>

          <a href="facebook.com" rel="noopener noreferrer" target="_blank">
            <img className="img" alt="Facebook" src={facebook} />
          </a>

          <a href="instagram.com" rel="noopener noreferrer" target="_blank">
            <img className="img" alt="Instagram" src={instagram} />
          </a>
        </div>
      </div>
    </div>
  );
};
