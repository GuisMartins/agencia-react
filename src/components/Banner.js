import React from 'react'
import '../App.css'
import Button from './Button'
import './Banner.css'
import './Button.css'

export default function Banner() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>O que você esta esperando?</p>
      <div className="hero-btns">
        <Button
          className="btns btn btn--outline, btn--large"
          class="btn--outline btn btn--large"
          text="teste"
          path="/Destinos"
        />

        <Button
          className="btns"
          class="btn--primary btn btn--large"
          text="Veja o trailher"
          path="/Promocoes"
        />
      </div>
    </div>
  )
}
