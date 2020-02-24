import React from "react";
import { Breadcrumbs, Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const BreadcrumbNav = ({ breadcrumbs }) => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {breadcrumbs.map(({ path, name }, i) => (
        <Link
          key={path}
          color={breadcrumbs.length === i + 1 ? "textPrimary" : "inherit"}
          to={path}
          component={RouterLink}
        >
          {name}
        </Link>
      ))}
    </Breadcrumbs>
  );
};

export default BreadcrumbNav;
