
import { useState } from "react";

import Wheader from "../../components/Worker/Wheader";
import Whome from "../../components/Worker/Whome";
import Wfooter from "../../components/Worker/Wfooter";
import Wcontracts from "../../components/Worker/Wcontracts";
import Wprofile from '../../components/Worker/Wprofile'
import Wcontact from "../../components/Worker/Wcontact";
import About from "../../components/About";


function WorkerHome() {
  const [currentPage, setCurrentPage] = useState("WHome");

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="tm:p-1">
      <Wheader handleNavigation={handleNavigation} />
      {currentPage === "WHome" && <Whome />}
      {currentPage === "WProfile" && <Wprofile/>}
      {currentPage === "WContracts" && <Wcontracts/>}
      {currentPage ==="WContact" && <Wcontact/>}
      {currentPage === "WAbout" && <About/>}
      <Wfooter/>
    </div>
  );
}

export default WorkerHome;
