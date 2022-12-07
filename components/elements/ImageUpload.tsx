import React, { useState } from "react";

import { FileUploader } from "react-drag-drop-files";
import { Field, useField } from "formik";
import { AiOutlineCloudUpload } from "react-icons/ai";
import axios from "axios";
import ProgressBar from "@ramonak/react-progress-bar";
const fileTypes = ["JPEG", "PNG", "GIF", "JPG"];
const ImageUpload = ({
  btnText,
  name,
  setImageUrl,
}: {
  btnText: string;
  name: string;
  setImageUrl: React.Dispatch<React.SetStateAction<null>>;
}) => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadedProgress, setUploadedProgress] = useState(0);
  const [file, setFile] = useState(null);
  const handleChange = async (file: any) => {
    const formData = new FormData();
    formData.append("file", file[0]);
    formData.append("upload_preset", "hm_default");

    const { data } = await axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`,
      formData,
      {
        onUploadProgress: (progressEvent) => {
          const res = (progressEvent.loaded / progressEvent?.total!!) * 100;
          setUploadedProgress(Math.floor(res));
        },
      }
    );
    setImageUrl(data.url);
    // console.log(data, "file");
    setFile(file);
  };
  const [field, meta, helpers] = useField(name);
  const { value } = field;
  console.log(uploadedImage, "oploade");

  return (
    <div>
      <FileUploader
        multiple={true}
        handleChange={handleChange}
        name="file"
        types={fileTypes}
      >
        <div className="bg-white rounded-md py-6 px-10 ">
          <div className="flex flex-col items-center">
            <h2 className="text-center text-xl font-semibold">{btnText}</h2>
            <span className="text-gray-400 text-sm">
              PNG, JPG, JPEG and GIF files are allowed
            </span>
          </div>
          <div className="border border-gray-300 border-dashed mx-10 rounded-lg my-4 flex flex-col items-center justify-center">
            <div className="flex justify-center">
              <AiOutlineCloudUpload className="text-[15rem] text-gray-300 " />
            </div>
            <span className="mb-4">
              Drand and drop or browse to choose a file
            </span>
          </div>
          <div className="mx-16">
            {uploadedProgress !== 0 && (
              <ProgressBar
                // completedClassName="bg-black"

                bgColor="#00ff00"
                completed={uploadedProgress}
              />
            )}
          </div>
        </div>
      </FileUploader>
    </div>

    // <div>
    //   <div className="bg-white rounded-md ">
    //     <div className="flex justify-center">
    //       <AiOutlineCloudUpload className="text-[20rem] text-gray-300" />
    //     </div>
    //   </div>
    //   {/* <CldImage
    //     width="300"
    //     height="300"
    //     src={
    //       uploadedImage
    //         ? uploadedImage
    //         : "https://res.cloudinary.com/do5z8cakb/image/upload/v1670212741/user-placeholder_x6vqc1.jpg"
    //     }
    //   /> */}
    //   <CldUploadWidget>
    //     {({ cloudinary, widget, open }: any) => {
    //       // UI
    //     }}
    //   </CldUploadWidget>
    //   <div>
    //     <CldUploadButton
    //       value={value}
    //       className="bg-hmYellow p-2 rounded mt-4 "
    //       onUpload={(error: any, result: any) => {
    //         setUploadedImage(result?.info?.url);
    //         helpers.setValue(result?.info?.url);
    //         console.log(result?.info?.url, "result");
    //       }}
    //       uploadPreset="hm_default"
    //     >
    //       {btnText}
    //     </CldUploadButton>
    //     {meta.touched && meta.error && (
    //       <div className="text-red-600 text-sm p-2  bg-opacity-10">
    //         {meta.error}
    //       </div>
    //     )}
    //   </div>
    // </div>
  );
};

export default ImageUpload;
