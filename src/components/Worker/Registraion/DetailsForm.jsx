// InputForm.js

import { useState } from "react";

const DetailsForm = ({ formData, setFormData, setFieldCompleted, fieldCompleted }) => {

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      profileImage: file,
    }));
    setFieldCompleted((prevFields) => ({
      ...prevFields,
      profileImage: true,
    }));
  };
  
  const handleInputChange = (event, fieldName) => {
    const value = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
    setFieldCompleted((prevFields) => ({
      ...prevFields,
      [fieldName]: value.trim() !== "", // Set to true if the field is not empty
    }));
  };


  return (
    <div className="md:flex gap-x-10">
      <div className="md:w-[50%]">
        <div className="mb-2">
          <label
            className=" block text-white text-sm font-semibold mb-2"
            htmlFor="firstName"
          >
            First Name
          </label>
          <input
            type="text"
            placeholder="Enter your first name"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={(event) => handleInputChange(event, "firstName")}
            className="w-full tm:p-2 p-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-2">
          <label
            className="block text-white text-sm font-semibold mb-2"
            htmlFor="lastName"
          >
            Last Name
          </label>
          <input
            type="text"
            placeholder="Enter your last name"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={(event) => handleInputChange(event, "lastName")}           
            className="w-full tm:p-2 p-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-2">
          <label
            className="block text-white text-sm font-semibold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your Email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(event) => handleInputChange(event, "email")}          
            className="w-full tm:p-2 p-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-2">
          <label
            className="block text-white text-sm font-semibold mb-2"
            htmlFor="phoneNumber"
          >
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="Enter your Phone Number"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={(event) => handleInputChange(event, "phoneNumber")}          
            className="w-full tm:p-2 p-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-2">
          <label
            className="block text-white text-sm font-semibold mb-2"
            htmlFor="gender"
          >
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={(event) => handleInputChange(event, "gender")}          
            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <div className="md:w-[50%]">
        <div className="mb-2">
          <label
            className="block text-white text-sm font-semibold mb-2"
            htmlFor="district"
          >
            District
          </label>
          <input
            type="text"
            placeholder="Enter your District"
            id="district"
            name="address.district"
            value={formData.district}
            onChange={(event) => handleInputChange(event, "district")}          
            className="w-full tm:p-2 p-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-2">
          <label
            className="block text-white text-sm font-semibold mb-2"
            htmlFor="dateOfBirth"
          >
            Date of Birth
          </label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={(event) => handleInputChange(event, "dateOfBirth")}           
            className="w-full tm:p-2 p-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-2">
          <label
            className="block text-white text-sm font-semibold mb-2"
            htmlFor="city"
          >
            City
          </label>
          <input
            type="text"
            placeholder="Enter your City"
            id="city"
            name="address.city"
            value={formData.city}
            onChange={(event) => handleInputChange(event, "city")}          
            className="w-full tm:p-2 p-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-2">
          <label
            className="block text-white text-sm font-semibold mb-2"
            htmlFor="pinCode"
          >
            Pin Code
          </label>
          <input
            type="text"
            placeholder="Enter your PIN code"
            id="pinCode"
            name="address.pinCode"
            value={formData.pinCode}
            onChange={(event) => handleInputChange(event, "pinCode")}        
            className="w-full tm:p-2 p-2 border rounded-md focus:outline-none focus:border-blue-500"
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
            id="profileImage"
            name="profileImage"
            // value={formData.profileImage}
            onChange={handleImageChange}            
            className="w-full tm:p-2 p-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsForm;
