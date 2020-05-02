import React from 'react';
import { StyledText } from '../../style/layout';

export default ({
  text,
  type,
}: {
  text: string;
  type: string;
}): JSX.Element => <StyledText type={type}>{text}</StyledText>;
