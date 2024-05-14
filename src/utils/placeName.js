const getPlaceName = async (latitude, longitude) => {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
        const data = await response.json();
        const placeName = data.display_name;
        return placeName;
    } catch (error) {
        console.error('Error fetching place name:', error);
        return null;
    }
};

export default getPlaceName;
