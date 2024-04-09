import { useState, useEffect } from 'react';

export const useFetchData = (apiUrl) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => { 

    const fetchData = async () => {
      const page = 1;
      setIsLoading(true);
      try {
        const response = await fetch(`http://localhost:3000/api/get-feed?page=${page}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  return { data, isLoading, error };
};
