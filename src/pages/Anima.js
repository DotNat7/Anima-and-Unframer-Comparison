import React, { useState, useEffect } from 'react'
import "./styles.css"
import { Button } from '../components/AnimaFigma/Button'
import { ProductCard } from '../components/AnimaFigma/ProductCard'
import { Footer } from '../components/AnimaFigma/Footer'
import { LoginForm } from '../components/AnimaFigma/LoginForm'
import { SimpleForm } from '../components/AnimaFigma/SimpleForm'
import { Tab } from '../components/AnimaFigma/Tab'
import { TabPrev } from '../components/AnimaFigma/TabPrev'
import { Header } from '../components/AnimaFigma/Header'
import { TabComponents } from '../components/AnimaFigma/TabComponents'
import ProductInfo from '../components/ProductInfo'
import productPicture from '../images/image.png'

function Anima() {
  return (
    <div>
        <h1>Vítejte na stránce Anima</h1>
        <p className='pageDesc'>Zde jsou zobrazené komponenty vytvořené nástrojem Anima</p>

        <Header className="size-desktop-2" href="/chart" size="phone" />

        <ProductInfo />
 
        <TabComponents />

        {/* 
          //Ukázka Login Form vytvořeného pomocí pluginu Anima
          <LoginForm href="https://figma.com" />   
        */}


        {/* 
          //Ukázka Login Form upraveného pomocí platformy Anima Playground 
          <SimpleForm href="https://figma.com" /> 
        */}

        {/* 
          //Ukázka tlačítek 
          <div className="buttons">     
            <Button action="default" label="Do košíku" type="primary" />
            <Button action="default" label="Do košíku" type="secondary" />
          </div> 
        */} 

        {/* 
          //Ukázka Tabs před úpravou pomocí platformy Anima Playground 
          <TabPrev active className="tab-prev-instance" tab="review" />
          <TabPrev active className="tab-prev-instance" tab="spec" /> 
        */}       

        <div className='productsOffer'>
          <h1>Mohlo by Vás zajímat</h1>

          <div className='cardsrow'>
            <ProductCard
              action="default"
              href="https://figma.com"
              image={productPicture}
              price="86 990 Kč"
              productDescription="MacBook - Apple M4 Pro (14jádrový), 16,2&#34; Liquid Retina XDR lesklý 3456 × 2234 px, 120 Hz, RAM 48GB, ..."
              productTitle="MacBook Pro 16&#34; M4 Pro - Vesmírně černý"
            />


            <ProductCard
              action="default"
              href="https://figma.com"
              image={productPicture}
              price="86 990 Kč"
              productDescription="MacBook - Apple M4 Pro (14jádrový), 16,2&#34; Liquid Retina XDR lesklý 3456 × 2234 px, 120 Hz, RAM 48GB, ..."
              productTitle="MacBook Pro 16&#34; M4 Pro - Vesmírně černý"
            />

            <ProductCard
              action="default"
              href="https://figma.com"
              image={productPicture}
              price="86 990 Kč"
              productDescription="MacBook - Apple M4 Pro (14jádrový), 16,2&#34; Liquid Retina XDR lesklý 3456 × 2234 px, 120 Hz, RAM 48GB, ..."
              productTitle="MacBook Pro 16&#34; M4 Pro - Vesmírně černý"
            />
          </div>
        </div>
        
        <Footer
          href="https://www.figma.com/"
          href1="https://www.figma.com/"
          href10="https://www.figma.com/"
          href11="https://www.figma.com/"
          href2="https://www.figma.com/"
          href3="https://www.figma.com/"
          href4="https://www.figma.com/"
          href5="https://www.figma.com/"
          href6="https://www.figma.com/"
          href7="https://www.figma.com/"
          href8="https://www.figma.com/"
          href9="https://www.figma.com/"
        />
    </div>
  )
}

export default Anima