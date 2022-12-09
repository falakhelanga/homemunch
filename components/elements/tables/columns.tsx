import { useMemo, useState } from "react";

import { faPeace } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import { useRouter } from "next/router";
import { AiTwotoneEdit } from "react-icons/ai";
export const useAppUsersColumns = () => {
  const router = useRouter();
  const [allAppUsersSelected, setAllAppUsersSelected] = useState(false);
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        id: "name",
        accessor: "name",
      },
      {
        Header: "Surname",
        id: "surname",
        accessor: "surname",
      },
      {
        Header: "Contact",
        id: "contact",
        accessor: "contact",
      },
      {
        Header: "sp uses",
        id: "spuses",
        accessor: "sp_uses",
        disableFilters: true,
      },
      {
        Header: "ahdx uses",
        id: "ahdxuses",
        accessor: "ahdx_uses",
        disableFilters: true,
      },
      {
        Header: "Selected doctor",
        id: "selected_doctor",
        accessor: "selected_doctor",
      },
      {
        Header: "active profiles",
        id: "active_profiles",
        accessor: "active_profiles",

        disableFilters: true,
      },

      {
        Header: "client",
        id: "client",
        accessor: "client",
      },
    ],
    []
  );

  return { columns };
};

////////////////////////////// companies columns ////////////////////////////////////

export const useCompaniesColumns = () => {
  const router = useRouter();
  const columns = useMemo(
    () => [
      {
        Header: "Image",
        id: "dishImage",
        accessor: "imageGallery",
        Cell: (props: any) => {
          return (
            <div className="rounded-md aspect-square overflow-hidden w-[5rem] h-[5rem]">
              <img
                className="h-full w-full"
                src={props.value[0]}
                alt="dish image"
              />
            </div>
          );
        },
      },
      {
        Header: "Date Created",
        id: "dateCreated",
        accessor: "dateCreated",
        Cell: (props: any) => {
          console.log(props?.value.toDate(), "props");
          return new Date(props?.value.toDate()).toDateString();
        },
      },
      {
        Header: "Name",
        id: "name",
        accessor: "name",
      },
      {
        Header: "Quantity ",
        id: "quantity",
        accessor: "qty",
      },
      {
        Header: "Price ",
        id: "price",
        accessor: "price",
      },
      {
        Header: "Description",
        id: "description",
        accessor: "description",
      },
      {
        Header: "Item Availability",
        id: "availability",
        accessor: "availability",
        Cell: (props) => {
          const text = props.value
            .map((curr: { label: any }) => curr)
            .join(", ");
          return text;
        },
      },
      {
        Header: "Ratings",
        id: "ratings",
        accessor: "ratings",
        Cell: () => {
          return "-";
        },
      },
      {
        Header: "Edit",
        id: "edit",
        // accessor: "ratings",
        Cell: () => {
          return <AiTwotoneEdit size={20} />;
        },
      },
    ],
    []
  );

  return { columns };
};
