
import { useState, useEffect } from "react";
import axiosInstance from "../../api/axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function UserProfile() {
  const navigate = useNavigate()
  // const [image, setImage] = useState(null);
  const [userData, setUserdata] = useState([]);
  const [error, setError] = useState("");

  // if (!userData || userData.length === 0) {
  //   navigate("/user/updateProfile");
  //   return null; 
  // }

  const firstname = userData[0]?.moredetails[0].firstName;
  const lastname = userData[0]?.moredetails[0].lastName;
  const image = userData[0]?.moredetails[0].userImage;
  const username = userData[0]?.username;
  const email = userData[0]?.email;
  const phone = userData[0]?.moredetails[0].phoneNumber;
  const pinCode = userData[0]?.moredetails[0].pinCode;
  const district = userData[0]?.moredetails[0].district;
  const city = userData[0]?.moredetails[0].city;

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
    const fetch = async () => {
      try {
        const response = await axiosInstance.get("/user/userProfile");
        setUserdata(response.data.fullData);
        if (!response.data.fullData || response.data.fullData.length === 0 || response.data.fullData[0].moredetails.length === 0) {
          navigate("/user/updateProfile");
        }
        
      } catch (error) {
        setError("Error fetching user data");
      }
    };

    fetch();
  }, [navigate,]);

  


   const logOut = async () => {
   try {
    const res = await axiosInstance.post('/user/logOut');
    if(res.status===200){
      localStorage.removeItem('jwt');
      localStorage.removeItem('userLocation');
      localStorage.removeItem('location');
      navigate('/user/login')
    }
   } catch (error) {
    setError("Error fetching user data");
  }
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#fffdcb] md:p-5 p-1">
      <div className="bg-[#17253a] flex flex-col justify-center md:rounded-lg md:p-10 p-5 w-full md:w-[80%] lg:w-[70%]">
       <p className="tm:text-3xl text-2xl font-bold text-center mb-5 text-white">PROFILE</p>
       <div className="flex flex-col md:flex-row bg-white items-center md:gap-8 gap-3 tm:p-8 p-4 rounded-xl shadow-lg">
      
          <div className="flex flex-col items-center mb-0 md:mb-4 w-[50%]">
          <div className="tm:w-32 w-24 tm:h-32 h-24 rounded-full overflow-hidden bg-gray-200">
              {image ? (
                <img
                  src={image}
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="relative flex items-center justify-center w-full h-full">
                  <p className="text-red-500 font-medium">Add image </p>
                </div>
              )}
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
         <h1 className="tm:text-2xl text-xl font-bold md:text-left text-center text-white"> DETAILS</h1>
          <div className="ml-auto">
          <Link to={'/user/updateProfile'}>
          <button className="tm:p-2 p-2 bg-slate-500 hover:bg-slate-700 rounded-md text-white">
            Edit Profile
          </button>
          </Link>
        </div>
         </div>

         <div className="mt-5 flex flex-col md:flex-row md:items-center md:mx-7 mx-2 gap-y-5 md:gap-y-0 md:gap-x-5">
            <div className="w-full md:w-1/2 font-semibold flex flex-col gap-4">
              <div className="flex flex-col md:flex-row items-center md:gap-4 gap-y-2 md:gap-y-0">
                <label className="block text-white text-sm font-semibold md:w-1/3" htmlFor="username">
                  Username
                </label>
                <p className="w-full h-8 border rounded-md focus:outline-none bg-[#fff] shadow-xl md:flex-1"><span className="ml-3"> {username}</span></p>
              </div>
              <div className="flex flex-col md:flex-row items-center md:gap-4 gap-y-2 md:gap-y-0">
                <label className="block text-white text-sm font-semibold md:w-1/3" htmlFor="email">
                  Email
                </label>
                <p className="w-full h-8 border rounded-md focus:outline-none bg-[#fff] shadow-xl md:flex-1 truncate overflow-auto"><span className="ml-3"> {email}</span></p>
              </div>
              <div className="flex flex-col md:flex-row items-center md:gap-4 gap-y-2 md:gap-y-0">
                <label className="block text-white text-sm font-semibold md:w-1/3" htmlFor="phone">
                  Phone
                </label>
                <p className="w-full h-8 border rounded-md focus:outline-none bg-[#fff] shadow-xl md:flex-1"><span className="ml-3"> {phone}</span></p>
              </div>
            </div>
            <div className="w-full md:w-1/2 font-semibold flex flex-col gap-4">
              <div className="flex flex-col md:flex-row items-center md:gap-4 gap-y-2 md:gap-y-0">
                <label className="block text-white text-sm font-semibold md:w-1/3" htmlFor="city">
                  City name
                </label>
                <p className="w-full h-8 border rounded-md focus:outline-none bg-[#fff] shadow-xl md:flex-1"><span className="ml-3"> {city}</span></p>
              </div>
              <div className="flex flex-col md:flex-row items-center md:gap-4 gap-y-5 md:gap-y-0">
                <label className="block text-white text-sm font-semibold md:w-1/3" htmlFor="pinCode">
                  PIN code
                </label>
                <p className="w-full h-8 border rounded-md focus:outline-none bg-[#fff] shadow-xl md:flex-1"><span className="ml-3"> {pinCode}</span></p>
              </div>
              <div className="flex flex-col md:flex-row items-center md:gap-4 gap-y-2 md:gap-y-0">
                <label className="block text-white text-sm font-semibold md:w-1/3" htmlFor="district">
                  District
                </label>
                <p className="w-full h-8 border rounded-md focus:outline-none bg-[#fff] shadow-xl md:flex-1"><span className="ml-3"> {district}</span></p>
              </div>
            </div>
          </div>
          
        </div>
        <div className="flex justify-center mt-5">

          <button onClick={logOut} className="tm:p-2 p-1 tm:px-5 px-3 bg-slate-500 hover:bg-slate-700 rounded-md text-white">
            logOut
          </button>

        </div>
      </div>
    </div>
  );
}

export default UserProfile;

