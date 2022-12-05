import React, { useState } from "react";
import { CldImage, CldUploadButton, CldUploadWidget } from "next-cloudinary";
import { Field, useField } from "formik";
const ImageUpload = ({ btnText, name }: { btnText: string; name: string }) => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [field, meta, helpers] = useField(name);
  const { value } = field;
  console.log(uploadedImage, "oploade");
  return (
    <div>
      <CldImage
        width="300"
        height="300"
        src={
          uploadedImage
            ? uploadedImage
            : "https://res.cloudinary.com/do5z8cakb/image/upload/v1670212741/user-placeholder_x6vqc1.jpg"
        }
      />
      <CldUploadWidget>
        {({ cloudinary, widget, open }: any) => {
          // UI
        }}
      </CldUploadWidget>
      <div>
        <CldUploadButton
          value={value}
          className="bg-hmYellow p-2 rounded mt-4 "
          onUpload={(error: any, result: any) => {
            setUploadedImage(result?.info?.url);
            helpers.setValue(result?.info?.url);
            console.log(result?.info?.url, "result");
          }}
          uploadPreset="hm_default"
        >
          {btnText}
        </CldUploadButton>
        {meta.touched && meta.error && (
          <div className="text-red-600 text-sm p-2  bg-opacity-10">
            {meta.error}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
