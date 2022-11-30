import React from "react";

const TableHeadCell = ({ column }: { column: any }) => {
  return (
    <th
      className="uppercase text-left px-3 text-sm py-2 relative"
      {...column.getHeaderProps()}
    >
      {column.render("Header")}
      <div>
        {column.canFilter ? (
          column.render("Filter")
        ) : (
          <div style={{ padding: "1.1rem 0rem" }}></div>
        )}
      </div>
    </th>
  );
};

export default TableHeadCell;
