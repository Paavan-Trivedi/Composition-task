import React from 'react'

export default function Card({srcimg, text, video}) {
  return (
    <>
    <div className="card">
      <img width="500" height="300" src={srcimg} alt="" />
      <p>{text}</p>
      <video width="190" height="340" controls > <source src={video} type="video/mp4" /> </video>
      
    </div>
    
    </>
  )
}
