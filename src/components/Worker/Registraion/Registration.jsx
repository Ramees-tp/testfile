import { useState } from "react";
import DetailsForm from "./DetailsForm";
import JobForm from "./JobForm";
import PaymentForm from "./PaymentForm";
import axiosInstance from "../../../api/axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../../../redux/TokenSlice";
import { Link } from "react-router-dom";


const Registration = () => {
  const navigate = useNavigate(); 
  const dispatch = useDispatch();
 

  const [error, setError] = useState('')
  const [buttonClicked, setButtonClicked] = useState(false);
  
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    gender: "",
    dateOfBirth: "",
    district: "",
    city: "",
    pinCode: "",
    profileImage: "",
    jobType: "",
    workArea: "",
    coordinates: [ null, null ],
    adharNumber: "",
    IFC: "",
    accountNumber: "",
    panCardNumber: "",
    password: "",
    confirmPass: "",
  });

  const [fieldCompleted, setFieldCompleted] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phoneNumber: false,
    gender: false,
    district: false,
    dateOfBirth: false,
    city: false,
    pinCode: false,
    profileImage: false,
  });

  const checkFormCompletion = () => {
    for (const key in fieldCompleted) {
      if (!fieldCompleted[key]) {
        return false;
      }
    }
    return true;
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  const formTitles = ["Personal Details", "Work Details", "Payment Details"];

  const pageDisplay = () => {
    switch (page) {
      case 0:
        return <DetailsForm formData={formData} setFormData={setFormData} setFieldCompleted={setFieldCompleted} fieldCompleted={fieldCompleted} />;
      case 1:
        return <JobForm formData={formData} setFormData={setFormData} />;
      case 2:
        return <PaymentForm formData={formData} setFormData={setFormData} />;
      default:
        return null;
    }
  };

  const handleSignup = async () => {
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    try {
      const response = await axiosInstance.post("/worker/registration", formDataToSend, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      if (response.status === 200) {
        const Token = response.data.Token;
        localStorage.setItem("jwt", Token);
        dispatch(setToken(Token));
        navigate("/worker/whome");
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("An error occurred during registration.");
      }
    }
  };

  return (
    <div className="xl:px-64 lg:px-52 md:px-32 sm:px-16 tm:px-8 p-2 sm:py-10 bg-[#fbffc3]">
      <div className="form">
      <div>
        {error && (
          <div className="text-red-500 mb-4 text-center">{error}
          <Link to={'/worker/WorkerLogin'}>
            <button className="bg-blue-200 px-2 rounded text-green-800 ml-2">log in</button> 
          </Link>
          </div>
        )}
      </div>
        <div className="w-full">
          <div
            style={{
              width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%",
            }}
            className="progressBar bg-[#4f662a] h-3 mb-5 rounded"
          ></div>
        </div>
        <div className="formContainer  flex flex-col self-end space-y-3  bg-gradient-to-b from-[#252e53] to-[#4d1438] p-5 rounded">
          <div className="header text-2xl sm:text-4xl font-bold mb-2  border-b-2 border-white p-2 text-white">
            {formTitles[page]}
          </div>
          <div className="body">{pageDisplay()}</div>
          {!checkFormCompletion() && buttonClicked && (
            <div className="text-red-500 text-center mb-4">
              Please fill in all fields before proceeding.
            </div>
          )}
          <div className="footer flex">
            <button
              className="  bg-gray-500 text-white p-2 px-10 rounded-md font-semibold hover:bg-gray-700"
              disabled={page === 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Prev
            </button>
            <button
              className="ml-auto  bg-green-700 text-white p-2 px-10 rounded-md font-semibold hover:bg-green-800 cursor-pointer"
              onClick={() => {
                if (!checkFormCompletion()) {
                  setButtonClicked(true);
                  return;
                }
                if (page === formTitles.length - 1) {
                  handleSignup();
                  
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
              disabled={!checkFormCompletion(fieldCompleted) && buttonClicked}
            >
              {page === formTitles.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Registration;

