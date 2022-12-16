import Header from "parts/Header";

import React from "react";
import { useLocation, useParams } from "react-router-dom";

const LandingPages = (props) => {
  const location = useLocation();
  return (
    <>
      <Header {...location} />
    </>
  );
};

export default LandingPages;
