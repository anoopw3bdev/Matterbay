import PropTypes from 'prop-types';
import { FeedItem } from "./FeedItem";
import "../assets/styles/Feed.css"

const Feed = ({data}) => {
    return (
        <div className="feed">
          {data?.nodes?.length && data?.nodes?.map((node, index) => (
            <FeedItem key={index} item={node} />
          ))}
        </div>
    );
}

Feed.propTypes = {
    data: PropTypes.object.isRequired,
};

export { Feed }