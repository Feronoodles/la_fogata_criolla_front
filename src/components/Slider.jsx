import React, { useRef, useState, useEffect } from 'react'
import { data } from '../assets/data';


export const Slider = () => {

  const listRef = useRef();

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const listNode = listRef.current;

    const imgNode = listNode.querySelectorAll("li > img")[currentIndex];
    
    if( imgNode )
    {
      imgNode.scrollIntoView({
        
        behavior: "smooth",
        
        
      });
    }
   
  }, [currentIndex]);
  
  const scrollToImage = (direction)=>{
    
    if(direction ==='prev')
    {
      
      setCurrentIndex(curr =>{
        
        const isFirstSlider = currentIndex===0;
        return isFirstSlider?0:curr-1;
      });
    }else{
      const isLastSlide = currentIndex === data.length-1;
      
      if(!isLastSlide)
      {
        
        setCurrentIndex(curr=> curr+1);
      }
    }
  }

  return (
    <div className='slider'>
      <div className='slider-container'>
        <div className='leftArrow' onClick={()=>scrollToImage('prev')}>&#10092;</div>
        <div className='rightArrow' onClick={()=>scrollToImage('next')}>&#10093;</div>
        <div className='container-images'> 
        <ul className='image-slider' ref={listRef} >
        {
          data.map((item)=>{
            return <li key={item.id} >
              <img src={item.imgUrl} width={1200} height={650}  />
            </li>
          })
        }
        </ul>
        </div>
        
      
      </div>
        
        </div>
  )
}
