import React, { Component } from 'react';

interface IProps {}
interface IState {
  hasError: boolean
}

class ErrorBoundary extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  // from react 16
  componentDidCatch(error: object, info: object) {
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundary