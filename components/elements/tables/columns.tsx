import { useMemo, useState } from "react";

import { faPeace } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import { useRouter } from "next/router";
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
        Header: "Date Created",
        id: "dateCreated",
        accessor: "dateCreated",
      },
      {
        Header: "Name",
        id: "name",
        accessor: "name",
      },
      {
        Header: "Quantity ",
        id: "quantity",
        accessor: "quantity",
      },
      {
        Header: "Price ",
        id: "price",
        accessor: "price",
      },
      {
        Header: "Ratings",
        id: "ratings",
        accessor: "ratings",
      },

      // {
      //   Header: "Products",
      //   id: "products",
      //   // accessor: "products",
      //   disableFilters: true,
      //   Cell: () => {

      //      return <span className="bg-lightblue px-2 rounded-full text-white">
      //         SP
      //       </span>
      //     // ) : (
      //     //   <span className="bg-darkblue px-2 rounded-full text-white">
      //     //     AHDX
      //     //   </span>
      //     // );
      //   },
      // },

      // {
      //   Header: "allocated profiles",
      //   id: "allocated_profiles",
      //   accessor: "allocated_profiles",
      //   Cell: ({ value }) => <div className="flex justify-center">{value}</div>,
      //   disableFilters: true,
      // },
    ],
    []
  );

  return { columns };
};
