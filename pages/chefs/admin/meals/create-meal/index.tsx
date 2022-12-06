import React from "react";
import AdminPageHeader from "../../../../../components/elements/AdminPageHeader";
import { CldImage, CldUploadButton, CldUploadWidget } from "next-cloudinary";
import CreateMeal from "../../../../../components/sections/chefs/meals/CreateMeal";

const CreateMealPage = () => {
  return (
    <div>
      <AdminPageHeader withBack title="Create Dish" />
      <div className="px-[6rem] h-[85vh] overflow-auto">
        <CreateMeal />
      </div>
    </div>
  );
};

export default CreateMealPage;
