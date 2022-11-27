import React, { useMemo, useState } from "react";
import Body from "../../../elements/Body";
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
    <div className="h-screen w-full items-center justify-center flex flex-col">
      <h1 className="text-4xl mb-8">{title}</h1>
      <StepsDisplay steps={steps} currStep={currStep} />
      <div className="mt-8 w-[50%]">
        {currStep === 1 && <Step1 nextStep={nextStep} />}
        {currStep === 2 && <Step2 nextStep={nextStep} />}
        {currStep === 3 && <Step3 nextStep={nextStep} />}
        {currStep === 4 && <LastStep nextStep={nextStep} />}
      </div>
    </div>
  );
};

export default Onboarding;
