import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { selectToken, setToken } from "../redux/TokenSlice";

const UserAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const [role, setRole] = useState('');
  const [decodedToken, setDecodedToken] = useState('');


  const decodeToken = (token) => {
    const payload = token.split('.')[1];
    const decodedPayload = JSON.parse(atob(payload));
    setDecodedToken(decodedPayload)
    setRole(decodedPayload.role)

    if (decodedPayload.role !== 'user') {
      navigate("/user/login");
    }
  };

  useEffect(() => {
    const currentUrl = window.location.href;
    const currentUrlUser = currentUrl.includes('/user')

    const storedToken  = localStorage.getItem('jwt');
    if (storedToken === 'undefined') {
      navigate("/user/login");
    } else {
    if (!token && storedToken) {
        dispatch(setToken(storedToken));
      }
  
      if (!token && !storedToken) {
        if(currentUrlUser){
          navigate("/user/login");
        }
      } else if (token) {
        decodeToken(token);
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp < currentTime) {
          localStorage.removeItem('jwt');
          localStorage.removeItem('userLocation');
          localStorage.removeItem('radius');
          navigate("/user/login");
        } 
    } 
  }
    
  }, [token, dispatch, navigate]);


  return (
   <>
   <div>{role === 'user' && <Outlet />}</div>
   </>
  );
};

export default UserAuth;
