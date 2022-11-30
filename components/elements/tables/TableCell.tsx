import React from "react";

const TableCell = ({ cell }: { cell: any }) => {
  return (
    <td
      {...cell.getCellProps()}
      className="capitalize text-left px-3 text-sm py-4"
    >
      {cell.render("Cell")}
    </td>
  );
};

export default TableCell;
