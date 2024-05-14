import React, { lazy, Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import WorkerAuth from "../authGauard/WorkerAuth";
import NotFoundWorker from '../pages/NotFoundWorker'
import Suspens from '../components/SuspenceView';

const DetailsForm = lazy(() => import('../components/Worker/Registraion/DetailsForm'));
const JobForm = lazy(() => import('../components/Worker/Registraion/JobForm'));
const PaymentForm = lazy(() => import('../components/Worker/Registraion/PaymentForm'));
const Wlogin = lazy(() => import('../components/Worker/Wlogin'));
const Registration = lazy(() => import('../components/Worker/Registraion/Registration'));
const WorkerHome = lazy(() => import('../pages/WorkerHome/WorkerHome'));
const Wprofile = lazy(() => import('../components/Worker/Wprofile'));
const WupdateProfile = lazy(() => import('../pages/WorkerHome/WupdateProfile'));


function WorkerRoutes() {
  return (
    <div>
      <Suspense fallback={<Suspens/>}>
      <Routes>
        <Route path="/WorkerLogin" element={<Wlogin />} />
        <Route path="/registration" element={<Registration />} />
        
      <Route path="/" element={<WorkerAuth/>}>
        <Route path="/detailsForm" element={<DetailsForm />} />
        <Route path="/jobDetailsForm" element={<JobForm />} />
        <Route path="/paymentForm" element={<PaymentForm />} />

        <Route path="/profile" element={<Wprofile />} />
        <Route path="/updateProfile" element={<WupdateProfile/>}/>
        <Route path="/whome" element={<WorkerHome />} />
        
        <Route path='*' element={<NotFoundWorker/>} />
      </Route>  
      </Routes>
      </Suspense>
    </div>
  );
}

export default WorkerRoutes;
