import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error(`There is an error occured : ${error} ${errorInfo}`);
  }

  render() {
    const { errorMsg } = this.props;
    if (this.state.hasError) {
      return errorMsg;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
