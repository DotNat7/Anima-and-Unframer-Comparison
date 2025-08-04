import React from 'react'
import '../components/framer/styles.css'
import Button from '../components/framer/button'
import ProductCard from '../components/framer/product-card'
import Footer from '../components/framer/footer'
import Header from '../components/framer/header'
import LoginForm from '../components/framer/login-form'
import Tabs from '../components/framer/tabs'


function Framer() {
  return (
    <div>
        <h1>Vítejte na stránce Framer!</h1>
        <p className='pageDesc'>Zde jsou zobrazené komponenty vytvořené nástrojem Framer.</p>

        <Header.Responsive />
        <Tabs />
        <LoginForm />

        <div className='productsOffer'>
          <h1>Mohlo by Vás zajímat</h1>
          <div className='cardsrow'>
              <ProductCard.Responsive />
              <ProductCard.Responsive />
              <ProductCard.Responsive />
          </div>
        </div>
        <Footer.Responsive />
        
        {/* <ProductCard.Responsive productTitle='adsf' productDescription='asdf' price='dfa'/> */}
        {/* <Button variant='Secondary' label="Link to Figma" href="https://figma.com"/> */}
        
    </div>
  )
}

export default Framer