
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../../api/worker/workerInstance';

const Updateprofile = () => {
  const navigate = useNavigate()
 
  const [formData, setFormData] = useState({
    firstName: '',
    lastName:'',
    email: '',
    phone: '',
    city: '',
    pinCode: '',
    district: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
  if (name === 'fullName') {
    const [firstName, ...lastName] = value.split(' ');
    setFormData({ ...formData, firstName: firstName, lastName: lastName.join(' ') });
  } else {
    setFormData({ ...formData, [name]: value });
  }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axiosInstance.put('/worker/updateProfile', formData);
      if (response.status===200) {
        navigate('/worker/whome')
      }
    } catch (error) {
      console.error('Failed to update profile details:', error);
    }
  };

  return (
    <div className="container mx-auto p-3 bg-red-200">
      <h1 className="text-3xl font-bold mb-8 text-center">Update Profile</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-6">
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className="mt-1 sm:p-2 p-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 sm:p-2 p-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
        </div>
        <div className="mb-6">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="mt-1 sm:p-2 p-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
        </div>
        <div className="mb-6">
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">city</label>
          <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} className="mt-1 sm:p-2 p-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
        </div>
        <div className="mb-6">
          <label htmlFor="pinCode" className="block text-sm font-medium text-gray-700">Pin Code</label>
          <input type="text" id="pinCode" name="pinCode" value={formData.pinCode} onChange={handleChange} className="mt-1 sm:p-2 p-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
        </div>
        <div className="mb-6">
          <label htmlFor="district" className="block text-sm font-medium text-gray-700">District</label>
          <input type="text" id="district" name="district" value={formData.district} onChange={handleChange} className="mt-1 sm:p-2 p-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
        </div>
        <div className='flex gap-4'>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Update</button>
        <Link to={'/worker/Whome'} ><button type="button" className="w-full bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300">Back Home</button></Link>
        
        </div>
      </form>
    </div>
  );
};

export default Updateprofile;
