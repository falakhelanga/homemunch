import React, { useMemo, useState } from "react";
import Body from "../../../elements/Body";
import Stepper from "../../../elements/Stepper";
import LastStep from "./LastStep";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { StepPropsType } from "./StepDisplay";
import StepsDisplay from "./StepsDisplay";

const steps: StepPropsType[] = [
  {
    isActive: true,
    isLast: false,
    step: 1,
    stepText: "Your info",
    isComplete: true,
  },
  {
    isActive: false,
    isLast: false,
    step: 2,
    stepText: "Food Safety",
    isComplete: false,
  },
  {
    isActive: false,
    isLast: false,
    step: 3,
    stepText: "Profile Info",
    isComplete: false,
  },
  {
    isActive: false,
    isLast: true,
    step: 4,
    stepText: "Done",
    isComplete: false,
  },
];
const Onboarding = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [currStep, setCurrStep] = useState(1);
  const nextStep = () => {
    setCurrStep((currStep) => currStep + 1);
  };
  const title = useMemo(() => {
    switch (currStep) {
      case 1:
        return "Your info";
      case 2:
        return "Food Safety";
      case 3:
        return "Profile info";
      case 4:
        return "Welcome to Home munch";
      default:
        return "Required Onboarding Steps";
    }
  }, [currStep]);
  return (
    <div>
      <div className="flex justify-center my-16">
        <div className="md:h-[8rem] md:w-[8rem] w-[4rem] h-[4rem] ">
          <img src="/logo.jpeg" alt="logo" className="rounded-full " />
        </div>
      </div>

      <div
        style={{ maxWidth: "960px", margin: "auto", padding: "1px 0" }}
        className=""
      >
        <h1 className="text-4xl mb-8 text-center capitalize font-semibold">
          {title}
        </h1>
        <Stepper
          steps={steps.map((step) => step.stepText)}
          currentStep={currStep - 1}
        />
        {/* <StepsDisplay steps={steps} currStep={currStep} /> */}
        <div className="mt-8 ">
          {currStep === 1 && <Step1 nextStep={nextStep} />}
          {currStep === 2 && <Step2 nextStep={nextStep} />}
          {currStep === 3 && <Step3 nextStep={nextStep} />}
          {currStep === 4 && <LastStep nextStep={nextStep} />}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
