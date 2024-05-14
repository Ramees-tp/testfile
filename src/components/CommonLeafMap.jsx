import { useEffect, useRef, useState } from 'react';
import { MapContainer, Marker, TileLayer, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import getPlaceName from '../utils/placeName';


const CommonLeafMap = ({ initialCenter, initialPlaceName, userType, initialStart }) => {
    const [center, setCenter] = useState(initialCenter);
    const [placeName, setPlaceName] = useState(initialPlaceName);

    const mapContainerStyle = {
        width: '100%',
        height: '100vh',
    };

    const mapRef = useRef();

    const flyToCenter = () => {
        mapRef.current.flyTo(center, 14, { animate: true });
    };


    useEffect(() => {
        const fetchData = async () => {
            const placeName = await getPlaceName(center.lat, center.lng);
            setPlaceName(placeName);
            if (userType === 'worker') {
                localStorage.setItem("workerLocation", JSON.stringify({ center, placeName }));
            } else {
                localStorage.setItem("userLocation", JSON.stringify({ center, placeName }));
            }
        };
        fetchData();
    }, [center]);   

    const handleCurrentLocationClick = async () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    setCenter({ lat: latitude, lng: longitude });
                    const placeName = await getPlaceName(latitude, longitude);
                    setPlaceName(placeName);

                },
                (error) => {
                    console.error("Error getting geolocation:", error);
                }
            );
            
        } else {
            console.error("Geolocation is not supported");
        }
    };

    // const handleMapClick = (e) => {
    //     const { lat, lng } = e.latlng;
    //     setCenter({ lat, lng });
    //     onLocationChange({ lat, lng });
    // };

    const HandleClick = () => {
        useMapEvents({
            click:(e)=>{
               const { lat, lng } = e.latlng;
               setCenter({ lat, lng });
            }
        })
    };

    return (
        <div className='relative'>
           <div className='bg-white'>
           <FontAwesomeIcon className='h-8 p-3 text-blue-600 ' onClick={handleCurrentLocationClick} icon={faMapMarkerAlt} />
            <FontAwesomeIcon className='h-8 p-3 text-red-600 ' onClick={flyToCenter} icon={faArrowsAlt} />
           </div>
             <MapContainer center={center} zoom={12} ref={mapRef} style={mapContainerStyle}>
                <TileLayer 
                    url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" 
                    attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                />
                <Marker position={center} />
                {/* <useMapEvents click={handleMapClick} /> */}
                <HandleClick />
            </MapContainer>
           
        </div>
    );
}

export default CommonLeafMap
