import { useRouter } from "next/router";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
const AdminPageHeader = ({
  children,
  title,
  withBack,
}: {
  children?: React.ReactNode;
  title: string;
  withBack?: boolean;
}) => {
  const router = useRouter();
  return (
    <div className="flex  items-stretch  my-4 ">
      {withBack && (
        <div
          onClick={() => router.back()}
          className=" h-full px-4 flex justify-center items-center"
        >
          <IoIosArrowBack size={32} />
        </div>
      )}

      <div className=" flex-1 px-10 items-center   mb-7 flex justify-between h-full">
        <div className="flex items-center gap-4 h-full">
          <h1 className="text-5xl font-medium ">{title}</h1>
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
};

export default AdminPageHeader;
