import React from 'react'


export default function ColorItem({color}) {


function changeColor(){
  document.body.style.backgroundColor=color
}
 
  return (
    <div className='coloritem' style={{'--cool':color}} onClick={changeColor}> 
   
    </div>
  )
}
