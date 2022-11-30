import React, { useEffect, useState } from "react";
import { useTable, usePagination, useSortBy, useFilters } from "react-table";
import DefaultColumnFilter from "../../../components/elements/tables/ColumnFilter";
import { useCompaniesColumns } from "../../../components/elements/tables/columns";
import Table from "../../../components/elements/tables/Table";
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
  const defaultColumn = React.useMemo<any>(
    () => ({
      Filter: DefaultColumnFilter,
    }),
    []
  );
  const { columns } = useCompaniesColumns();
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data: DATA,
        defaultColumn,
      },
      useFilters
    );
  return (
    <div className="w-full ">
      <div className=" px-10 bg-white py-10 mb-7">
        <h1 className="text-5xl font-semibold">Meals</h1>
      </div>
      <div className="px-8">
        <Table
          rows={rows}
          getTableBodyProps={getTableBodyProps}
          headerGroups={headerGroups}
          getTableProps={getTableProps}
          prepareRow={prepareRow}
        />
      </div>
    </div>
  );
};

export default MealsPage;
