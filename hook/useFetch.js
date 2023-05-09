import { useState, useEffect } from 'react';
import axios from 'axios';
// import { RAPID_API_KEY, RAPID_API_HOST } from '@env';

// const rapidApiKey = RAPID_API_KEY;
// const rapidApiHost = RAPID_API_HOST;

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  /* https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch RAPID API */
  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query },
    headers: {
      // 'X-RapidAPI-Key': rapidApiKey,
      // 'X-RapidAPI-Host': rapidApiHost,
      'X-RapidAPI-Key': 'c0037a076dmsh4d3ecb31eb65ab8p1134afjsnad00cbd6c257',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);

      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error);
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
