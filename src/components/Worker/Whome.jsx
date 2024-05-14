import { useEffect, useState } from "react";
import user from "../../assets/icons/account.png";
import axiosInstance from "../../api/worker/workerInstance";
import { useSelector } from "react-redux";


function Whome() {

  const socket = useSelector((state)=>state.socket.socket)

  const [request, setRequest] = useState([])

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
  // useEffect(()=>{
  //   workRequest();
  //   const intervel = setInterval(()=>{
  //     workRequest()
  //   }, 15000);
  //   return () => clearInterval(intervel)
  // },[])

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      const decodedToken = decodeJWTToken(token);
      const workerId = decodedToken ? decodedToken.id : null;

      if (workerId) {
        socket.emit("workerConnection", { sender: workerId });
      }
    }

    workRequest()

    socket.on('updateRequest', () => {
      workRequest();
    });

    return () => {
      socket.off('updateRequest');
    };
}, []);


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

  const Task =async (id, action, userId) =>{
   try{
     const res = await axiosInstance.get(`/worker/acceptOrDecline/${id}?action=${action}`)
     if(res.status===200) {
      socket.emit('userUpdateRequest', { userId });
      workRequest()
     }
   }catch(err){
    console.log(err);
   }
  }
  
  return (
    <div>
      <div className="bg-[#DFE7B4] lg:px-28 md:px-16 sm:px-10 px-4 py-5">
        <div className="bg-[#FFFFFF] lg:p-10 p-2 rounded mb-4">
          <h1 className="sm:mb-5 sm:text-2xl text-xl font-bold">Job Requests :</h1>
          <div  className="scroll-mx-60 overflow-y-scroll  min-h-72 py-5 tm:px-2 flex flex-col gap-4">

            {request && request.filter(request=>request.status==='pending').map((req)=>(
          <div key={req._id} className="bg-[#678FB4] tm:p-3 p-1 rounded-md ">
            <div className="flex items-center w-full">
              <div className="rounded-full bg-[#C3B6B6] p-2 mb-4 md:mb-0 mr-4 sm:block hidden">
               <img src={req.userData.profileImage || user} className="w-10 h-10" />
              </div>
              <div className="bg-[#DFE7B4] sm:p-3 rounded-xl w-full flex flex-row tm:gap-x-3 sm:gap-y-4 items-center sm:justify-between justify-around p-1">
                <h1 className="font-semibold  lg:text-2xl sm:text-xl rm:text-lg text-sm p-2 max-w-[18rem] md:max-w-none md:mr-4 text-center">
                 {req.userData.firstName} {req.userData.lastName}
                </h1>

                  <div className="flex xl:flex-row flex-col gap-2 items-center justify-center ">
                    <div className="flex flex-row items-center md:gap-y-2 md:gap-x-3 gap-x-1">
                      <p className="bg-blue-300 tm:p-2 p-1 rounded font-bold text-sm md:text-xl md:w-36 sm:w-28 text-center">
                      {new Date(req.date).toLocaleDateString()}
                      </p>
                      <p className="bg-blue-300 tm:p-2 p-1 rounded font-bold text-sm md:text-xl md:w-36 sm:w-28 text-center">
                        {req.day}
                      </p>
                    </div>
                    <div className="flex flex-row items-center md:gap-y-2 gap-2 md:gap-x-3">
                      <button onClick={()=>Task(req._id, 'accept', req.userData.userId)} className="bg-green-700 hover:bg-green-900 tm:p-2 p-1 rounded font-bold text-sm md:text-xl text-white sm:w-24">
                        Accept
                      </button>
                      <button onClick={()=>Task(req._id, 'decline', req.userData.userId )} className="bg-red-700 hover:bg-red-900 tm:p-2 p-1 rounded font-bold text-sm md:text-xl text-white sm:w-24">
                        Decline
                      </button>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          ))}

          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-6 md:p-10 rounded bg-[#FFFFFF] shadow-md">
            <h1 className="sm:text-3xl text-2xl font-bold mb-4">Contract History</h1>
            <div className="flex flex-col md:flex-row gap-4">
              <p className="font-bold text-lg md:text-xl border-b-2 border-red-900 cursor-pointer">
                Last week
              </p>
              <p className="font-bold text-lg md:text-xl cursor-pointer">Last Month</p>
            </div>
            <div className="bg-[#C3B6B6] text-xl font-bold p-4 rounded-lg mt-4">
              <h1 className="tm:text-base text-md">Total Contracts</h1>
            </div>
          </div>
          <div className="p-6 md:p-10 rounded bg-[#FFFFFF] shadow-md">
            <h1 className="sm:text-3xl text-2xl font-bold mb-4">Wallet</h1>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <p className="text-lg md:text-xl font-bold">Todays earnings</p>
                <p className="bg-[#C3B6B6] p-2 rounded-lg">$45</p>
              </div>
              <div className="flex-1">
                <p className="text-lg md:text-xl font-bold">Total Balance</p>
                <p className="bg-[#C3B6B6] p-2 rounded-lg">$5665</p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Whome;
