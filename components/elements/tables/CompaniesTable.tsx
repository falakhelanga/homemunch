import React, { useEffect, useState } from "react";
import { useTable, usePagination, useSortBy, useFilters } from "react-table";
import Pagination from "../pagination";
import DefaultColumnFilter from "./ColumnFilter";
import { useCompaniesColumns } from "./columns";
import TableCell from "./TableCell";
import TableHeadCell from "./TableHeadCell";
import { Company } from "../../../types";
import Table from "./Table";
import { useCompanies } from "../../../context/companies";
import { useApi } from "../../../context/api";
import { useAuth } from "../../../context/auth";
import { Paths } from "../../../client";
const DATA: Company[] = [
  {
    name: "Falakhe",
    telephone: "0651234567",
    vat_number: "7812345678",
    adress: "32 hill st, Randburg,Sout Africa",
    admin_surname: "burger",
    products: "AHDX",
    allocated_profiles: 4,
    admin_name: "Tyran",
    admin_email_adress: "test@bigbrave.co.za",
    id: "1",
  },
  {
    name: "Falakhe",
    admin_surname: "burger",
    telephone: "0651234567",
    vat_number: "7812345678",
    adress: "32 hill st, Randburg,Sout Africa",
    products: "SP",
    allocated_profiles: 6,
    admin_name: "Tyran",
    admin_email_adress: "test@bigbrave.co.za",
    id: "2",
  },
  {
    name: "Falakhe",
    telephone: "0651234567",
    vat_number: "7812345678",
    adress: "32 hill st, Randburg,Sout Africa",
    products: "SP",
    allocated_profiles: 6,
    admin_name: "Tyran",
    admin_email_adress: "test@bigbrave.co.za",
    id: "3",
    admin_surname: "burger",
  },
  {
    name: "Falakhe",
    telephone: "0651234567",
    vat_number: "7812345678",
    adress: "32 hill st, Randburg,Sout Africa",
    products: "AHDX",
    allocated_profiles: 4,
    admin_name: "Tyran",
    admin_email_adress: "test@bigbrave.co.za",
    id: "4",
    admin_surname: "burger",
  },
];

const CompaniesTable = ({
  companies,
}: {
  companies: Paths.GetCompanies.Responses.$200;
}) => {
  const defaultColumn = React.useMemo(
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
        data: companies,
        defaultColumn,
      },
      useFilters
    );
  return (
    <div className="w-full ">
      <Table
        rows={rows}
        getTableBodyProps={getTableBodyProps}
        headerGroups={headerGroups}
        getTableProps={getTableProps}
        prepareRow={prepareRow}
      />
    </div>
  );
};

export default CompaniesTable;
