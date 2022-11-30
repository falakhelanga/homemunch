import React from "react";

import TableCell from "./TableCell";
import TableHeadCell from "./TableHeadCell";

interface TableProps {
  getTableProps: any;
  headerGroups: any;
  getTableBodyProps: any;
  prepareRow: any;
  rows: any;
}

const Table = ({
  getTableBodyProps,
  getTableProps,
  headerGroups,
  prepareRow,
  rows,
}: TableProps) => {
  return (
    <>
      <table {...getTableProps} className="w-full">
        <thead className="background">
          {headerGroups.map((headerGroup, index) => (
            <tr key={index} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, index) => (
                <TableHeadCell column={column} key={index} />
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                key={i}
                className=" border-b border-warmgray-300"
              >
                {row.cells.map((cell, i) => {
                  return <TableCell key={i} cell={cell} />;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <div className="mt-8 w-full d-flex justify-center">
        <Pagination />
      </div> */}
    </>
  );
};

export default Table;
