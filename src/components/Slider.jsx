import React from 'react'
import sliderimg from '../assets/plato_slider.jpg'
export const Slider = () => {
  return (
    <div className='slider'>
        <img src={sliderimg} alt="img slider"
        style={{
            position: 'fixed',
            left: '10%',
            
        }} />
        </div>
  )
}
