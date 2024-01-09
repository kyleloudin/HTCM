import React from 'react'
import DerVid from "../assets/video.mp4";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className=" mx-auto justify-center items-center">
        <video src={DerVid} autoPlay loop muted>
        </video>
      </div>
    </section>
  );
}; 

export default Hero;
