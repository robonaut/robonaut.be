import styled from 'styled-components';

import colors from './colors';

export const StyledTableContainer = styled.div``;

export const StyledTableBatchActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;
`;

export const StyledFlowsBatchAction = styled.div`
  cursor: pointer;
  color: ${colors.blue};
  margin: 1rem;
  border-bottom: 1px solid ${colors.blue};
  &:hover {
    font-weight: 600;
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  border-spacing: 0;
`;

export const StyledTableTitle = styled.h1`
  color: ${colors.blue};
  margin-bottom: 1rem;
`;

export const StyledTableHeader = styled.thead``;

export const StyledTableHeaderRow = styled.tr`
  background-color: ${colors.whiteDarker};
`;

export const StyledTableHeaderCell = styled.th`
  border-right: 1px solid ${colors.white};
  padding: 0.4rem 1rem;
  color: ${colors.navy};
  text-align: left;
  &:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  &:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-right: 0px;
  }
`;

export const StyledTableRow = styled.tr``;

export const StyledTableExpandedRow = styled.tr``;

export const StyledTableCell = styled.td`
  padding: 1rem;
  &.label {
    background-color: ${colors.blue};
    border-radius: 4px;
    color: ${colors.white};
  }
`;

export const StyledTableRowExpander = styled.span`
  cursor: pointer;
`;

export const StyledEmptyTableText = styled.p`
  width: 100%;
  text-align: center;
  font-size: 1.2rem;
  margin-top: 1rem;
`;
