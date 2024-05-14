import { useState } from "react";
// import UploadImage from "../uploadImage/UploadImage";
import axiosInstance from "../../../api/axios";

function JobForm() {

  const [error, SetError] = useState('')
  const [jobData, setJobData] = useState({
    jobName: "",
    jobDescription: "",
    wage: '',
    jobImage: "",
  });

  const handleChange = (e) => {
    if (e.target.type === "file") {
        const file = e.target.files[0];
        setJobData({ ...jobData, jobImage: file });
      } else {
        const { name, value } = e.target;
        setJobData({ ...jobData, [name]: value });
      }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("jobName", jobData.jobName);
    formData.append("jobDescription", jobData.jobDescription);
    formData.append("wage", jobData.wage);
    formData.append("jobImage", jobData.jobImage);


    try {
      const res = await axiosInstance.post("/master/addJobType", formData, {
        withCredentials:true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if(res.status===200){
        SetError(res.data.message)

        setJobData({
          jobName: "",
          jobDescription: "",
          jobImage: "",
        });
      }else{
        SetError(res.status.error)
      }
    } catch (error) {
      console.error("Error adding job type:", error);
      // Handle error (show an error message to the user)
    }
  };
  return (
    <div>
      <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Add Job Type</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="jobName"
              className="block text-sm font-medium text-gray-600"
            >
              Job Name:
            </label>
            <input
              type="text"
              id="jobName"
              name="jobName"
              value={jobData.jobName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="jobDescription"
              className="block text-sm font-medium text-gray-600"
            >
              Job Description:
            </label>
            <textarea
              id="jobDescription"
              name="jobDescription"
              rows="4"
              value={jobData.jobDescription}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label 
              htmlFor="wage"
              className="block text-sm font-medium text-gray-600"
            >
              Wage
            </label>
            <input
              type="number"
              id="wage"
              name="wage"
              value={jobData.wage}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="jobImage"
              className="block text-sm font-medium text-gray-600"
            >
              Job Image URL:
            </label>
            <input
              type="file"
              id="jobImage"
              name="jobImage"
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
            {/* <UploadImage  handleChange={handleChange}/> */}
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Add Job Type
          </button>
          <div>
            {error && (
              <div className="text-green-600 text-center mt-5">{error}</div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default JobForm;


