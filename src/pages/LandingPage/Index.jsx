import React from "react";

import Content1 from "../../components/landingPage/Content1";
import Content2 from "../../components/landingPage/Content2";
import Footer from "../../components/landingPage/Footer";

function Index() {
  return (
    <div className="sm:p-2 flex flex-col gap-2">
      <Content1 />
      <Content2 />
      <Footer />
    </div>
  );
}

export default Index;
