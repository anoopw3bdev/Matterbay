import PropTypes from 'prop-types';
import { getDateAndTimeFromTimestamp } from '../utils/formatTime';
import "../assets/styles/FeedItem.css"

const FeedItem = ({ item, loadMoreRef }) => {
  return (
    <div className="feed-item" ref={loadMoreRef}>
      <div className="feed-item__image">
        <img src={item?.node?.field_photo_image_section} />
      </div>
      <div className="feed-item__details">
        <div className="feed-item__details-title">
          {item?.node?.title}
        </div>
        <div>
          {getDateAndTimeFromTimestamp(item?.node?.last_update)}
        </div>
      </div>
    </div>
  );
};

FeedItem.propTypes = {
  item: PropTypes.object.isRequired,
  loadMoreRef: PropTypes.func,
};

export {FeedItem}