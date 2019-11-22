import React from "react";

const reloadPage = () => {
  window.location = "/";
};

// Basic error catching, should be extended and more fine granular.
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.group("Error");
    console.log("Error count: ", errorCount);
    console.log("Last error date: ", errorTimestamp);
    console.log(error, info);
    console.groupEnd();
  }

  render() {
    if (this.state.hasError && !this.props.ignoreErrors) {
      return null;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
