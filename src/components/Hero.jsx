import React from "react";
import DerVid from "../assets/video.mp4";

const Hero = () => {
  return (
    <div className=" mx-auto flex justify-center items-center">
      <div className="overlay"></div>
      <video src={DerVid} autoPlay loop muted></video>
    </div>
  );
};

export default Hero;
