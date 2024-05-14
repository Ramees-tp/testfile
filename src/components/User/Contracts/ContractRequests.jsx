import { useEffect, useState } from 'react'
import axiosInstance from '../../../api/axios';
import RazorpayPayment from '../../RazorpayPayment'
import { useSelector } from 'react-redux';


const ContractRequests = () => {

  const socket = useSelector((state)=>state.socket.socket)

  const [requests, setRequests] = useState([])
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async () =>{
    try{
      const response = await axiosInstance.get("/user/showRequests")
      if(response.status===200){
        setRequests(response.data.requests);
      }
    }catch(err){
      if (err.response && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Internal server error");
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if(token){
      const decodedToken = decodeJWTToken(token);
      const userId = decodedToken ? decodedToken.id : null;
      if (userId) {
        socket.emit("userConnection", { sender: userId });
      }
    }
    fetchData();

    socket.on('userUpdateRequest', () => {
      fetchData()
    });
    return () => {
      socket.off('userUpdateRequest');
    };
  }, []);


  const cancel = async (requestId)=>{
    try{
      const response = await axiosInstance.delete(`/user/cancelRequest/${requestId}`)
      if(response.status===200){
        fetchData();
      }
    }catch(err){
      if (err.response && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Internal server error");
      }
    }
  }

  const handlePaymentCompleted = () => {
    setPaymentCompleted(true);
  };

  const decodeJWTToken = (token) => {
    try {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );
  
      return JSON.parse(jsonPayload);
    } catch (error) {
      return null;
    }
  };
  

  return (
    <div>
      <div className='sm:min-h-[500px] min-h-[350px]'>
      <h2 className="tm:text-2xl text-xl font-bold md:mb-6 mb-1 text-gray-600 underline">Your Requests </h2>
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 md:pr-10 lg:px-8">
        { requests.length > 0 && requests.filter(request => !request.payment).map((request) => (
          <div key={request._id} className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white shadow-lg md:px-12 px-4 ">
            <div>
          <div   
                className="flex items-center md:p-8 p-2 bg-[#d5e6eb] shadow rounded-lg"
              >
                <div className="w-full flex sm:flex-row flex-col justify-center gap-y-3">
                  <div className='tm:space-y-2'>
                    <span className="block text-gray-500 ">
                      {request.workerId.jobType}
                    </span>
                    <span className="block md:text-2xl tm:text-xl text-lg font-bold">
                      {request.workerId.firstName} {request.workerId.lastName}
                    </span>

                    <span className="block text-gray-500 tm:text-base text-[90%]">
                     {new Date(request.date).toLocaleDateString()} - {request.day}
                    </span>
                    <span className="block text-gray-500 tm:text-base text-[90%]">
                      {request.workerId.workArea}
                    </span>
                    <span className="block text-green-500 tm:text-base text-[90%]">
                      <p>Amount : {request.wage}</p>
                    </span>
                   
                  </div>
                  <div className="md:ml-auto flex justify-center items-center">
                  <div 
                    className={`inline-flex tm:px-5 px-2 tm:py-2 py-1 ${request.status === 'pending' ? 'text-red-500 border-red-500' : request.status === 'accepted' ? 'text-white bg-green-600 hover:bg-green-700 cursor-pointer' : 'text-white bg-red-700' } rounded-md ml-3 border`}
                    >
                      {request.status === 'accepted' ? (
                        <RazorpayPayment orderId={request._id} wage={request.wage} type={'user'} onPaymentCompleted={handlePaymentCompleted} />
                        ) : (
                          <span className="block">{request.status}</span>
                      )}
                  </div>
                  <button
                      onClick={() => cancel(request._id)}
                      className="inline-flex tm:px-6 px-3 tm:py-2 py-1 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md ml-3"
                    >
                      Cancel
                  </button>
                  </div>
                </div>
              </div>
              {paymentCompleted && <div className="font-bold text-green-500 mt-4">Payment completed successfully!</div>}
              </div>
          </div>
         ))}
        </div>
      </div>
    </div>
  )
}

export default ContractRequests
