import React, { useState } from "react";
import axiosInstance from "../../api/axios";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function ResetPass() {
  const [passhow, setPasshow] = useState(false);
  const [passhow2, setPasshow2] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
      setError("Password Does not meet requirments");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords does not match");
      return;
    }
    setError("");

    try {
      const response = await axiosInstance.post("/user/resetPass", {
        password: confirmPassword,
      });
      if (response.status === 200) {
        setIsVerified(true);
      }
    } catch (err) {
      if (err.response && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("An error occured.please try again.");
      }
    }
  };
  return (
    <div>
      <div className="min-h-screen grid grid-cols-2 items-center justify-center bg-gray-100 px-3">
        <div className="sm:text-4xl text-3xl text-black font-bold text-center p-5">
          <p>ALL IN ONE </p>
          <p className="">SOLUTION</p>
        </div>
        {!isVerified ? (
          <div className=" bg-gradient-to-b from-[#252e53] to-[#4d1438] sm:p-10 p-3 sm:py-20 py-10 rounded shadow-md w-full max-w-md">
            <h2 className="text-3xl font-bold mb-6 text-center text-white">
              Reset Password
            </h2>
            <form className="flex flex-col" onSubmit={handleResetPassword}>
              <label
                className="block text-white text-sm font-semibold mb-2"
                htmlFor="Password"
              >
                New Password
              </label>
              <div className="relative">
                <input
                  className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500 shadow-xl mb-4"
                  type={!passhow ? "password" : "text "}
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div
                  onClick={() => setPasshow(!passhow)}
                  className="showPass absolute top-2 right-3 cursor-pointer text-gray-800"
                >
                  {!passhow ? (
                    <FontAwesomeIcon icon={faEye} />
                  ) : (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  )}
                </div>
              </div>
              <label
                className="block text-white text-sm font-semibold mb-2"
                htmlFor="Password"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500 shadow-xl mb-4"
                  type={!passhow2 ? "password" : "text "}
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <div
                  onClick={() => setPasshow2(!passhow2)}
                  className="showPass absolute top-2 right-3 cursor-pointer text-gray-800"
                >
                  {!passhow2 ? (
                    <FontAwesomeIcon icon={faEye} />
                  ) : (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  )}
                </div>
              </div>

              {error && <div className="text-red-500">{error}</div>}
              <div className="flex justify-center items-center">
                <button
                  className="p-2 px-10 bg-cyan-500 text-white rounded-md font-semibold hover:bg-cyan-800"
                  type="submit"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="text-green-700 font-bold text-2xl">
              OTP updated Successfully!
            </div>
            <Link to={"/user/uhome"}>
              <button
                className="p-2 px-10 bg-[#6e2b2b] text-white rounded-md font-semibold hover:bg-[#8a3232]"
                type="submit"
              >
                Back Home
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResetPass;
