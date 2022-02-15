import React from 'react'
import CardItem from './CardItem'

import './Cards.css'

export default function Cards() {
  return (
    <div className="cards">
      <h1>Conheça lugares épicos!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Explore a Amazonia"
              label="Amazonia"
              path="/"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Viage atraves das ilhas de Bali"
              label="Ilhas de Bali"
              path="/"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Explore águas desconhecidas no Oceano Atlântico "
              label="Oceano Atlantlico"
              path="/"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Já pensou em jogar futebol nas montanhas"
              label="Futebol nas montanhas"
              path="/"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Faça um tur guiado de camelo no deserto do saara"
              label="Saara"
              path="/"
            />
          </ul>
        </div>
      </div>
    </div>
  )
}
