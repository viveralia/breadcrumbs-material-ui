import React from "react";
import Heading from "../components/Heading";
import BreadcrumbNav from "../components/BreadcrumbNav";

const Edit = ({ breadcrumbs }) => {
  return (
    <div>
      <BreadcrumbNav breadcrumbs={breadcrumbs} />
      <Heading>Edit</Heading>
    </div>
  );
};

export default Edit;
