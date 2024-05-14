import React from "react";
import client from "../../assets/images/client.jpg";
import { Link } from "react-router-dom";
// import bg2 from "../../assets/images/gray.jpeg";

function Content1() {
  return (
    <div className="">
      <div
        style={{ backgroundImage: `url(${client})` }}
        className=" bg-center bg-cover sm:p-3 p-1 h-full flex flex-col bg-[#202020] rounded "
      >
        <div className="bg-[#ffffff] p-2 sm:flex justify-center rounded-xl">
          <div className=" sm:p-5 p-2  flex justify-center items-center">
            <h1 className="lg:text-3xl sm:text-xl text-lg font-bold text text-center text-black">
              ALL IN ONE SOLUTION
            </h1>
          </div>
          <div className="bg-[#37465a] sm:p-4 p-1 text-left text-white  space-y-1">
            <h1 className="text-center lg:text-base md:text-[80%] text-[60%]">
              India's premier work contract platform and leading job provider,
              where opportunities meet ambition, and careers are crafted.
              Elevate your professional journey with the nation's largest hub of
              work contracts and job listings, connecting skilled workers with
              top employers.
            </h1>
            <h1 className="text-center lg:text-2xl md:text-lg text-sm">
              Welcome to the epitome of employment excellence!
            </h1>
          </div>
        </div>

        <div className="lg:px-28 sm:px-12  sm:py-14 py-1">
          <div className="hover:text-black text-white sm:flex gap-x-8 ">
            <div className="gap-y-6 rounded-lg border-2 p-10 flex flex-col justify-center sm:items-start items-center py-8 w-[100%] bg-slate-700  hover:bg-[#fff] bg-opacity-40 hover:bg-opacity-80 ">
              <h1 className="rm:text-4xl text-2xl font-bold text-center sm:text-left">
                Join us now !
              </h1>
              {/* <marquee behavior="scroll" scrollamount="5" direction=""> */}
              <Link to={"/user/signup"}>
                <button className="  bg-[#000000] hover:bg-[#19273d] text-white  hovertext-black p-2 px-6 rounded font-bold  ">
                  sign in
                </button>
              </Link>
              {/* </marquee> */}
              <div>
                <h1 className="text-[20px] font-medium">Why Sign In?</h1>
                <div className="text-[10px] font-medium">
                  <p>
                    - Access Your Profile: Manage your profile, update your
                    skills, and showcase your experience.
                  </p>
                  <p>
                    - Job Applications: Apply for jobs with a click and keep
                    track of your applications.
                  </p>
                  <p>
                    - Notifications: Stay updated on new job listings and
                    messages from employers.
                  </p>
                </div>
              </div>
            </div>

            <div
              // style={{ backgroundImage: `url(${bg2})` }}
              className="bg-slate-700 hover:bg-[#fff] bg-opacity-40 hover:bg-opacity-80 border-2 text-white hover:text-black flex flex-col justify-center items-center sm:gap-y-4 gap-y-2 w-[100%] text-center sm:h-auto h-40 p-4 rounded-md"
            >
              <h1 className="rm:text-3xl text-xl font-bold">Already a user ?</h1>
              <div className="flex md:flex-row   gap-x-4 flex-col  justify-center items-center">
                <p className="font-bold mb-1">Please log in</p>
                <Link to={"/user/login"}>
                  <button className=" bg-[#000000] hover:bg-[#19273d] text-white  hovertext-black p-2 px-6 rounded font-bold">
                    login
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="sm:text-right text-left">
            <p className="text-white text-[10px]">
              * By logging in, you agree to our [Terms of Service] and [Privacy
              Policy].
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content1;
