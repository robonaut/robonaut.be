import styled from "styled-components";

import colors from "./colors";

const BASE_INPUT_STYLE = `
  font-size: 1.6rem;
  font-family: "Open Sans", sans-serif;
  border-style: solid;
  border-width: 1px;
  border-color: ${colors.grey};
  border-radius: 4px;
  padding: 0.6rem;
  margin: 0.6rem;
  width: 100%;
  color: ${colors.navy};
  &:hover {
    border-color: ${colors.blue};
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledInput = styled.input`
  ${BASE_INPUT_STYLE}
  &[type="submit"] {
    cursor: pointer;
    border: none;
    background-color: ${colors.navy};
    color: ${colors.white};
    font-weight: bold;
    &:hover {
      background-color: ${colors.blue};
    }
  }
`;

export const StyledTextArea = styled.textarea`
  ${BASE_INPUT_STYLE}
  min-height: 20rem;
  &:hover {
    border-color: ${colors.blue};
  }
  resize: none;
`;
