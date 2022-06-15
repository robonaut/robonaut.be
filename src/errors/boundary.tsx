import type { ErrorInfo, ReactNode } from 'react';
import React, { Component } from 'react';

import log from '../log';
import { StyledUncaughtErrorText } from '../style/layout';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    log.error('Uncaught error:', { error, errorInfo });
  }

  public render(): ReactNode {
    if (this.state.hasError) {
      return (
        <StyledUncaughtErrorText>
          Oeps.. that didn't go as intended. Check the console for more error info.
        </StyledUncaughtErrorText>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
