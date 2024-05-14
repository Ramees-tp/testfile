import { useState, useEffect } from 'react';

const Location = () => {
    const [location, setLocation] = useState({
        coordinates: { lat: '', lng: '' },
        loaded: false,
    });

    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLocation({ coordinates: { lat: latitude, lng: longitude }, loaded: true });
                },
                (error) => {
                    setLocation({ ...location, loaded: true });
                }
            );
        } else {
            console.error('Geolocation is not supported');
        }
    }, []); 

    return null; 
};

export default Location;
