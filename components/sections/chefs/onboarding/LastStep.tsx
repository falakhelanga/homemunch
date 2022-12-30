import { useRouter } from "next/router";
import React, { useState } from "react";
import { useChefAuth } from "../../../../context/chefs/auth";
import { useFireBase } from "../../../../context/firebase";
import Button from "../../../elements/Button";

const LastStep = ({ nextStep }: { nextStep: () => void }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { chefAuth } = useChefAuth();

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { addUserInfo } = useFireBase();
  const handleSubmit = async () => {
    setLoading(true);

    try {
      await addUserInfo({ isOnboarded: true }, chefAuth?.uid);
      router.replace("/chefs/admin/meals");
    } catch (error: any) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <div>
        <div className="mt-6 ">
          <Button
            type="button"
            onClick={handleSubmit}
            className="font-bold"
            variant="secondary"
          >
            Done
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LastStep;
