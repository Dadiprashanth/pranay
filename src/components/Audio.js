import React, { useState, audio, useRef } from 'react'

function Audio() {
  const [play,setPlay]=useState(false)
  const [music,setAudio]=useState("")
  const audioElement=useRef(null)

// const play=document.getElementById("play")
// console.log(play)
// const music=document.querySelector('audio')

// play.AddEventListener("click",()=>{
//   music.play();
//   play.classList.replace("fa-play", "fa-pause")


// }
// )

const PlayMusic=()=>{

 setAudio("/home/prashanthdadi/Desktop/htmlproject71/project71/src/components/Images/mixkit-rain-and-thunder-storm-2390.wav")
 
 
}

  return (
    <div className='main-div'>
        <div className='music-container'>
            <h2>DP lotus Lane</h2>
            <h3>the loyalist</h3>
            <div className='img-container'>
                <img src={require("./Images/unnamed.png")} alt="UFC logo" ></img>

            </div>

          <p> <audio src={audio} ref={audioElement} controls /></p> 
          <audio src={require({audio})} controls></audio>


             <div className='music-controls'>
               <i className='fas fa-backward' id="prev" title='Previous'></i>
               <i className='fas fa-play' id="play" title='Play' onClick={PlayMusic}></i>
               <i className='fas fa-forward' id="next" title='next'></i>


            </div>


        </div>


    </div>
  )
}

export default Audio