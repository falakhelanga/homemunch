import { useRouter } from "next/router";
import React from "react";
import Button from "../../../elements/Button";

const LastStep = ({ nextStep }: { nextStep: () => void }) => {
  const router = useRouter();
  return (
    <div>
      <div>
        <div className="mt-6 ">
          <Button
            type="button"
            onClick={() => {
              router.replace("/chefs");
            }}
            className="font-normal"
            variant="outline"
          >
            Go To Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LastStep;
