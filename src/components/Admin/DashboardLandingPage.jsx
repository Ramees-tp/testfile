import { Link } from "react-router-dom"

const DashboardLandingPage = () => {
  return (
    <div>
      <div className=" p-1">
        <div className="bg-gradient-to-b from-gray-800 to-[#916da3] text-white sm:p-7 p-5 leading-10">
            <p className="sm:text-5xl rm:text-3xl text-2xl font-bold text-center">ALL IN ONE SOLUTION <span className=" text-red-700 tm:text-xl text-[65%]">Admin Dashboard</span> </p>
        </div>
        <div className="h-full ">
          <div className="sm:h-[30%] bg-gray-800 flex justify-center items-center sm:p-20 tm:p-16 p-10">
            <h1 className="sm:text-3xl text-sm font-bold text-gray-300">WELCOME TO ADMIN CONTROL</h1>
          </div>
          <div className="sm:h-[70%] flex justify-center items-center sm:gap-10 gap-6 sm:p-40 p-32 border-4 border-purple-700">
            <Link to={'/master/dashboardWorker'}>
            <button
              className="sm:w-40 w-28 sm:h-16 h-12 shadow-lg shadow-black rounded-md bg-gradient-to-b from-[#916da3] to-gray-800 hover:bg-purple-500 focus:bg-purple-500 sm:text-xl text-sm font-bold text-white"
             >
                Worker Section
            </button>
            </Link>
            <Link to={'/master/dashboardUser'}>
            <button
              className="sm:w-40 w-28 sm:h-16 h-12 shadow-lg shadow-black rounded-md bg-gradient-to-b from-[#916da3] to-gray-800 hover:bg-purple-500 focus:bg-purple-500 sm:text-xl text-sm font-bold text-white"
            >
              User Section
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardLandingPage
