import { useEffect, useState } from 'react'
import axiosInstance from '../../api/worker/workerInstance';
import user from "../../assets/icons/account.png";

const PendingContracts = () => {
    const [requests, setRequest] = useState([])

  const workRequest = async () =>{
      try{
        const res = await axiosInstance.get('/worker/workRequest');
        
          if(res.status===200){
            setRequest(res.data.requests)
          }
          
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(()=>{
      workRequest()
    },[])
   
    return (
        <div>
      <div className='sm:min-h-[500px] min-h-[350px]'>
      <h2 className="text-2xl font-bold mb-6 sm:text-left text-center text-gray-600 underline">Accepted Requests</h2>
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 sm:pr-10 lg:px-8">
        { requests.length > 0 && requests.filter(request => !request.payment && request.status==='accepted').map((request) => (
          <div key={request._id} className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white shadow-lg sm:px-12 px-2">
          <div
                
                className="flex items-center sm:p-8 p-4 bg-[#dae3ee] shadow rounded-lg"
              >
                <div className="w-full flex sm:flex-row flex-col justify-center">
                  <div>
                    <span className="block text-gray-500">
                      {request.workerId.jobType}
                    </span>
                    <span className="block text-2xl font-bold">
                      {request.userData.firstName} {request.userData.lastName}
                    </span>

                    <span className="block text-gray-500">
                     {new Date(request.date).toLocaleDateString()} - {request.day}
                    </span>
                    <span className="block text-gray-500">
                      {request.userData.city}
                    </span>
                   
                  </div>
                  {/* <div className="ml-auto flex justify-center items-center">
                  <div 
                    className={`inline-flex px-5 py-2 ${request.status === 'pending' ? 'text-red-500 border-red-500' : request.status === 'accepted' ? 'text-white bg-green-600 hover:bg-green-700 cursor-pointer' : 'text-white bg-red-700' } rounded-md ml-3 border`}
                    >
                      {request.status === 'accepted' ? (
                        <span className='block' onClick={()=> payment(request._id)}>payment</span>
                      ) : (
                        <span className="block">{request.status}</span>
                      )}
                  </div>
                  <button
                      onClick={() => cancel(request._id)}
                      className="inline-flex px-5 py-2 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md ml-3"
                    >
                      Cancel
                  </button>
                   
                  </div> */}
                </div>
              </div>
          </div>
         ))}
        </div>
      </div>
    </div>
      )
}

export default PendingContracts
