import React from "react";
import { Typography } from "@material-ui/core";

const Heading = ({ children }) => {
  return (
    <Typography component="h1" variant="h4">
      {children}
    </Typography>
  );
};

export default Heading;
