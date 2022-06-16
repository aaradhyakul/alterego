
import React from "react"
import video from "./video/Boat.mp4"
import video2 from "./video/video1.mp4"
import video3 from "./video/house.mp4"
import video4 from "./video/aerialhouse.mp4"
// import "../index.css"
import "./MainPage.css"

const MainPage = () => {
  
  return (
    <div id="video">
      

      <video loop autoPlay muted >
        <source src={video} />
        {/* <source src ={video2} type="video/mp4"/> */}
      </video>
      <div className="bg"></div>

     




    </div>
  )
}

export default MainPage
