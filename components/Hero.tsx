import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/BgBeam";
import { TextGenerateEffect } from "./ui/TextGenerate";

const Hero = () => {
  return (
    <BackgroundBeamsWithCollision>
      <TextGenerateEffect
        className="text-left md:text-5xl lg:text-6xl"
        words="Welcome to Dear Azure"
      />
    </BackgroundBeamsWithCollision>
  );
};

export default Hero;
