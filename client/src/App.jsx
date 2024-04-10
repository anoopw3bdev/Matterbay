import { useState, useEffect, useCallback } from "react";
import "./App.css";
import { useFetchData } from "./hooks/useFetchData";
import { Feed } from "./components/Feed";
import { generateUrl } from "./utils/generateUrl";

export const App = () => {
  const { getData } = useFetchData();

  const [page, setPage] = useState(1);
  const [feed, setFeed] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const newFeed = await getData(generateUrl("get-feed"), page);
      setFeed((prevItems) => [...prevItems, ...newFeed]);
      setHasMore(newFeed.length > 0);
      setIsLoading(false);
    })();
  }, [page, getData]);

  const loadMore = useCallback(() => {
    setPage((page) => page + 1);
    setIsLoading(true);
  }, []);

  return (
    <>
      {!!feed && (
        <Feed
          hasMore={hasMore}
          isLoading={isLoading}
          loadMore={loadMore}
          data={feed}
        />
      )}
    </>
  );
};
