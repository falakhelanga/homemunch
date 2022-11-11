import React from "react";

interface StepProps {
  step: {
    image: string;
    description: string;
    title: string;
  };
}

const Step = ({ step }: StepProps) => {
  return (
    <div className=" pb-4 text-center">
      <div className="rounded-t-md  ">
        <div>
          <img
            src={step?.image}
            alt={step.description}
            className="rounded-t-lg  aspect-square "
          />
        </div>
        <div className="font-bold text-lg mt-3">{step.title}</div>
        <p className="mt-6 px-4 md:text-md ">{step.description}</p>
      </div>
    </div>
  );
};

export default Step;
