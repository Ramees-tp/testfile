import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/TokenSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axiosInstance from "../../api/axios";



const AdminLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [passhow, setPasshow] = useState(false);
  const [username, setUsername] = useState("ramees");
  const [password, setPassword] = useState("AdminStrongP@ssword1");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const nameRegex = /^[a-zA-Z]+(?:[' -][a-zA-Z]+)*$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

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
    setError("");

    try {
      const response = await axiosInstance.post("/master/login", {
        username,
        password,
      });
      if (response.status === 200) {
        const Token = response.data.Token;
        localStorage.setItem("jwt", Token);
        dispatch(setToken(Token));
        navigate("/master/dashboard");
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
    <div className="min-h-screen w-full flex sm:flex-row flex-col items-center justify-center gap-5 bg-gray-100 px-3">
      <div className="md:text-4xl sm:text-3xl text-2xl text-black font-bold text-center tm:p-5">
        <p>WELCOME TO</p>
        <p className="">ADMIN'S WORLD</p>
      </div>
      <div className=" bg-gradient-to-b from-[#916da3] to-gray-800 sm:p-8 p-4 sm:py-20 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold sm:mb-6 text-center text-white">
          Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-semibold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="w-full tm:p-1 p-4 border rounded-md focus:outline-none focus:border-blue-500 shadow-xl"
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              name="username"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="w-full tm:p-1 p-4 border rounded-md focus:outline-none focus:border-blue-500 shadow-xl"
                type={!passhow ? "password" : "text "}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="username"
                required
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
          </div>
          
          <div>
            {error && (
              <div className="text-red-500 mb-4 text-center">{error}</div>
            )}
          </div>

          <div className="flex justify-center items-center">
            <button
              className="p-2 tm:px-10 px-4 bg-cyan-700 text-white rounded-md font-semibold hover:bg-cyan-800"
              type="submit"
            >
              Login
            </button>
          </div>
          <div className="text-center py-3 text-white">
            <p className="mb-4 text-white">
              {/* <Link to={"/user/otp"}> */}
                Did 
                <span className="text-blue-300 ml-3 mr-3 hover:text-blue-700 cursor-pointer">
                  Forgot
                </span>
              {/* </Link> */}
              Your password ?
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
