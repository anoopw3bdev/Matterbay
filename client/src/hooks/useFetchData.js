import { useState, useCallback } from "react";

export const useFetchData = () => {
  const [isLoading, setIsLoading] = useState(false);

  const getData = useCallback(async (url, page) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${url}?page=${page}`);
      const data = await response.json();
      setIsLoading(false);
      return data.nodes;
    } catch (err) {
      console.error(err);
      setIsLoading(false);
      throw err;
    }
  }, []);

  return { isLoading, getData };
};
