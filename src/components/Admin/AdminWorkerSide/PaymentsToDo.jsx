import axiosInstance from "../../../api/axios";
import { useEffect, useState } from "react";
import RazorPayPayment from '../../RazorpayPayment'


const PaymentsToDo = () => {
    const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [count, setCount] = useState(null)

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(
        "/master/paymentsToDo"
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
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div>
      <section className="bg-white p-8 shadow rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">Pending Requests</h2>
          <div className="flex flex-col gap-y-5">
            {data.map((worker) => (
              <div
                key={worker._id}
                className="flex items-center tm:p-8 p-2 bg-[#dae3ee] shadow rounded-lg"
              >
                <div className="w-full flex sm:flex-row flex-col justify-center gap-y-2">
                  <div className="">
                    <span className="block text-2xl font-bold">
                      {worker.workerId.firstName} {worker.workerId.lastName}
                    </span>
                    <span className="block text-gray-500">
                      date: {new Date(worker.date).toLocaleDateString()} <span className="font-bold text-pink-700">{worker.day}</span>
                    </span>
                    <span className="block text-gray-500">
                      Email: {worker.workerId.email}
                    </span>
                    <span className="block text-gray-500">
                      Phone: {worker.workerId.phoneNumber}
                    </span>
                    <span className="block text-gray-500">
                      Work Type: {worker.workerId.jobType}
                    </span>
                    <span className="block text-green-600">
                      Amount: {worker.wage}
                    </span>
                  </div>
                  <div className="tm:ml-auto flex sm:flex-col flex-row justify-center items-center">
                    <div
                      className="inline-flex tm:px-5 px-3 tm:py-2 py-1 tm:text-base text-[90%] text-green-600 hover:text-green-700 focus:text-green-700 hover:bg-green-100 focus:bg-purple-100 border border-green-600 rounded-md "
                    >
                      <RazorPayPayment orderId={worker._id} wage={worker.wage} type={'admin'}/>
                    </div>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
    </div>
  )
}

export default PaymentsToDo
