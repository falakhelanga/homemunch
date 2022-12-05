import React from "react";
import AdminPageHeader from "../../../../../components/elements/AdminPageHeader";
import { CldImage, CldUploadButton, CldUploadWidget } from "next-cloudinary";
import CreateMeal from "../../../../../components/sections/chefs/meals/CreateMeal";

const CreateMealPage = () => {
  return (
    <div>
      <AdminPageHeader withBack title="Create Dish" />
      <div className="px-8 h-[85vh] overflow-auto">
        <CreateMeal />
      </div>

      {/* <CldUploadWidget>
        {({ cloudinary, widget, open }) => {
          // UI
        }}
      </CldUploadWidget>
      <CldUploadButton
        className="bg-hmYellow p-2 rounded "
        onUpload={(error: any, result: any) => {
          console.log(result, "result");
        }}
        uploadPreset="hm_default"
      >
        Upload photo
      </CldUploadButton> */}
    </div>
  );
};

export default CreateMealPage;
