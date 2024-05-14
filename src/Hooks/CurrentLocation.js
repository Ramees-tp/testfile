import { useEffect, useState } from 'react'

const CurrentLocation = () => {
    const [location, setLocation] =useState({
        coordinates: {lat: "", lng: ""},
        loaded: false,
    });

    const onSuccess = location=>{
        setLocation({
            loaded: true,
            coordinates:{
                lat: location.coordinates.latitude,
                lng: location.coordinates.longitude,
            }
        })
    }
    const onError = error =>{
        setLocation({
            loaded: true,
           error,
        })
    }

    useEffect(()=>{
       if(!("geolocation" in navigator)){
        onError({
            code: 0,
            message:" Geolocation is not supportted"
        });
        
       }
       navigator.geolocation.getCurrentPosition(onSuccess, onError);
    },[]);
  return location;
}

export default CurrentLocation
