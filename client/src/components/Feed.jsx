import { useEffect } from "react";
import PropTypes from "prop-types";
import { FeedItem } from "./FeedItem";
import "../assets/styles/Feed.css";
import useOnScreen from "../hooks/useInfiniteScroll";

const Feed = ({ hasMore, loadMore, data }) => {
  const { measureRef, isIntersecting, observer } = useOnScreen();

  useEffect(() => {
    if (isIntersecting && hasMore) {
      loadMore();
      observer.disconnect();
    }
  }, [isIntersecting, hasMore, loadMore]);

  return (
    <div className="feed">
      <>
        {data?.length &&
          data?.map((node, index) => {
            if (index === data.length - 1) {
              return (
                <div key={index}>
                  <FeedItem loadMoreRef={measureRef} item={node} />
                </div>
              );
            }
            return <FeedItem key={index} item={node} />;
          })}
      </>
    </div>
  );
};

Feed.propTypes = {
  data: PropTypes.array.isRequired,
  loadMoreRef: PropTypes.object,
  loading: PropTypes.bool,
  loadMore: PropTypes.func,
  hasMore: PropTypes.bool,
};

export { Feed };
