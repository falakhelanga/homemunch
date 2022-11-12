import React from "react";
import Body from "../../elements/Body";
import Strip from "../../elements/Strip";
import Title from "../../elements/Title";
import Step from "./Step";

const steps: {
  image: string;
  description: string;
  title: string;
}[] = [
  {
    title: "Your Dishes, Your Prices",
    image: "/images/cooking.png",
    description:
      "Become your own boss and earn money from your own kitchen. Cook what you want and let the food to do the talking.",
  },
  {
    title: "Easy, Curbside Pickups",
    image: "/images/easy-to-use.png",
    description: "Easy to use platform. Cook, share your menu and get orders.",
  },
  {
    title: "Set Your Own Schedule",
    image: "/images/schedule.png",
    description:
      "You set your own menu, days you want to cook, and the price of your dishes.",
  },
];

const HowItWorksForTheChefs = () => {
  return (
    <div className="">
      <Strip>
        <Title className="text-center">How it works for Chefs</Title>
      </Strip>
      {/* <div className="flex justify-center">
        <Title className="text-black">How it works</Title>
      </div> */}

      <Body className="   h-full flex items-center my-16 md:my-[10rem]">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
          {steps.map((step, idx) => {
            return <Step key={idx} step={step} />;
          })}
        </div>
      </Body>
    </div>
  );
};

export default HowItWorksForTheChefs;
