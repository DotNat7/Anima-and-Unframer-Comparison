import React from 'react'
import '../components/framer/styles.css'
import DesktopAll from '../components/framer/desktop-all'

function FramerCELEK() {
  return (
    <div>
        <h1>Vítejte na stránce Framer!</h1>
        <p className='pageDesc'>Zde je příklad celé stránky vygenerované nástrojem Framer.</p>

        <DesktopAll.Responsive />

    </div>
  )
}

export default FramerCELEK