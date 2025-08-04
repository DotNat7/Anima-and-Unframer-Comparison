import PropTypes from "prop-types";
import React from "react";
import { Button } from "./Button";
import image2 from "../../images/image.png";
import image from "../../images/image.png";
import "./anima.css";

export const ProductCard = ({
  productTitle = 'MacBook Pro 16" M4 Pro - Vesmírně černý ',
  productDescription = 'MacBook - Apple M4 Pro (14jádrový), 16,2" Liquid Retina XDR lesklý 3456 × 2234 px, 120 Hz, RAM 48GB, ...',
  price = "86 990 Kč",
  action,
  image = "image.png",
  href,
}) => {
  return (
    <div className={`product-card action-0-${action}`}>
      <img
        className="image"
        alt="Image"
        src={action === "hover" ? image2 : image}
      />

      <div className="product-info">
        <a href={href} rel="noopener noreferrer" target="_blank">
          <p className="product-title">{productTitle}</p>
        </a>

        <p className="product-description">{productDescription}</p>
      </div>

      <div className="price-button">
        <div className="price">{price}</div>

        <Button
          action="default"
          label="Do košíku"
          type="primary"
        />
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  productTitle: PropTypes.string,
  productDescription: PropTypes.string,
  price: PropTypes.string,
  action: PropTypes.oneOf(["hover", "default"]),
  image: PropTypes.string,
  href: PropTypes.string,
};