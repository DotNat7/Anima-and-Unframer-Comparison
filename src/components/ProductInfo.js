import React from 'react';
import './product.css';
import { Button } from './AnimaFigma/Button';
import productImage from '../images/image.png'

const ProductInfo = () => {
  return (
    <div className="product-container">
      <div className="product-image">
        <img src={productImage} alt="MacBook Pro 14 M4 Pro" />
      </div>

      <div className="product-info">
        
        <div>
            <h2 className="product-title">
            MacBook Pro 14&quot; M4 PRO CZ 2024 Vesmírně černý
            </h2>
            <p className="product-description">
            MacBook – Apple M4 Pro (12jádrový), 14,2&quot; Liquid Retina XDR lesklý 3024 × 1964 px, 120 Hz,
            RAM 24GB, Apple M4 PRO 16jádrová GPU, SSD 512GB, podsvícená klávesnice, webkamera,
            čtečka otisků prstů, WiFi 6E, Bluetooth, hmotnost 1,6 kg, macOS
            </p>
        </div>

        <span className='price'>
            <div className="product-price">59 990 Kč</div>
            <div className="product-vat">bez DPH 49 579 Kč</div>
        </span>
        

        <div className="product-buttons">
          <Button action="default" label="Do košíku" type="primary" />
          <Button action="default" label="Rezervovat" type="secondary" />
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;