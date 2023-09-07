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
        behavior: "smooth"
      });
    }
   
  }, [currentIndex])
  

  return (
    <div className='slider'>
      <div className='slider-container'>
        <div className='container-images'> 
        <ul ref={listRef}>
        {
          data.map((item)=>{
            return <li key={item.id}>
              <img src={item.imgUrl} width={1000} height={600} />
            </li>
          })
        }
        </ul>
        </div>
        
      
      </div>
        
        </div>
  )
}
