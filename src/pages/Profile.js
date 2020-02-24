import React from "react";
import Heading from "../components/Heading";
import BreadcrumbNav from "../components/BreadcrumbNav";

const Profile = ({ breadcrumbs }) => {
  return (
    <div>
      <BreadcrumbNav breadcrumbs={breadcrumbs} />
      <Heading>Profile</Heading>
    </div>
  );
};

export default Profile;
