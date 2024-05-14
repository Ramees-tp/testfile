import { Link,} from "react-router-dom";
import { useSearch } from "../../context/UserContext";  

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import axiosInstance from "../../api/axios";
import { debounce } from "lodash";

const SkeletonLoader = () => {
  return (
    <div className="animate-pulse bg-gray-100 rounded-lg shadow-custom">
      <div className="h-[150px] w-full bg-gray-300 rounded-t-lg"></div>
      <div className="p-4 flex justify-between items-center rounded-b-lg">
        <div className="w-[80%]">
          <div className="h-6 bg-gray-400 mb-2 rounded w-full"></div>
          <div className="h-4 bg-gray-400 w-3/4 rounded"></div>
        </div>
        <div className="h-6 w-6 bg-gray-400 rounded-full"></div>
      </div>
    </div>
  );
};

function Uhome(){
  const {searchInput} = useSearch()
  const [jobData, setJobData]= useState([])
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([])
  const [error, setError] = useState('')
  
  const fetchData = async () =>{
    try{
      const response =  await axiosInstance.get('/user/userhome')
      setJobData(response.data.data)
      setLoading(false)
    }catch(err){
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

  // const filteredData = searchInput ? jobData.filter((work)=>
  //     work.jobName.toLowerCase().includes(searchInput.toLowerCase())) : jobData

  useEffect(() => {
    if (searchInput) {
      const debounceFilterData = debounce((input) => {
        const filteredData = jobData.filter((work) =>
        work.jobName.toLowerCase().includes(input.toLowerCase())
      );
        setFilteredData(filteredData);
      }, 600);
      debounceFilterData(searchInput);
      return () => {
        // Clean up debounce function on unmount
        debounceFilterData.cancel();
      };
    } else {
      setFilteredData(jobData);
    }
  }, [searchInput, jobData]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [filteredData]);

  return (
    <div className="bg-[#fffdcb] xl:px-28 lg:px-24 md:px-20 sm:px-10 px-1 sm:py-8 py-4 w-full sm:min-h-[500px] min-h-[350px]">
      <div className="w-full grid lg:grid-cols-3 rm:grid-cols-2 grid-cols-1 lg:gap-20 md:gap-15 sm:gap-8 gap-5">
        {loading ? (
          Array.from({length: 6}).map((_, index)=>(
            <div key={index}>
              <SkeletonLoader />
            </div>
          ))
        ) : (
          filteredData.map((work) => (
            <Link key={work._id} to={`/user/workerList/${work._id}`}>
              <div className="hover:scale-[1.02] ease-out duration-200 bg-[#17253a] hover:bg-[#121b29] text-white rounded-lg shadow-custom">
                <img
                  className="sm:h-[220px]  w-full rounded-t-lg h-[150px] "
                  src={work.jobImage}
                  alt=""
                />
                <div className="p-4 flex justify-between items-center rounded-b-lg">
                  <div>
                    <p className="font-semibold">{work.jobName}</p>
                    <p className="text-[70%] text-gray-400 tm:h-auto rm:h-12">
                      {work.jobDescription}
                    </p>
                  </div>
                  <FontAwesomeIcon className="h-6" icon={faHeart} />
                </div>
              </div>
            </Link>
          ))
        )}
      

      </div>
    </div>
  )
}

export default Uhome;
