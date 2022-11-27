import React from "react";
import Button from "../../../elements/Button";

const Step3 = ({ nextStep }: { nextStep: () => void }) => {
  return (
    <div>
      <h2 className="text-2xl">Image upload</h2>
      <div className="mt-6 ">
        <Button
          type="button"
          onClick={nextStep}
          className="font-normal"
          variant="outline"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Step3;
