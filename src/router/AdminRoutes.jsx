import { Route,Routes } from 'react-router-dom'
import WorkerDashboard from '../components/Admin/AdminWorkerSide/WorkerDashboard'
import DashboardLandingPage from '../components/Admin/DashboardLandingPage'
import UserDashboard from '../components/Admin/AdminUserSide/UserDashboard'
import AdminLogin from '../components/Admin/AdminLogin'
import AdminAuth from '../authGauard/AdminAuth'


function AdminRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/masterEntry' element={<AdminLogin/>}/>
      <Route path='/' element={<AdminAuth/>}>
        <Route path='/dashboard' element={<DashboardLandingPage/>} />
        <Route path='/dashboardWorker' element={<WorkerDashboard/>} />
        <Route path='/dashboardUser' element={<UserDashboard/>} />
      </Route>  
      </Routes>
      
    </div>
  )
}

export default AdminRoutes
