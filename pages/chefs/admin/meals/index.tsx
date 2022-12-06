import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useTable, usePagination, useSortBy, useFilters } from "react-table";
import AdminPageHeader from "../../../../components/elements/AdminPageHeader";
import Button from "../../../../components/elements/Button";
import DefaultColumnFilter from "../../../../components/elements/tables/ColumnFilter";
import { useCompaniesColumns } from "../../../../components/elements/tables/columns";
import Table from "../../../../components/elements/tables/Table";
import { useChefAuth } from "../../../../context/chefs/auth";
import { useFireBase } from "../../../../context/firebase";
import { transformDocSnap } from "../../../../helpers";
// import Pagination from "../pagination";
// import DefaultColumnFilter from "./ColumnFilter";
// import { useCompaniesColumns } from "./columns";
// import TableCell from "./TableCell";
// import TableHeadCell from "./TableHeadCell";
// import { Company } from "../../../types";
// import Table from "./Table";

const DATA: any = [
  {
    dateCreated: "20 Dec 20",
    name: "Rice and Chicken",
    quantity: 3,
    price: "$2.4",
    ratings: 8,
  },
  {
    dateCreated: "20 Dec 20",
    name: "Rice and Chicken",
    quantity: 3,
    price: "$2.4",
    ratings: 8,
  },
  {
    dateCreated: "20 Dec 20",
    name: "Rice and Chicken",
    quantity: 3,
    price: "$2.4",
    ratings: 8,
  },
];

const MealsPage = () => {
  const [dishes, setDishes] = useState([]);
  const router = useRouter();
  const { chefAuth } = useChefAuth();
  const defaultColumn = React.useMemo<any>(
    () => ({
      Filter: DefaultColumnFilter,
    }),
    []
  );
  const { columns } = useCompaniesColumns();
  const { getDishes } = useFireBase();
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data: dishes,
        defaultColumn,
      },
      useFilters
    );
  useEffect(() => {
    let unsubscribe;
    (async () => {
      unsubscribe = await getDishes(
        `${chefAuth?.uid}__${chefAuth?.firstName} ${chefAuth?.firstName}`
      );
      unsubscribe.forEach((doc) => {
        setDishes((prevState) => {
          let newState: any = [...prevState];
          newState.push(transformDocSnap(doc));
          return newState;
        });
        console.log(transformDocSnap(doc), "data");
      });
    })();
    return unsubscribe;
  }, [chefAuth, getDishes]);
  console.log(dishes, "dishes");
  return (
    <div className="w-full ">
      <AdminPageHeader title="Dishes">
        <Button
          onClick={() => {
            router.push("/chefs/admin/meals/createmeal");
          }}
          variant="secondary"
          className=""
        >
          Add New Dish
        </Button>
      </AdminPageHeader>
      <div className="px-8">
        {dishes && (
          <Table
            rows={rows}
            getTableBodyProps={getTableBodyProps}
            headerGroups={headerGroups}
            getTableProps={getTableProps}
            prepareRow={prepareRow}
          />
        )}
      </div>
    </div>
  );
};

MealsPage.requireAuth = true;
export default MealsPage;
