import green from "../../assets/icons/circle.png";
import user from "../../assets/icons/account.png";

import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../../api/axios";

function UworkerDetails() {

  const socket = useSelector((state)=>state.socket.socket)

  const [location, setLocation] = useState([]);
  const [coordinates, setCoordinates] = useState([]);

  const [selectedDay, setSelectedDay] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const [details, setDetails] = useState();
  const [error, setError] = useState()
  const{id, id1} = useParams()
  const navigate = useNavigate();


  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
    const currentDate = new Date();
    const selectedDate = new Date(currentDate);
    const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].indexOf(event.target.value);
    const diff = selectedDate.getDay() - dayOfWeek;
    
    selectedDate.setDate(currentDate.getDate() - diff);
    setSelectedDate(selectedDate.toISOString().split('T')[0]);
  }


  useEffect(() => {
    const storedLocation = localStorage.getItem('userLocation');
    if (storedLocation) {
      const parsedLocation = JSON.parse(storedLocation);
      setLocation(parsedLocation.placeName);
      setCoordinates(parsedLocation.center);
    }
  }, []);

  const   sendRequest = async (workerId) => {
    try {
      const response = await axiosInstance.post(`/user/workRequest/${workerId}`, { selectedDate, selectedDay, coordinates, location, id1 });
      if(response.status===201){
        navigate('/user/userContract')
        socket.emit('updateRequest', { workerId });
      }
    } catch (err) {
      console.error(err);
    }
  }

  const wDetails = async () =>{
    try{
      const response= await axiosInstance.get(`/user/workerDetails/${id}`)
      if(response.status===200){
        setDetails(response.data.data);
      }

    } catch (err) {
      if (err.response && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("front: Internal server error");
      }
    }
  }
  useEffect(()=>{
    const token = localStorage.getItem("jwt");
    if (token) {
      const decodedToken = decodeJWTToken(token);
      const workerId = decodedToken ? decodedToken.id : null;

      if (workerId) {
        socket.emit("userConnection", { sender: workerId });
      }
    }
    wDetails()
    socket.on('updateRequest', () => {
      wDetails();
    });
    return () => {
      socket.off('updateRequest');
    };
  },[])

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
    <div className="bg-white lg:px-28 sm:px-16 px-2 lg:py-20 md:py-10 py-4">
      <div className=" flex md:flex-row flex-col justify-center gap-5">
        
        <div className="bg-gray-400 p-3 max-w-xl space-y-5 rounded">
          <div className="bg-white p-5 space-y-5">
            <h1 className="text-center font-bold tm:text-3xl text-xl">Available Days</h1>
            <div className="space-x-5">
              <button className="bg-purple-100 focus:bg-purple-300  p-1 px-2 rounded-md">
                This Week
              </button>
              <button className="bg-purple-100 focus:bg-purple-300  p-1 px-2 rounded-md">
                Next week
              </button>
            </div>
            <div className="grid grid-cols-7 gap-5">
              <div className="flex flex-col justify-center items-center gap-y-5">
                <p className="text-[80%] font-semibold bg-gray-300 p-1 rounded w-10 text-center">
                  Mon
                </p>
                <img src={green} alt="" />
              </div>
              <div className="flex flex-col justify-center items-center gap-y-5">
                <p className="text-[80%] font-semibold bg-gray-300 p-1 rounded w-10 text-center">
                  Tue
                </p>
                <img src={green} alt="" />
              </div>
              <div className="flex flex-col justify-center items-center gap-y-5">
                <p className="text-[80%] font-semibold bg-gray-300 p-1 rounded w-10 text-center">
                  Wed
                </p>
                <img src={green} alt="" />
              </div>
              <div className="flex flex-col justify-center items-center gap-y-5">
                <p className="text-[80%] font-semibold bg-gray-300 p-1 rounded w-10 text-center">
                  Thu
                </p>
                <img src={green} alt="" />
              </div>
              <div className="flex flex-col justify-center items-center gap-y-5">
                <p className="text-[80%] font-semibold bg-gray-300 p-1 rounded w-10 text-center">
                  Fri
                </p>
                <img src={green} alt="" />
              </div>
              <div className="flex flex-col justify-center items-center gap-y-5">
                <p className="text-[80%] font-semibold bg-gray-300 p-1 rounded w-10 text-center">
                  Sat
                </p>
                <img src={green} alt="" />
              </div>
              <div className="flex flex-col justify-center items-center gap-y-5">
                <p className="text-[80%] font-semibold bg-gray-300 p-1 rounded w-10 text-center">
                  sun
                </p>
                <img src={green} alt="" />
              </div>
            </div>
          </div>

          <div>
           
           <div>
             <h1 className="font-bold mb-4 tm:text-2xl text-lg">Select Day</h1>
            <select
               id="selectDay"
               name="selectDay"
               value={selectedDay}
               defaultValue={selectedDay}
               onChange={handleDayChange}
               className="w-[50%] tm:p-2 p-1 border rounded-md focus:outline-none focus:border-blue-500"
            >
               <option value="">Select a day</option>
               <option value="Monday">Monday</option>
               <option value="Tuesday">Tuesday</option>
               <option value="Wednesday">Wednesday</option>
               <option value="Thursday">Thursday</option>
               <option value="Friday">Friday</option>
               <option value="Saturday">Saturday</option>
               <option value="Sunday">Sunday</option>
            </select>
          </div>
          </div>
        </div>

        {details && details.length > 0 && (
        <div className="bg-gray-400 p-3 max-w-xl space-y-3 rounded">
          <h1 className="bg-white p-4 text-center font-bold text-2xl">
            Worker Details
          </h1>
          <div className="bg-white p-3 space-y-5">
            <div className="flex items-center gap-5">
              <img
                className=" rounded-full p-2 object-cover w-32 h-32"
                src={details ? details[0].profileImage : user}
                alt=""
              />
              <p className="tm:text-2xl text-xl font-semibold">{details[0].firstName} {details[0].lastName}</p>
            </div>
            <div className="bg-gray-300 p-3 tm:text-base text-[90%]">
              <p className="font-semibold mb-5">Worker ID : {details[0]._id} </p>
              <p>experience : </p>
              <p>Place : {details[0].city} </p>
              <p>Consistency : </p>
            </div>
          </div>
        </div>
        )}
      </div>
      <div className="flex justify-center items-center tm:mt-10 mt-5 ">
        <button onClick={ ()=>sendRequest(details[0]._id)} disabled={!selectedDay} className={`tm:p-3 p-2 rounded text-white ${
        selectedDay 
            ? 'bg-green-700 hover:bg-green-500' // Enabled color
            : 'bg-red-800 cursor-not-allowed'  // Disabled color
    }`}>
          Send Request
        </button>
      </div>
    </div>
  );
}

export default UworkerDetails;
