import { useState } from 'react';

const useTrackLocations = () => {
  const [locationErrorMsg, setLocationErrorMsg] = useState('');
  const [latlng, setLatlng] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const success = (position) => {
    const { latitude, longitude } = position.coords;
    setLatlng(`${latitude},${longitude}`);
    setLocationErrorMsg('');
  };

  const error = () => {
    setLocationErrorMsg('Unable to retrieve your location');
    setIsLoading(false);
  };

  const handleTrackLocation = () => {
    setIsLoading(true);
    if (!navigator.geolocation) {
      setLocationErrorMsg('Geolocation is not supported by your browser');
      setIsLoading(false);
    } else {
      // status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
      setIsLoading(false);
    }
  };

  return {
    latlng,
    isLoading,
    locationErrorMsg,
    handleTrackLocation,
  };
};

export default useTrackLocations;
