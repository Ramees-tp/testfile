import { useState, useEffect } from "react";
import axiosInstance from "../../../api/axios";

function WorkerList() {
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [count, setCount] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(
        "/master/workerList"
      );
      setData(response.data.data);
      setCount(response.data.totalCount);
    } catch (err) {
      if (err.response && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Internal server error");
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <main className="p-6 sm:p-10 space-y-6">

        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
          <div className="mr-6">
            <h1 className="sm:text-4xl text-3xl font-semibold mb-2">User Details</h1>
            <h2 className="text-gray-600 ml-0.5">All User Details</h2>
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

        <section className="flex md:flex-row flex-col gap-6">
          {/* Student Statistics */}
          <div className="flex items-center sm:p-8 p-4 bg-white shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center sm:h-16 h-12 sm:w-16 w-12 text-purple-600 bg-purple-100 rounded-full mr-6">
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
              <span className="block text-gray-500">Workers</span>
            </div>
          </div>

          <div className="flex items-center sm:p-8 p-4 bg-white shadow rounded-lg">
          <div className="inline-flex flex-shrink-0 items-center justify-center sm:h-16 h-12 sm:w-16 w-12 text-purple-600 bg-purple-100 rounded-full mr-6">
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
              <span className="block text-gray-500">Workers</span>
            </div>
          </div>

         
        </section>

        <section className="bg-white p-8 shadow rounded-lg ">
          <h2 className="text-2xl font-semibold mb-6">All Workers</h2>
           
            <div className="align-middle inline-block xl:w-full lg:w-[700px] md:w-[500px] sm:w-[380px] tm:w-96  w-72 shadow overflow-x-scroll bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg border-r-2 border-red-200">
              <table className="min-w-full ">
                <thead className="sm:text-base text-[75%]">
                  <tr>
                    <th className="p-2 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider text">
                      ID
                    </th>
                    <th className="p-2 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                      FULL NAME
                    </th>
                    <th className="p-2 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                      EMAIL
                    </th>
                    <th className="p-2 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                      PHONE
                    </th>
                    <th className="p-2 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                      STATUS
                    </th>
                    <th className="p-2 border-b-2 border-gray-300"></th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {data.map((worker) => (
                    <tr key={worker.id}>
                      <td className="p-2 whitespace-no-wrap border-b border-gray-500">
                        <div className="flex items-center">
                          
                            <div className="sm:text-sm text-[70%] leading-5 text-red-800">
                              {worker._id}
                            </div>
                          
                        </div>
                      </td>
                      <td className="p-2 whitespace-no-wrap border-b border-gray-500">
                        <div className="flex items-center">
                            <div className="sm:text-sm text-[70%] leading-5 text-gray-800">
                              {worker.firstName} {worker.lastName}
                            </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-no-wrap border-b border-gray-500">
                        <div className="flex items-center">
                            <div className="sm:text-sm text-[70%] leading-5 text-gray-800">
                              {worker.email}
                            </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-no-wrap border-b border-gray-500">
                        <div className="flex items-center">
                            <div className="sm:text-sm text-[70%] leading-5 text-gray-800">
                              {worker.phoneNumber}
                            </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                        <span className={`relative inline-block px-3 py-1 font-semibold ${worker.isOnline?'text-green-900':'text-red-900'}  leading-tight`}>
                          <span
                            aria-hidden
                            className={`absolute inset-0 ${worker.isOnline?'bg-green-200 opacity-50': 'bg-red-200 opacity-50'}  rounded-full`}
                          ></span>
                          <span className="relative text-xs">{worker.isOnline?'active':'offline'}</span>
                        </span>
                      </td>
                      <td className="p-2 whitespace-no-wrap border-b border-gray-500">
                        <button className="sm:px-5 px-3 sm:py-2 py-1 sm:text-base text-[75%] border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
                          More Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="sm:flex-1 sm:flex sm:items-center sm:justify-between mt-4 work-sans">
                {/* ... Pagination section (same as in your HTML) ... */}
              </div>
            </div>

        </section>
      </main>
    </div>
  );
}

export default WorkerList;
