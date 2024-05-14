// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/TokenSlice";
import axiosInstance from "../../api/axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const SignUp = () => {
  const navigate = useNavigate();
  const [passhow, setPasshow] = useState(false);
  const [passhow2, setPasshow2] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  axios.defaults.withCredentials = true;

  const handleSignup = async (e) => {
    e.preventDefault();
    const nameRegex = /^[a-zA-Z]+(?:[' -][a-zA-Z]+)*$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(username)) {
      setError("Name must contain only letters");
      return;
    }

    if (!passwordRegex.test(password)) {
      setError(
        "Password must contain at least one lowercase letter, one uppercase letter, one number, one special character, and be at least 8 characters long"
      );
      return;
    }

    if (!emailRegex.test(email)) {
      setError("Invalid email address");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");

    try {
      const response = await axiosInstance.post("/user/signUp", {
        username,
        email,
        password,
      });

      if (response.status === 200) {
        const Token = response.data.Token;
    
        localStorage.setItem("jwt", Token);
        dispatch(setToken(Token));
        navigate("/user/uhome");
  
        setError(response.data.message);
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
    <>
      <div className="min-h-screen flex md:flex-row flex-col items-center justify-center gap-5 bg-gray-100 px-3">
        <div className="md:text-4xl sm:text-3xl text-2xl text-black font-bold text-center sm:p-5">
          <p>ALL IN ONE </p>
          <p>SOLUTION</p>
        </div>
        <div className=" bg-gradient-to-b from-[#252e53] to-[#4d1438]  sm:p-8 p-4 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold sm:mb-6 text-center text-white">
            Sign Up
          </h2>

          <form onSubmit={handleSignup} className="">
            <div className="sm:mb-4 mb-2">
              <label
                className="block text-white text-sm font-semibold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="w-full tm:p-1 p-3 border rounded-md focus:outline-none focus:border-blue-500 shadow-xl"
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                name="username"
              />
            </div>
            <div className="sm:mb-4 mb-2">
              <label
                className="block text-white text-sm font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full tm:p-1 p-3 border rounded-md focus:outline-none focus:border-blue-500 shadow-xl "
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                name="email"
              />
            </div>
            <div className="sm:mb-4 mb-2">
              <label
                className="block text-white text-sm font-semibold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  className="w-full tm:p-1 p-3 border rounded-md focus:outline-none focus:border-blue-500 shadow-xl"
                  type={!passhow ? "password" : "text "}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  name="password"
                />
                <div
                  onClick={() => setPasshow(!passhow)}
                  className="showPass absolute tm:top-2 top-[2%] right-3 cursor-pointer text-gray-800"
                >
                  {!passhow ? (
                    <FontAwesomeIcon icon={faEye} />
                  ) : (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  )}
                </div>
              </div>
            </div>

            <div className="sm:mb-4 mb-2">
              <label
                className="block text-white text-sm font-semibold mb-2"
                htmlFor="password"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  className="w-full tm:p-1 p-3 border rounded-md focus:outline-none focus:border-blue-500 shadow-xl"
                  type={!passhow2 ? "password" : "text "}
                  id="Cpassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <div
                  onClick={() => setPasshow2(!passhow2)}
                  className="showPass absolute tm:top-2 top-[2%] right-3 cursor-pointer text-gray-800"
                >
                  {!passhow2 ? (
                    <FontAwesomeIcon icon={faEye} />
                  ) : (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  )}
                </div>
              </div>
            </div>
            <div>
              {error && (
                <div className="text-red-500 mb-4 text-center">{error}</div>
              )}
            </div>

            <div className="flex justify-center items-center">
              <button
                className="p-2 sm:px-10 bg-cyan-500 text-white rounded-md font-semibold hover:bg-cyan-800 "
                type="submit"
                // onClick={handleSignup}
              >
                Sign Up
              </button>
            </div>
            <div className="text-center sm:py-3 text-white">
              <p>
                Alredy a user? please
                <Link to={"/user/login"}>
                  <span className="text-blue-400 ml-3 hover:text-blue-700 cursor-pointer">
                    LogIn
                  </span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
