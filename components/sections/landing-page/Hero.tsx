import React from "react";
import Body from "../../elements/Body";
import Button from "../../elements/Button";
import Heading from "../../elements/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
const Hero = () => {
  return (
    <div className="bg-[url('/images/hero.jpeg')] bg-no-repeat bg-cover w-full md:h-[100vh] h-[100vh] relative ">
      <div className="text-white h-full w-full bg-[rgba(0,0,0,0.6)] flex  justify-center flex-col ">
        <Body>
          <Heading className="md:mt-2">What is</Heading>
          <Heading className="mt-1">home munch</Heading>
          <p className="md:text-xl text-md  mt-12 w-[80%] ">
            Home Munch is a food marketplace for for hungry students ,
            professionals who want healthy delicious home cooked meals.
          </p>
          <div className="w-full flex justify-center absolute bottom-8  right-0 left-0 ">
            <div className="flex flex-col items-center">
              <span className="text-gray-400">
                Scroll down to see how it works
              </span>
              <FontAwesomeIcon
                className="animate-bounce mt-2"
                icon={faChevronDown}
              />
            </div>

            {/* <div className="h-10 w-10 bg-red-600"></div> */}
          </div>
          {/* <Button className="mt-12">Notify Me!</Button> */}
        </Body>
      </div>
    </div>
  );
};

export default Hero;
