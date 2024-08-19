import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className ='hero-text'>
            <h1>Embark on a Journey Through the Heart of Ghana</h1>
            <p>Experience the Rich Culture, Vibrant Landscapes,
               and Timeless Traditions of West Africa's Hidden Gem
            </p>

            <button className='btn'> Explore more <img src={dark_arrow} alt=""/></button>
        </div>
     </div>
  )
}

export default Hero