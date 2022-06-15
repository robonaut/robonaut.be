import React from 'react';
import type {
  Cell,
  ColumnInstance,
  Row,
  TableCellProps,
  TableOptions,
  UseExpandedOptions,
  UseFiltersOptions,
  UseSortByOptions,
} from 'react-table';
import { useExpanded, useFilters, useSortBy, useTable } from 'react-table';

import {
  StyledEmptyTableText,
  StyledTable,
  StyledTableCell,
  StyledTableExpandedRow,
  StyledTableHeader,
  StyledTableHeaderCell,
  StyledTableHeaderRow,
  StyledTableRow,
} from '../../style/table';
import type { UnknownRecord } from '../../typings';

interface WWSTableOptions<D extends UnknownRecord>
  extends TableOptions<D>,
    UseExpandedOptions<D>,
    UseSortByOptions<D>,
    UseFiltersOptions<D> {
  renderSubRow?: (row: Row<D>) => JSX.Element;
  getCellProps?: (cell: Cell<D>) => Partial<TableCellProps>;
  getColumnProps?: (column: ColumnInstance<D>) => Partial<TableCellProps>;
  getRowProps?: (row: Row<D>) => Record<string, unknown>;
}

export default function Table<D extends UnknownRecord>({
  columns,
  data,
  emptyText = 'No data',
  getCellProps,
  getColumnProps,
  getRowProps,
  renderSubRow,
}: {
  emptyText?: string | (() => JSX.Element);
} & WWSTableOptions<D>): JSX.Element {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, visibleColumns } =
    useTable(
      {
        columns,
        data,
      },
      useFilters,
      useSortBy,
      useExpanded,
    );

  return (
    <>
      <StyledTable {...getTableProps()}>
        <StyledTableHeader>
          {headerGroups.map(headerGroup => (
            <StyledTableHeaderRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <StyledTableHeaderCell {...column.getHeaderProps()}>
                  {column.render('Header')}
                </StyledTableHeaderCell>
              ))}
            </StyledTableHeaderRow>
          ))}
        </StyledTableHeader>
        <tbody {...getTableBodyProps()}>
          {rows.length === 0 && (
            <StyledTableRow>
              <StyledTableCell colSpan={visibleColumns.length}>
                <StyledEmptyTableText>
                  {typeof emptyText === 'string' ? emptyText : emptyText()}
                </StyledEmptyTableText>
              </StyledTableCell>
            </StyledTableRow>
          )}
          {rows.map(row => {
            prepareRow(row);

            return (
              <React.Fragment key={row.id}>
                <StyledTableRow {...row.getRowProps(getRowProps?.(row))}>
                  {row.cells.map(cell => {
                    return (
                      <StyledTableCell
                        {...cell.getCellProps([
                          getColumnProps?.(cell.column) || {},
                          getCellProps?.(cell) || {},
                        ])}
                      >
                        {cell.render('Cell')}
                      </StyledTableCell>
                    );
                  })}
                </StyledTableRow>
                {row.values.expanded === true && (
                  <StyledTableExpandedRow>
                    <StyledTableCell colSpan={visibleColumns.length}>
                      {renderSubRow?.(row)}
                    </StyledTableCell>
                  </StyledTableExpandedRow>
                )}
              </React.Fragment>
            );
          })}
        </tbody>
      </StyledTable>
    </>
  );
}
