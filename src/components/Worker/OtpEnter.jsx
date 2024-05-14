import { useRef, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axiosInstance from '../../api/worker/workerInstance';

const OtpEnter = ({requestId}) => {
    const navigate = useNavigate();

    const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);
    const inputRefs = Array.from({ length: 6 }, () => useRef(null));
    const [error, setError] = useState("");


    const handleInputChange = (index, value) => {
        const newOtpValues = [...otpValues];
        newOtpValues[index] = value;
        setOtpValues(newOtpValues);
        if (value.length === 1 && index < inputRefs.length - 1) {
          inputRefs[index + 1].current.focus();
        } else if (value.length === 0 && index > 0) {
          inputRefs[index - 1].current.focus();
        }
      };

      const handleVerifyOTP = async () => {
        try {
          
          const response = await axiosInstance.post("/worker/verifyOTP", {
            otpValues: otpValues,
            orderId: requestId
          });
          if (response.status === 200) {
            // navigate("/user/resetPassword");
          }
        } catch (err) {
          if (err.response && err.response.data.error) {
            setError(err.response.data.error);
          } else {
            setError("Failed to verify OTP. Please try again.");
          }
        }
      };
  return (
    <div className='h-full'>
      <div className=" h-full flex flex-col justify-center text-center gap-y-3 bg-slate-200 p-9 rounded-md">
          <label className=" text-xl p-12 font-semibold text-sky-800">Enter Secret Code:</label>

          <div className="flex justify-around mb-10">
            {inputRefs.map((inputRef, index) => (
              <input
                key={index}
                type="number"
                name="otpValues"
                className="w-9 h-9 p-1 border-2 focus:border-sky-900 shadow-xl rounded text-center"
                maxLength="1"
                ref={inputRef}
                value={otpValues[index]}
                onChange={(e) => handleInputChange(index, e.target.value)}
              />
            ))}
          </div>
          <button
            className="bg-sky-700 hover:bg-blue-500 text-white shadow-xl p-2 rounded-lg mb-20 font-semibold"
            onClick={handleVerifyOTP}
          >
            Verify OTP
          </button>
        </div>
    </div>
  )
}

export default OtpEnter
