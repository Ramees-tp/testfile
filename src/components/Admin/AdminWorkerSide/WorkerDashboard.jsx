import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faGear,
  faIndianRupeeSign,
  faAdd,
  faHelmetSafety,
  faBars
} from "@fortawesome/free-solid-svg-icons";
import {
  faChartBar,
  // faEnvelope,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import WorkerList from "./WorkerList";
import EntryRequest from "./EntryRequest";
import ReportSection from "./ReportSection";
import Payment from "./Payment";
import AddWork from "./AddWork";
import WorkDetails from "./WorkDetails";

function Dashboard() {
  const [showSidebar, setShowSidebar] = useState(false);

  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);

  const navBar=() =>{
    setShowSidebar(!showSidebar);
  }

  const handleButtonClick = (buttonIndex) => {
    setShowSidebar(false);
    setShow(false);
    setShow1(false);
    setShow2(false);
    setShow3(false);
    setShow4(false);
    setShow5(false);


    switch (buttonIndex) {
      case 1:
        setShow(true);
        break;
      case 2:
        setShow1(true);
        break;
      case 3:
        setShow2(true);
        break;
      case 4:
        setShow3(true);
        break;
      case 5:
        setShow4(true);
        break;
      case 6:
        setShow5(true);
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-20 sm:flex sm:flex-col ${showSidebar ? 'flex' : 'hidden'}`}>
        <a
          href="#"
          className="sm:inline-flex hidden items-center justify-center h-20 w-full bg-purple-600 hover:bg-purple-500 focus:bg-purple-500"
        >
          <svg fill="none" viewBox="0 0 64 64" className="h-12 w-12">
            {/* SVG path for company logo */}
          </svg>
        </a>
        <div className="flex-grow flex flex-col justify-between text-gray-500 bg-gray-800">
          <nav className="flex flex-col mx-4 my-6 space-y-4 ">
            <a
              onClick={() => handleButtonClick(1)}
              href="#"
              className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-purple-600 focus:bg-white rounded-lg  h-16"
            >
              <FontAwesomeIcon className="h-6" icon={faUser} />
            </a>
            <a
              onClick={() => handleButtonClick(2)}
              href="#"
              className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-purple-600 focus:bg-white rounded-lg  h-16"
            >
              <FontAwesomeIcon className="h-6" icon={faChartBar} />
            </a>
            <a
              onClick={() => handleButtonClick(3)}
              href="#"
              className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-purple-600 focus:bg-white rounded-lg  h-16"
            >
              <FontAwesomeIcon className="h-6" icon={faHelmetSafety} />
            </a>
            <a
              onClick={() => handleButtonClick(4)}
              href="#"
              className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-purple-600 focus:bg-white rounded-lg  h-16"
            >
              <FontAwesomeIcon className="h-6" icon={faIndianRupeeSign} />
            </a>
            <a
              onClick={() => handleButtonClick(5)}
              href="#"
              className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-purple-600 focus:bg-white rounded-lg  h-16"
            >
              <FontAwesomeIcon className="h-6" icon={faAdd} />
            </a>
          </nav>
          <div className="inline-flex items-center justify-center h-20 w-full border-t border-gray-700">
            <button className="p-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg h-16 w-16">
              <FontAwesomeIcon className="h-6" icon={faGear} />
            </button>
          </div>
        </div>
      </aside>
      {/* Main Content */}
      <div className="flex-grow text-gray-800 sm:ml-28">   
        {/* Header */}
        <header className="flex items-center h-20 px-6 sm:px-10 bg-white">
          <button onClick={() => navBar()} className="block sm:hidden relative flex-shrink-0 p-2 mr-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 rounded-full">
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className="relative w-full max-w-md sm:-ml-2">
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="absolute h-6 w-6 mt-2.5 ml-2 text-gray-400"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </svg>
            <input
              type="text"
              role="search"
              placeholder="Search..."
              className="py-2 pl-10 pr-4 w-full border-4 border-transparent placeholder-gray-500 focus:bg-gray-100 rounded-lg"
            />
          </div>
          <div className="flex flex-shrink-0 items-center ml-auto">
            <button className="inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg">
              {/* User menu content */}
            </button>
            <div className="border-l pl-3 ml-3 space-x-1">
              <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
                <span className="sr-only">Notifications</span>
                <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full"></span>
                <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping"></span>
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
              <Link to={'/master/dashboard'}>
              <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
                <span className="sr-only">Log out</span>
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </button>
              </Link>
            </div>
          </div>
        </header>
        {/* Main Content Body */}

        {show && <WorkerList />}
        {show1 && <EntryRequest />}
        {show2 && <WorkDetails />}
        {show3 && <Payment />}
        {show4 && <AddWork />}
        {show5 && <ReportSection />}
      </div>
    </div>
  );
}

export default Dashboard;
