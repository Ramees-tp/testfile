import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import io from 'socket.io-client'
import { useDispatch, useSelector } from "react-redux";
import { selectSocket, setSocket } from "./redux/SocketSlice";
import { useEffect } from "react";
import { selectToken } from "./redux/TokenSlice";
import SuspenceView from "./components/SuspenceView";

const AdminRoutes = lazy(()=> import("./router/AdminRoutes"));
const CommonRouter = lazy(()=> import("./router/CommonRouter"));
const UserRoutes = lazy(()=> import("./router/UserRoutes")) ;
const WorkerRoutes = lazy(() => import("./router/WorkerRoutes"));

function App() {
  const dispatch = useDispatch()
  const token = useSelector(selectToken)
  const socket = useSelector(selectSocket)
  useEffect(()=>{
    if(token && !socket){
      const socket = io.connect('http://34.207.143.20/io/');
    // const socket = io.connect('http://localhost:9180')
    dispatch(setSocket(socket));
    return () => {
      socket.disconnect()
    };
    }
  },[token])
  return (
      <BrowserRouter>
      <Suspense fallback={<SuspenceView/>}>
        <Routes>
          <Route path="/*" element={<CommonRouter />} />
          <Route path="/user/*" element={<UserRoutes />} />
          <Route path="/worker/*" element={<WorkerRoutes />} />
          <Route path="/master/*" element={<AdminRoutes />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
  );
}

export default App;
