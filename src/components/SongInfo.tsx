import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faHeart } from '@fortawesome/free-solid-svg-icons';

const SongInfo = () => {
  return (
    <div className='title-box'>
      <FontAwesomeIcon icon={faCirclePlus} />
      <div className='song-info'>
        <h2>Taylor Swift</h2>
        <h3>Reputation</h3>
      </div>
      <FontAwesomeIcon icon={faHeart} />
    </div>
  );
};
export default SongInfo;
