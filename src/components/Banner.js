import React from 'react'
import '../App.css'
import Button from './Button'
import './Banner.css'
import './Button.css'

export default function Banner() {
  return (
    <div className="banner-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>AVENTUAS TE AGUARDAM</h1>
      <p>O que você esta esperando?</p>
      <div className="banner-btns">
        <Button
          className="btns btn_ btn--outline, btn--large"
          class="btn--outline btn btn--large"
          text="DESTINOS"
          path="/Destinos"
        />

        <Button
          className="btns"
          class="btn--primary btn btn--large"
          text="PROMOÇÕES"
          path="/Promocoes"
        />
      </div>
    </div>
  )
}
