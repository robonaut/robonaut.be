import { Tokens } from "marked";
import React from "react";

import Table from "../../elements/table";

export default (table: Tokens.Table): JSX.Element => {
  // @ts-ignore
  const columns = table.tokens.header.flat();
  // @ts-ignore
  const data = table.tokens.cells.map((a) => a.flat());

  return (
    <Table<Record<string, string>>
      // @ts-ignore
      columns={columns.map((column, columnIdx) => ({
        id: `column-${columnIdx}`,
        Header: column.text,
        accessor: (d: { text: string }[]): string => d[columnIdx].text,
      }))}
      data={data}
    ></Table>
  );
};
