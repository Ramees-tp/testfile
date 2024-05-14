import { useState } from "react";

const JobForm = ({ formData, setFormData }) => {
  const [location, setLocation] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [timeoutId, setTimeoutId] = useState(null)

  
  const parts = location.split(',');
  const exactLocation = parts.length >= 2 ? parts[0].trim() : '';

    
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
};


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
          setLocation(placeName);
  
          setFormData({
            ...formData,
            coordinates: [parseFloat(lon), parseFloat(lat)],
            workArea: exactLocation
          });
        }
      })
      .catch(error => console.error('Error:', error));
  };
  


  return (
    <div className="w-full mx-auto flex flex-col self-end">
      <div className="mb-4">
        <label
          className="block text-white text-sm font-semibold mb-2"
          htmlFor="jobType"
        >
          Job Type
        </label>
        <select
          id="jobType"
          name="jobType"
          value={formData.jobType}
          onChange={(event) =>
            setFormData({ ...formData, jobType: event.target.value })
          }
          className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
        >
          <option value="">Select Job Type</option>
          <option value="Plumber">Plumber</option>
          <option value="Electrician">Electrician</option>
          <option value="Carpenter">Carpenter</option>
          <option value="Woodcutter">Woodcutter</option>
          <option value="Gardene">Gardene</option>
          <option value="Plasterer">Plasterer</option>
          <option value="Masons">Masons</option>
          
        </select>
      </div>

      <div className="mb-4 w-full">
      <label
        className="block text-white text-sm font-semibold mb-2"
         htmlFor="workArea"
      >
      Work Area
      </label>
        <div className="relative">
          <input className="w-full tm:p-2 p-2 border rounded-md focus:outline-none focus:border-blue-500"
                type="text" value={location} onChange={handleLocationChange} placeholder="Enter Area For Work" />
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
          className="block text-white text-sm font-semibold mb-2"
          htmlFor="adharNumber"
        >
          Aadhaar Number
        </label>
        <input
          type="number"
          placeholder="Please Enter Adhar Number"
          id="adharNumber"
          name="adharNumber"
          value={formData.adharNumber}
          onChange={(event) =>
            setFormData({ ...formData, adharNumber: event.target.value })
          }
          className="w-full tm:p-2 p-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
    </div>
  );
};


export default JobForm;
