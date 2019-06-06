import React from "react";

const ErrorView = (({ erroring }) => (erroring) ? (<h1>Something went wrong.</h1>) : null)

export default ErrorView;
