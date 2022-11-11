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
    title: "Explore",
    image: "/images/browse.png",
    description:
      "Browse through all home cooked meals made by local chefs around your area by simply putting in your postcode.",
  },
  {
    title: "Order",
    image: "/images/cart.png",
    description:
      "Add your home cooked meal to the Munch cart chose if you want it delivered or collection.",
  },
  {
    title: "Enjoy",
    image: "/images/enjoy.png",
    description:
      "Enjoy fresh delicious home cooked food and leave a review for the chef",
  },
];

const WhoWeAre = () => {
  return (
    <div className="">
      <Strip>
        <Title className="text-center">How it works</Title>
      </Strip>
      {/* <div className="flex justify-center">
        <Title className="text-black">How it works</Title>
      </div> */}

      <Body className="mt-14">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
          {steps.map((step, idx) => {
            return <Step key={idx} step={step} />;
          })}
        </div>
      </Body>
    </div>
  );
};

export default WhoWeAre;
