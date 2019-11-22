import React from "react";
import AppContainer from "./components/app/app-container.js";
import ErrorBoundary from "./error-boundary.js";

const DEV =
  typeof process === "undefined" ||
  !process.env ||
  process.env.NODE_ENV !== "production";

const Root = () => (
  <ErrorBoundary>
    <AppContainer />
  </ErrorBoundary>
);

export default Root;
