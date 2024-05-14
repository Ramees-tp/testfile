import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import user from "../../assets/icons/account.png";
import axiosInstance from "../../api/axios";
import "./ToggleButton.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";


const SkeletonLoader = () => {
  return (
    <div className="bg-gray-200 tm:p-4 p-2 rounded-xl mb-4">
      <div className="animate-pulse flex space-x-6">
        <div className="rounded-full bg-gray-400 h-12 w-12"></div>
        <div className="flex-1 space-y-4 py-1">
          <div className="h-4 bg-gray-400 rounded w-3/4"></div>
          <div className="h-4 bg-gray-400 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );
};

function UworkerList() {
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showHalfDayWorkers, setShowHalfDayWorkers] = useState(false);
  const [lati, setLat] = useState(null);
  const [lngi, setLng] = useState(null);
  const [radius, setRadius] = useState(null); 
  const [likedWorkers, setLikedWorkers] = useState([]);

  // WorkId..
  const {id} = useParams()
  const navigate = useNavigate()


  useEffect(() => {
    const fetchLocalStorageData = () => {
      const radiusSelected = JSON.parse(localStorage.getItem('radius'));
      setRadius(radiusSelected?.radius || 8);

      const locationDetail = JSON.parse(localStorage.getItem('userLocation'));
      if (locationDetail) {
        const { center } = locationDetail;
        const { lat, lng } = center || {};
        setLat(lat);
        setLng(lng);
      } else {
        setError("Location details not found in localStorage.");
      }
    };

    fetchLocalStorageData();
  }, [lati, lngi, radius]);

  
  useEffect(()=>{
    const fetchWorker = async () => {
      try{
        if (!lati || !lngi || !radius) {
          setError("Please provide your location Details");
          return;
        }
        const response = await axiosInstance.get(`/user/fetchWorker/${id}`,{ params: {
          latitude: lati,
          longitude: lngi,
          radius
        }})
        if(response.status===200){
          setData(response.data.data)
          setLoading(false)
          setError('')
        }
      }catch(err){
        setError("Error fetching worker details.");
       }
    }
  
    fetchWorker()
  },[lati, lngi, radius, id])

  useEffect(() => {
    const fetchLikedWorkers = async () => {
      try {
        const response = await axiosInstance.get(`/user/likedList`);
        if (response.status === 200) {
          setLikedWorkers(response.data.data[0].workerId);
        }
      } catch (error) {
        console.error("Error fetching liked workers:", error);
      }
    };

    fetchLikedWorkers();
  }, []);

  const handleCheckboxChange = () => {
    setShowHalfDayWorkers(!showHalfDayWorkers);
  };

  const toggleLike = async(event, workerId) => {
    event.stopPropagation()
    try {
      if (likedWorkers.includes(workerId)) {
        const res = await axiosInstance.delete(`/user/unLikeWorker/${workerId}`);
        setLikedWorkers(prevLikedWorkers => prevLikedWorkers.filter(id => id !== workerId));
      } else {
        const res = await axiosInstance.post(`/user/likedWorker`, { workerId });
        setLikedWorkers(prevLikedWorkers => [...prevLikedWorkers, workerId]);
      }
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  }

  const navigateToDetails = (workerId) => {
    navigate(`/user/workerDetails/${workerId}/${id}`)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);

  return (
    <div className="md:px-28 sm:px-10 rm:px-6 px-2 bg-[#fffdcb] py-5 sm:min-h-[500px] min-h-[350px]">
      <div className="flex justify-between">
        <h1 className="sm:text-2xl text-md font-bold mb-5">Awailable Workers :</h1>
        <div className="flex justify-end ">
          <input type="checkbox" className="checkbox"
           checked={showHalfDayWorkers} 
           onChange={handleCheckboxChange}
          />
        </div>
      </div>
      <div className="flex flex-col tm:gap-4 gap-2 md:max-w-2xl">

        { loading ? (
           Array.from({length: 5}).map((_, index)=>(
            <div key={index}>
              <SkeletonLoader />
            </div>
          ))
        ) : (
          data.filter(worker => (showHalfDayWorkers ? worker.isHalfDay : !worker.isHalfDay))
             .filter(worker => worker.isOnline)
             .map((worker)=>(

        <div  key={worker._id} className="bg-[#002842] rm:p-3 p-1 rounded-xl cursor-pointer" onClick={()=> navigateToDetails(worker._id)}>
          <div className="flex  items-center">
            <div className="rounded-full bg-[#DDC9AE] sm:p-2 tm:ml-5 ml-2 ">
              <img src={user} alt="" />
            </div>
            <div className="bg-slate-200 sm:p-5 p-3 rounded-xl sm:ml-8 ml-4 w-full flex justify-between items-center tm:h-auto h-16">
              <h1 className="font-semibold sm:text-3xl text-xl leading-6">{worker.firstName} {worker.lastName}</h1>
              <button onClick={(event) => toggleLike(event, worker._id)}>
                <FontAwesomeIcon className="h-8 text-red-900" icon={likedWorkers.includes(worker._id)? faHeartSolid : faHeartRegular} />
              </button>
            </div>
          </div>
        </div>
        ))
        )
        }

        <div>
              {error && (
                <div className="text-red-500 mb-4 text-center">{error}</div>
              )}
            </div>

      </div>
    </div>
  );
}

export default UworkerList;

