import React from "react";
import { BsCheckLg } from "react-icons/bs";

const Stepper = ({
  steps,
  currentStep,
}: {
  steps: any;
  currentStep: number;
}) => {
  const getStepColours = (stepIdx: any, currentStep: any) => {
    if (stepIdx === currentStep) {
      return {
        backgroundColor: "#FFFFFF",
        color: "#FF1616",
        numberBackgroundColor: "#FF1616",
        numberColor: "#FFFFFF",
      };
    } else {
      switch (stepIdx) {
        case 1:
          return {
            backgroundColor: "#FAFAFA",
            color: "#50555C",
            numberBackgroundColor: "rgba(151, 151, 151, 0.26)",
            numberColor: "#50555C",
          };
        case 2:
          return {
            backgroundColor: "#F4F4F5",
            color: "#50555C",
            numberBackgroundColor: "rgba(151, 151, 151, 0.26)",
            numberColor: "#50555C",
          };
        default:
          return {
            backgroundColor: "#FAFAFA",
            color: "#50555C",
            numberBackgroundColor: "rgba(151, 151, 151, 0.26)",
            numberColor: "#50555C",
          };
      }
    }
  };

  return (
    <div
      style={{
        display: "flex",
        border: "1px solid #E4E4E7",
        borderRadius: "12px",
        margin: "0 1em",
      }}
    >
      {steps.map((step: any, stepIdx: number) => {
        return (
          <React.Fragment key={stepIdx}>
            <div
              style={{
                borderRadius:
                  stepIdx === 0
                    ? "12px 0 0 12px"
                    : stepIdx === steps.length - 1
                    ? "0 12px 12px 0"
                    : "0",

                flex: "1",
                textAlign: "center",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                fontSize: "20px",
                fontWeight: "500",
                padding: "32px 0",

                color: getStepColours(stepIdx, currentStep).color,
                backgroundColor: getStepColours(stepIdx, currentStep)
                  .backgroundColor,
              }}
              key={stepIdx}
            >
              {stepIdx >= currentStep ? (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    borderRadius: "100%",
                    backgroundColor: getStepColours(stepIdx, currentStep)
                      .numberBackgroundColor,
                    color: getStepColours(stepIdx, currentStep).numberColor,
                    fontSize: "24px",
                    marginRight: "16px",
                  }}
                >
                  {stepIdx + 1}
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0 0 0 0",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    borderRadius: "100%",
                    backgroundColor: "#FF1616",
                    color: "white",
                    marginRight: "16px",
                    fontSize: "2px",
                  }}
                >
                  <BsCheckLg size={25} />
                </div>
              )}
              {step}
            </div>

            {/* Seperator */}
            {stepIdx < steps.length - 1 && (
              <div
                style={{
                  display: "block",
                  width: "14px",
                  borderRadius: "0",
                  color: getStepColours(stepIdx, currentStep).color,
                  backgroundColor: getStepColours(stepIdx + 1, currentStep)
                    .backgroundColor,
                }}
              >
                <svg
                  className="h-full w-full text-gray-300"
                  style={{ color: "#E4E4E7", width: "100%", height: "100%" }}
                  viewBox="0 0 22 80"
                  fill={getStepColours(stepIdx, currentStep).backgroundColor}
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 -2L20 40L0 82"
                    vectorEffect="non-scaling-stroke"
                    stroke="currentcolor"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Stepper;
