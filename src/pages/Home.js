import React from "react";
import Heading from "../components/Heading";
import BreadcrumbNav from "../components/BreadcrumbNav";

const Home = ({ breadcrumbs }) => {
  return (
    <div>
      <BreadcrumbNav breadcrumbs={breadcrumbs} />
      <Heading>Home</Heading>
    </div>
  );
};

export default Home;
