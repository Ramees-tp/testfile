import axiosInstance from "../../api/worker/workerInstance";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/TokenSlice";

function Wlogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passhow, setPasshow] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();

    // const nameRegex = /^[a-zA-Z]+(?:[' -][a-zA-Z]+)*$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // if (!nameRegex.test(username)) {
    //   setError("Name must contain only letters");
    //   return;
    // }
    if (!passwordRegex.test(password)) {
      setError(
        "Password must contain at least one lowercase letter, one uppercase letter, one number, one special character, and be at least 8 characters long"
      );
      return;
    }
    setError("");

    try {
      const response = await axiosInstance.post("/worker/login", {
        email,
        password,
      });
      if (response.status === 200) {
        const Token = response.data.Token;
        localStorage.setItem("jwt", Token);
        dispatch(setToken(Token))
        navigate("/worker/whome");
      }
    } catch (err) {
      if (err.response && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("front An error occured.please try again.");
      }
    }
  };
  return (
    <div>
      <div className="min-h-screen flex sm:flex-row flex-col items-center justify-center gap-5 bg-gray-100 px-3">
      <div className="md:text-4xl sm:text-3xl text-2xl text-black font-bold text-center tm:p-5">
        <p>ALL IN ONE </p>
        <p className="">SOLUTION</p>
      </div>
        <div className=" bg-gradient-to-b from-[#252e53] to-[#4d1438] sm:p-8 p-4 sm:py-20 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold sm:mb-6 text-center text-white">
          Login
        </h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                className="block text-gray-600 text-sm font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full text-black tm:p-1 p-4 border rounded-md focus:outline-none focus:border-blue-500 shadow-xl"
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-600 text-sm font-semibold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
              <input
                className="w-full text-black tm:p-1 p-4 border rounded-md focus:outline-none focus:border-blue-500 shadow-xl"
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
                className="p-2 tm:px-10 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600"
                type="submit"
              >
                Login
              </button>
            </div>
            <div className="text-center py-3 text-white">
            <p>
              Dont have an account ? please
              <Link to={"/worker/registration"}>
                <span className="text-blue-400 ml-3 hover:text-blue-700 cursor-pointer">
                  Register
                </span>
              </Link>
            </p>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Wlogin;
