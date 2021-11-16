import React, { Component } from 'react';

import ErrorPage from './ErrorPage';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(err, errInfo) {
    this.setState({ hasError: true });
  }

  render() {
    return this.state.hasError ? <ErrorPage /> : this.props.children;
  }
}
