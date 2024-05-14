import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { selectToken, setToken } from '../redux/TokenSlice'


const AdminAuth = () => {
    const token = useSelector(selectToken)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [role, setRole] = useState('');
    const [decodedToken, setDecodedToken] = useState('');

    const decodeToken = (token) => {
        const payload = token.split('.')[1];
        const decodedPayload = JSON.parse(atob(payload));
        setRole(decodedPayload.role)
        if (decodedPayload.role !== 'admin') {
          navigate("/master/masterEntry");
        }
      };

    useEffect(()=>{
      const currentUrl = window.location.href;
      const currentUrlAdmin = currentUrl.includes('/master')

        const storedToken = localStorage.getItem('jwt');
        if (storedToken === 'undefined') {
          navigate("/master/masterEntry");
        } else {
        
        if(!token && storedToken){
            dispatch(setToken(storedToken))
        }
        if(!token && !storedToken){
          if(currentUrlAdmin){
            navigate("/master/masterEntry");
          }
        } else if (token) {
            decodeToken(storedToken);
            const currentTime = Date.now() / 1000;
            if (decodedToken.exp < currentTime) {
              localStorage.removeItem('jwt');
              navigate("/master/masterEntry");
          } 
        }
      }
    },[token, dispatch, navigate]);

      
  return (
    <>
   <div>{ role === 'admin' && <Outlet />}</div>
   </>
  )
}

export default AdminAuth
