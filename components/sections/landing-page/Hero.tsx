import React from "react";
import Body from "../../elements/Body";
import Button from "../../elements/Button";
import Heading from "../../elements/Heading";

const Hero = () => {
  return (
    <div>
      <div className="bg-[url('/images/hero.jpeg')] bg-no-repeat bg-cover w-full md:h-[80vh] h-[90vh] ">
        <div className="text-white h-full w-full bg-[rgba(0,0,0,0.6)] flex  justify-center flex-col ">
          <Body>
            <Heading className="md:mt-2">What is</Heading>
            <Heading className="mt-1">home munch</Heading>
            <p className="md:text-xl text-md  mt-12 w-[80%] ">
              Home Munch is a food marketplace for for hungry students ,
              professionals who want healthy delicious home cooked meals.
            </p>
            {/* <Button className="mt-12">Notify Me!</Button> */}
          </Body>
        </div>
      </div>
    </div>
  );
};

export default Hero;
