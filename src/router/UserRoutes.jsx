import { Routes, Route } from "react-router-dom";
import { SearchProvider } from "../context/UserContext";
import React, { Suspense, lazy } from 'react';
import UserAuth from "../authGauard/UserAuth";
import NotFound from "../pages/NotFound";
import Suspence from "../components/SuspenceView";


const SignUp = lazy(() => import("../pages/signUp/SignUp"));
const Login = lazy(() => import("../pages/login/Login"));
const UserHome = lazy(() => import("../pages/UserHome/UserHome"));
const OTPVerification = lazy(() => import("../components/OTP/OTPVerification"));
const UserWorkerList = lazy(() => import("../pages/UserHome/UserWorkerList"));
const ResetPass = lazy(() => import("../pages/ChangePassword/ResetPass"));
const UserWorkerDetails = lazy(() => import("../pages/UserHome/UserWorkerDetails"));
const UserContracts = lazy(() => import("../pages/UserHome/UserContracts"));
const UserProfilePage = lazy(() => import("../pages/UserHome/UserProfilePage"));
const UpdateProfile = lazy(() => import("../pages/UserHome/UpdateProfile"));
const ContactPage = lazy(() => import("../pages/UserHome/ContactPage"));
const AboutPage = lazy(() => import("../pages/UserHome/AboutPage"));


function UserRoutes() {

  return (
    <SearchProvider>
      <Suspense fallback={<Suspence/>}>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      <Route path="/" element={<UserAuth/>}>

        <Route path="/uhome" element={<UserHome />} />
        <Route path="/workerList/:id" element={<UserWorkerList />} />
        <Route path="/workerDetails/:id/:id1" element={<UserWorkerDetails/>}/>
        <Route path='/userContract' element={<UserContracts/>} />
        <Route path='/userProfiles' element={<UserProfilePage/>} />
        <Route path='/ucontact' element={<ContactPage/>} />
        <Route path='/about' element={<AboutPage/>} />

        <Route path="/otp" element={<OTPVerification />} />
        <Route path="/resetPassword" element={<ResetPass />} />
        <Route path="/updateProfile" element={<UpdateProfile/>}/>
        <Route path='*' element={<NotFound/>} />

      </Route>
      </Routes>
      </Suspense>
    </SearchProvider>
  );
}

export default UserRoutes;
