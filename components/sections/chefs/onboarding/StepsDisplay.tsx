import React from "react";
import { boolean } from "yup/lib/locale";
import StepDisplay, { StepPropsType } from "./StepDisplay";

const StepsDisplay = ({
  steps,
  currStep,
}: {
  steps: StepPropsType[];
  currStep: number;
}) => {
  return (
    <div className="flex w-full ">
      {steps.map((step, idx) => {
        return (
          <StepDisplay
            isComplete={step.step < currStep}
            key={step.step}
            isActive={step.step === currStep}
            isLast={idx === steps.length - 1}
            step={step.step}
            stepText={step.stepText}
          />
        );
      })}
    </div>
  );
};

export default StepsDisplay;
