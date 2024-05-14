import axios from "axios";
import { useState, useEffect } from "react";
import axiosInstance from "../../../api/axios";


const EntryRequest = () => {
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [count, setCount] = useState(null)

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(
        "/master/workerRequest"
      );  
      setData(response.data.data);
      setCount(response.data.totalCount)
    } catch (err) {
        if (err.response && err.response.data.message) {
          setError(err.response.data.message);
        } else {
          setError("Internal server error");
        }
    }
  };

  const giveAccess = async (id) => {
    try {
      const response = await axiosInstance.patch(`/master/approveAccess/${id}`);
      if(response.status===200){
        fetchData();
      }
    } catch (error) {
      console.error("Error approving registration:", error);
    } 
  };

  const reject = async (id) => {
    try {
      const response = await axiosInstance.patch(`/master/rejectAccess/${id}`);
      if(response.status===200){
        fetchData();
      }
    } catch (error) {
      console.error("Error approving registration:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <main className="p-6 sm:p-10 space-y-6">
        {/* Dashboard Heading Section */}
        <div className="flex flex-col sm:space-y-6 md:space-y-0 md:flex-row justify-between">
          <div className="mr-6">
            <h1 className="sm:text-4xl text-3xl font-semibold mb-2">Entry Requests</h1>
            <h2 className="text-gray-600 ml-0.5">Not Approved List</h2>
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
        <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {/* Student Statistics */}
          <div className="flex items-center tm:p-8 p-4 bg-white shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center tm:h-16 h-12 tm:w-16 w-12 text-purple-600 bg-purple-100 rounded-full mr-6">
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
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div>
              <span className="block text-2xl font-bold">{count}</span>
              <span className="block text-gray-500">Total Requests</span>
            </div>
          </div>
          {/* Average Mark Statistics */}
          <div className="flex items-center p-8 bg-white shadow rounded-lg">
            {/* Average mark icon and content */}
          </div>
        </section>
        {/* Recent Activity Section */}
        <section className="bg-white p-8 shadow rounded-lg">
          <h2 className="tm:text-2xl text-xl font-semibold mb-6">Pending Requests</h2>
          <div className="flex flex-col gap-y-5">
            {data.map((worker) => (
              <div
                key={worker._id}
                className="flex items-center p-8 bg-[#dae3ee] shadow rounded-lg"
              >
                <div className="w-full flex sm:flex-row flex-col gap-2 justify-center sm:text-base text-[80%]">
                  <div className="">
                    <span className="block sm:text-2xl text-lg font-bold">
                      {worker.firstName} {worker.lastName}
                    </span>

                    <span className="block text-gray-500">
                      Email: {worker.email}
                    </span>
                    <span className="block text-gray-500">
                      Phone: {worker.phoneNumber}
                    </span>
                  </div>
                  <div className="tm:ml-auto flex justify-center items-center">
                    <button
                      onClick={() => giveAccess(worker._id)}
                      className="inline-flex tm:px-5 px-3 tm:py-2 py-1 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md "
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => reject(worker._id)}
                      className="inline-flex tm:px-5 px-3 tm:py-2 py-1 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md ml-3"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default EntryRequest;

