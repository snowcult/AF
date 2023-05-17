import { Component } from "react";
import PropTypes from "prop-types";
class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
      message: "",
    };
  }
  componentDidCatch(error) {
    this.setState({ hasError: true, message: error.message });
  }

  render() {
    return this.state.hasError ? (
      <h1>Sorry...{this.state.message}</h1>
    ) : (
      this.props.children
    );
  }
}
ErrorBoundary.propTypes = {
  children: PropTypes.node,
};
export default ErrorBoundary;
