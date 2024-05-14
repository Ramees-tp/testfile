import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import JobForm from "./JobForm";
import { useState } from "react";

function Payment() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const handleButtonClick = (buttonIndex) => {
    setShow(false);
    setShow1(false);

    switch (buttonIndex) {
      case 1:
        setShow(true);
        break;
      case 2:
        setShow1(true);
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <main className="p-6 sm:p-10 space-y-6">
        {/* Dashboard Heading Section */}
        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
          <div className="mr-6">
            <h1 className="text-4xl font-semibold mb-2">Add Job Section</h1>
            <h2 className="text-gray-600 ml-0.5">Mobile UX/UI Design course</h2>
          </div>
          <div className="flex flex-wrap items-start justify-end -mb-3">
            <button className="inline-flex px-5 py-3 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md mb-3">
              {/* Manage dashboard button content */}
            </button>
            <button className="inline-flex px-5 py-3 text-white bg-purple-600 hover:bg-purple-700 focus:bg-purple-700 rounded-md ml-6 mb-3">
              {/* Create new dashboard button content */}
            </button>
          </div>
        </div>
        {/* Statistics Section */}
        <section className="grid md:grid-cols-2 xl:grid-cols-2 gap-6">
          
          <div className="flex items-center p-8 bg-white shadow rounded-lg">
            <button
              onClick={() => handleButtonClick(1)}
              className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 hover:bg-purple-300  rounded-full mr-6"
            >
              <FontAwesomeIcon className="h-6" icon={faAdd} />
            </button>
            <div>
              <span className="block text-2xl font-bold">ADD JOB</span>
            </div>
          </div>
          
          <div className="flex items-center p-8 bg-white shadow rounded-lg">
            <button
              onClick={() => handleButtonClick(2)}
              className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 hover:bg-purple-300 rounded-full mr-6"
            >
              <FontAwesomeIcon className="h-6" icon={faCircleCheck} />
            </button>
            <div>
              <span className="block text-2xl font-bold">ADDED JOBS</span>
            </div>
          </div>
          
        </section>
        
        <section className="bg-white p-8 shadow rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">Recent Activity</h2>
          {show && <JobForm />}
        </section>
      </main>
    </div>
  );
}

export default Payment;
