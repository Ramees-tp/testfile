
import { useState, useEffect } from "react";
import axiosInstance from "../../api/worker/workerInstance";
import { Link, useNavigate } from "react-router-dom";

const Wprofile = () => {
  const navigate = useNavigate()

  // const [image, setImage] = useState(null);
  const [workerData, setWorkerdata] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState("");

  const firstname = workerData.firstName;
  const lastname = workerData.lastName;

  const profileImage = workerData.profileImage;
  const email = workerData.email;
  const phone = workerData.phoneNumber;
  const pinCode = workerData.pinCode;
  const district = workerData.district;
  const workArea = workerData.workArea;

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setImage(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    try {
      const response = await axiosInstance.get("/worker/workerProfile");
      setWorkerdata(response.data.data);
    } catch (error) {
      setError("Error fetching user data");
    }
  };

  const logOut = async () => {
    try {
     const res = await axiosInstance.post('/worker/logOut');
     if(res.status===200){
       localStorage.removeItem('wjwt');
       localStorage.removeItem('workerLocation');
       navigate('/worker/WorkerLogin')
     }
    } catch (error) {
     setError("Error fetching user data");
   }
   }

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#DFE7B4] md:p-5 p-1">
      <div className="bg-[#17253a] flex flex-col justify-center md:rounded-lg md:p-10 p-5 w-full md:w-[80%] lg:w-[70%]">
       <p className="tm:text-3xl text-2xl font-bold text-center mb-5 text-white">PROFILE</p>
       <div className="flex flex-col md:flex-row bg-white items-center md:gap-8 gap-4 tm:p-8 p-3 rounded-xl shadow-lg">
      
          <div className="flex flex-col items-center mb-0 md:mb-4 w-[50%]">
          <div className="tm:w-32 w-24 tm:h-32 h-24 rounded-full overflow-hidden bg-gray-200">

              <img
                className="object-cover w-full h-full"
                src={profileImage}
                alt=""
              />
              {/* {image ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="relative flex items-center justify-center w-full h-full">
                  <p className="text-red-500 font-medium">Add image </p>
                </div>
              )} */}
            </div>
            {/* <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              className="absolute inset- opacity-  cursor-pointer"
            /> */}
          </div>
          <h1 className="md:text-5xl tm:text-3xl text-xl font-bold mb-0 md:mb-4 text-center ">
            {firstname} {lastname}
          </h1>
        </div>
        <div className="flex flex-col mt-10 w-full">
         <div className="flex items-center">
         <h1 className="tm:text-2xl text-xl  font-bold md:text-left text-center text-white"> DETAILS</h1>
         <div className="ml-auto">
          <Link to={'/worker/updateProfile'}>
          <button className="p-2 bg-slate-500 hover:bg-slate-700 rounded-md text-white md:text-base text-xs">
            Edit Profile
          </button>
          </Link>
        </div>
         </div>

          <div className="mt-5 flex md:flex-row flex-col md:items-center md:mx-7 mx-2 gap-x-5">
            <div className="md:w-[50%] w-full font-semibold">
              <div className="flex items-center md:gap-4 gap-10 mb-5">
                <label
                  className="block text-white text-sm font-semibold  md:w-[30%] w-[10%]"
                  htmlFor="username"
                >
                  Full Name
                </label>
                <p className="w-full h-8 border rounded-md focus:outline-none bg-[#fff] shadow-xl ">
                  <span className="ml-3"> {firstname} {lastname}</span>
                </p>
              </div>
              <div className="flex items-center md:gap-4 gap-10 mb-5">
                <label
                  className="block text-white text-sm font-semibold  md:w-[30%] w-[10%]"
                  htmlFor="username"
                >
                  Email
                </label>
                <p className="w-full h-8 border rounded-md focus:outline-none bg-[#fff] shadow-xl t truncate overflow-auto">
                <span className="ml-3"> {email}</span>
                </p>
              </div>
              <div className="flex items-center md:gap-4 gap-10 mb-5">
                <label
                  className="block text-white text-sm font-semibold  md:w-[30%] w-[10%]"
                  htmlFor="username"
                >
                  Phone
                </label>
                <p className="w-full h-8 border rounded-md focus:outline-none bg-[#fff] shadow-xl "><span className="ml-3"> {phone}</span></p>
              </div>
            </div>
            <div className="md:w-[50%] w-full font-semibold">
              <div>
                <div className="flex items-center md:gap-4 gap-10 mb-5">
                  <label
                    className="block text-white text-sm font-semibold md:w-[30%] w-[10%]"
                    htmlFor="username"
                  >
                    Work area
                  </label>
                  <p className="w-full h-8 border rounded-md focus:outline-none bg-[#fff] shadow-xl "><span className="ml-3"> {workArea}</span></p>
                </div>
              </div>
              <div>
                <div className="flex items-center md:gap-4 gap-10 mb-5">
                  <label
                    className="block text-white text-sm font-semibold md:w-[30%] w-[10%]"
                    htmlFor="username"
                  >
                    PIN code
                  </label>
                  <p className="w-full h-8 border rounded-md focus:outline-none bg-[#fff] shadow-xl "><span className="ml-3"> {pinCode}</span></p>
                </div>
              </div>
              <div>
                <div className="flex items-center md:gap-4 gap-10 mb-5">
                  <label
                    className="block text-white text-sm font-semibold md:w-[30%] w-[10%]"
                    htmlFor="username"
                  >
                    Work type
                  </label>
                  <p className="w-full h-8 border rounded-md focus:outline-none bg-[#fff] shadow-xl "><span className="ml-3"> {district}</span></p>
                </div>
              </div>
            </div>
          </div>


        </div>
        <div className="flex justify-center">
        
        <div>
          <button onClick={logOut} className="tm:p-2 p-1  bg-slate-500 hover:bg-slate-700 rounded-md text-white">
            logOut
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Wprofile
