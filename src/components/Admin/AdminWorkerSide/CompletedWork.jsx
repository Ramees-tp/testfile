import { useEffect, useState } from 'react'
import axiosInstance from '../../../api/axios';

const CompletedWork = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(
        "/master/requestDetails"
      );  
      setData(response.data.data);
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
       <h2 className="text-2xl font-semibold mb-6">Works Completed</h2>
          <div className="flex flex-col gap-y-5">
            {data.filter(request=>request.payment && request.completed).map((worker) => (
              <div
                key={worker._id}
                className="flex items-center tm:p-8 p-2 bg-[#e2f581] shadow rounded-lg"
              >
                <div className="w-full flex sm:flex-row flex-col justify-center gap-y-2">
                  <div className="grid grid-cols-2 grid-row-5 tm:gap-3 gap-1 tm:text-base text-[90%]">
                    <span className="col col-span-2 block tm:text-2xl text-xl font-bold">
                      {worker.workerId.firstName} {worker.workerId.lastName}
                    </span>
                    <span className="col-span-2 block text-gray-500">
                      RequestId: {worker._id}
                    </span>
                    <span className="col-span-3 block text-gray-500">
                      Email: {worker.workerId.email}
                    </span>
                    <span className="block text-gray-500">
                      Phone: {worker.workerId.phoneNumber}
                    </span>
                    <span>
                      
                    </span>
                  </div>
                  <div className="tm:ml-auto flex sm:flex-col flex-row justify-between items-center">
                    <div
                      className="inline-flex tm:px-5 px-3 tm:py-2 py-1 tm:text-base text-[90%] text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md "
                    >
                      <span>Date:</span> {new Date(worker.date).toLocaleDateString()}
                    </div>
                    <div
                      className="inline-flex tm:px-5 px-3 tm:py-2 py-1 tm:text-base text-[90%] text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md ml-3"
                    >
                      {worker.day}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
  )
}

export default CompletedWork

