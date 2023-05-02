import React from 'react'
import { useState } from 'react'
import ColorItem from './ColorItem'

// let colors= [
//   "#ff0000",
//   "#0000CD",
//   "#FF7F00",
//   "#8B5F65",
//   "#8A8A8A",
//   "#3cd34F",
//   "#E94dED",
//   "#0fe0ce",
//   "#ff094d",
//   "#2F4F4F",
//   "#242424",
//   "#f12e00",
 



// ]

export default function ColorPalette({colorFromAPP}) {
  

const [state, setState]= useState (false)

  return (
    <div className='app'>
    <div className={`palette-container ${state && 'palette-container--open'}`}>
      <h1 className='heading'>color picker</h1>
      <button className='setting-btn' onClick={()=>setState(prevstate=>!prevstate)}><i class="ri-settings-5-fill"></i></button>
      <div className='classlist'>
         {
        colorFromAPP.map((colorFromAPP)=><ColorItem color ={colorFromAPP}/>
        
        )
         
        }
      </div>     
    </div>



    </div>
  
  )
}
