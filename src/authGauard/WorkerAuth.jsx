import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { selectToken, setToken } from '../redux/TokenSlice';

const WorkerAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const workerToken  = useSelector(selectToken);
  const [role, setRole] = useState('');
  const [decodedToken, setDecodedToken] = useState('');

  const decodeToken = (token) => {
    const payload = token.split('.')[1];
    const decodedPayload = JSON.parse(atob(payload));
    setDecodedToken(decodedPayload)
    setRole(decodedPayload.role)
    if (decodedPayload.role !== 'worker') {
      navigate("/worker/WorkerLogin");
    }
  };

  useEffect(() => {
    const currentUrl = window.location.href;
    const currentUrlWorker = currentUrl.includes('/worker/')

    const storedToken  = localStorage.getItem('jwt');
    if (storedToken === 'undefined') {
      navigate("/worker/WorkerLogin");
    } else {
    if (!workerToken  && storedToken) {
        dispatch(setToken(storedToken));
      }
  
      if (!workerToken  && !storedToken) {
        if(currentUrlWorker){
          navigate("/worker/WorkerLogin");
        }
      } else if (workerToken) {
        decodeToken(storedToken);
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp < currentTime){
            localStorage.removeItem('jwt');
            localStorage.removeItem('workerLocation');
            navigate("/worker/WorkerLogin");          
        }
      } 
    }

  }, [workerToken, dispatch, navigate]);

  return (
   <>
   <div>{role === 'worker' && <Outlet />}</div>
   </>
  );
}

export default WorkerAuth
