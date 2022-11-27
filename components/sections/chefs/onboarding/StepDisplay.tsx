import React from "react";
import { BsCheckLg } from "react-icons/bs";
export interface StepPropsType {
  isLast: boolean;
  stepText: string;
  step: number;
  isActive: boolean;
  isComplete: boolean;
}

const StepDisplay = ({
  isActive,
  isLast,
  step,
  stepText,
  isComplete,
}: StepPropsType) => {
  return (
    <div className={`flex flex-col flex-1  items-center  `}>
      <div
        className={`rounded-full bg-hmRed text-white   justify-center font-bold w-[4rem] h-[4rem]   flex items-center relative  after:h-[1rem]  ${
          isComplete ? "after:bg-hmRed" : "after:bg-[#d8d8d8]"
        } ${
          isLast
            ? "after:w-[0rem] after:left-0 after:content-['']"
            : "after:w-[20rem] after:left-[3.9rem] after:absolute after:content-[' ']  "
        } `}
      >
        <span className="z-[4] relative">
          {isComplete ? <BsCheckLg /> : step}
        </span>
      </div>
      <span>{stepText}</span>
    </div>
  );
};

export default StepDisplay;
