/* eslint-disable react/prop-types */
import { useState } from "react";
import axiosInstance from "../../api/axios";
import { useNavigate } from "react-router-dom";


const UserUpdateProfile = () => {

  const [location, setLocation] = useState("");
  const [coordinates, setCoordinates] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [timeoutId, setTimeoutId] = useState(null)

  const handleSuggestionClick = (suggestion) => {
    setLocation(suggestion);
    setSuggestions([]);
  

    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(suggestion)}`)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          const { lat, lon } = data[0];
          const placeName = data[0].display_name;
  
          const part = placeName.split(',');
          const exactLocation = part.length >= 2 ? part[0].trim() : '';
          
          setLocation(exactLocation || '');
          setCoordinates ([parseFloat(lon), parseFloat(lat)])
        }
      })
      .catch(error => console.error('Error:', error));
      setSuggestions([]);
  };
  

const handleLocationChange = (event) => {
  const value = event.target.value;
  setLocation(value);
  clearTimeout(timeoutId);
  let timeOutId = setTimeout(() => {
    fetchSuggestions(value);
  }, 2000);

  setTimeoutId(timeOutId)

};

  const fetchSuggestions = (value) => {
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(value)}`)
    .then(response => response.json())
    .then(data => {
      const suggestions = data.map(item => item.display_name);
      setSuggestions(suggestions);
    })
    .catch(error => console.error('Error:', error));
  }


  const navigate = useNavigate();

  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    DOB: "",
    phoneNumber: "",
    district: "",
    pinCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      userImage: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const updatedFormData = {
        ...formData,
        coordinates: coordinates,
        city: location
      };

    const formDataToSend = new FormData();
      Object.keys(updatedFormData).forEach((key) => {
      formDataToSend.append(key, updatedFormData[key]);
    });

      const response = await axiosInstance.put("/user/addDetails", formDataToSend);
      if (response.status === 200) {
        navigate("/user/userProfiles");
      }
    } catch (err) {
      if (err.response && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("An error occured.please try again.");
      }
    }


    setFormData({
      firstName: "",
      lastName: "",
      DOB: "",
      phoneNumber: "",
      address: {
        district: "",
        pinCode: "",
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md tm:mx-auto mx-2  my-3 p-3 bg-gradient-to-b from-[#252e53] to-[#4d1438] shadow-xl shadow-slate-800 rounded">
    <div className="flex md:flex-row flex-col gap-x-10">
    <div className="md:w-[50%]">
      <div className="mb-4">
        <label
          htmlFor="firstName"
          className="block mb-2 text-sm font-medium text-gray-100"
        >
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"

          className="block w-full px-4 tm:p-1 p-4 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="lastName"
          className="block mb-2 text-sm font-medium text-gray-100"
        >
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"

          className="block w-full px-4 tm:p-1 p-4 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="phoneNumber"
          className="block mb-2 text-sm font-medium text-gray-100"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"

          className="block w-full px-4 tm:p-1 p-4 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="DOB"
          className="block mb-2 text-sm font-medium text-gray-100"
        >
          Date of Birth
        </label>
        <input
          type="date"
          id="DOB"
          name="DOB"
          value={formData.DOB}
          onChange={handleChange}
          placeholder="Date of Birth"

          className="block w-full px-4 tm:p-1 p-4 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
    </div>

    <div className="md:w-[50%]">
      <div className="mb-4">
        <label
          htmlFor="city"
          className="block mb-2 text-sm font-medium text-gray-100"
        >
          city
        </label>

        <div className="relative">
          <input className="w-full tm:p-1 p-4 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter City"
                type="text" value={location} onChange={handleLocationChange} />
           {suggestions.length > 0 && (
             <div className="bg-white border rounded-md absolute w-full" style={{ top: '100%' }}>
               {suggestions.map((suggestion, index) => (
                 <div className="p-1 border-b-gray-500 border-b-2 text-sm" key={index} onClick={() => handleSuggestionClick(suggestion)}>{suggestion} </div>
               ))}
             </div>
           )}
          </div>

      </div>
      <div className="mb-4">
        <label
          htmlFor="district"
          className="block mb-2 text-sm font-medium text-gray-100"
        >
          District
        </label>
        <input
          type="text"
          id="district"
          name="district"
          value={formData.district}
          onChange={handleChange}
          placeholder="District"

          className="block w-full px-4 tm:p-1 p-4 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="pinCode"
          className="block mb-2 text-sm font-medium text-gray-100"
        >
          PIN Code
        </label>
        <input
          type="text"
          id="pinCode"
          name="pinCode"
          value={formData.pinCode}
          onChange={handleChange}
          placeholder="PIN Code"

          className="block w-full px-4 tm:p-1 p-4 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div>
        <label
            className="block text-white text-sm font-semibold mb-2"
            htmlFor="profileImage"
          >
            image
          </label>
          <input
            type="file"
            id="userImage"
            name="userImage"
            // value={formData.profileImage}
            onChange={handleImageChange}           
            className="w-full tm:h-auto h-9 bg-white rounded-2xl block text-sm text-slate-600 focus:outline-none focus:border-blue-500 shadow-md   file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-violet-200 file:text-violet-700
            hover:file:bg-violet-100 hover:file:cursor-pointer"
          />
        </div>
      </div>
    </div>

      <div>
        {error && <div className="text-red-500 mb-4 text-center">{error}</div>}
      </div>
      <button
        type="submit"
        className="block mx-auto justify-center tm:w-full tm:px-4 px-2 tm:py-2 py-1 mt-4 text-white bg-blue-500 border border-blue-500 rounded-md hover:bg-blue-600"
      >
        Update Details
      </button>
    </form>
  );
};

export default UserUpdateProfile;
