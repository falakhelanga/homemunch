import React from "react";
import { useTable, usePagination, useSortBy, useFilters } from "react-table";
import { PartnerType } from "../../../types";
import Pagination from "../pagination";
import DefaultColumnFilter from "./ColumnFilter";
import { usePartnersColumns } from "./columns";
import Table from "./Table";
import TableCell from "./TableCell";
import TableHeadCell from "./TableHeadCell";

const DATA: PartnerType[] = [
  {
    name: "Falakhe",
    surname: "sivela",
    telephone: "+27651234546",
    email: "falakhe@bigbrave.co.za",
    assigned_companies: 3,
    companies: "bidvest",
    status: "active",
    id: "1",
  },
  {
    name: "Falakhe",
    surname: "sivela",
    telephone: "+27651234546",
    email: "falakhe@bigbrave.co.za",
    assigned_companies: 3,
    companies: "bidvest",
    status: "pending",
    id: "2",
  },
  {
    name: "Falakhe",
    surname: "sivela",
    telephone: "+27651234546",
    email: "falakhe@bigbrave.co.za",
    assigned_companies: 3,
    companies: "bidvest",
    status: "active",
    id: "3",
  },
  {
    name: "Falakhe",
    surname: "sivela",
    telephone: "+27651234546",
    email: "falakhe@bigbrave.co.za",
    assigned_companies: 3,
    companies: "bidvest",
    status: "deactivated",
    id: "4",
  },
  {
    name: "Falakhe",
    surname: "sivela",
    telephone: "+27651234546",
    email: "falakhe@bigbrave.co.za",
    assigned_companies: 3,
    companies: "bidvest",
    status: "archived",
    id: "5",
  },
];

const PartnersTable = () => {
  const defaultColumn = React.useMemo(
    () => ({
      Filter: DefaultColumnFilter,
    }),
    []
  );
  const { columns } = usePartnersColumns();
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
    <div className="w-full table-auto ">
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

export default PartnersTable;
