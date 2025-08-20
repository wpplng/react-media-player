import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

const SongListItem = () => {
  return (
    <>
      <div className='song-info-box'>
        <img
          src='../src/assets/images/reputation.jpg'
          className='list-section-image'
        />
        <div>
          <h2>Taylor Swift</h2>
          <h3>Reputation</h3>
        </div>
      </div>
      <FontAwesomeIcon icon={faCirclePlay} />
    </>
  );
};

export default SongListItem;
