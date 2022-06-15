import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import type { ConnectedProps } from 'react-redux';
import { connect } from 'react-redux';

import { actionCreators } from '../../redux/actions';
import type { RootState } from '../../redux/reducers';
import { errorsSelector, showErrorsSelector } from '../../redux/selectors/errors';
import colors from '../../style/colors';
import {
  StyledErrorClose,
  StyledErrorContainer,
  StyledErrorDetailText,
  StyledErrorText,
  StyledErrorTextContainer,
} from '../../style/layout';

const mapState = (
  state: RootState,
): {
  errors: ReturnType<typeof errorsSelector>;
  showErrors: ReturnType<typeof showErrorsSelector>;
} => ({
  errors: errorsSelector(state),
  showErrors: showErrorsSelector(state),
});

const mapDispatch = {
  dismissErrors: actionCreators.dismissErrors,
};

const connector = connect(mapState, mapDispatch);

const Errors = ({
  errors,
  showErrors,
  dismissErrors,
}: ConnectedProps<typeof connector>): JSX.Element | null => {
  if (errors.length > 0 && showErrors) {
    const { url, message, details } = errors[0];

    // get detail message for errors
    const detailMessage = details?.[0].message;

    return (
      <StyledErrorContainer>
        <StyledErrorTextContainer>
          <StyledErrorText>
            {url} - {message}
          </StyledErrorText>
          {(detailMessage ?? false) && (
            <StyledErrorDetailText>{detailMessage}</StyledErrorDetailText>
          )}
        </StyledErrorTextContainer>
        <StyledErrorClose
          onClick={(): void => {
            dismissErrors();
          }}
        >
          <RiCloseCircleLine color={colors.white} fontSize={`2rem`} />
        </StyledErrorClose>
      </StyledErrorContainer>
    );
  }

  return null;
};

export default connector(Errors);
