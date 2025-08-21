import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBackward,
  faCirclePlay,
  faForward,
  faRepeat,
  faShuffle,
} from '@fortawesome/free-solid-svg-icons';

const PlayButtons = () => {
  return (
    <div className='play-buttons'>
      <div>
        <FontAwesomeIcon icon={faRepeat} />
      </div>
      <div className='play-buttons-inner'>
        <FontAwesomeIcon icon={faBackward} />
        <FontAwesomeIcon icon={faCirclePlay} />
        <FontAwesomeIcon icon={faForward} />
      </div>
      <div>
        <FontAwesomeIcon icon={faShuffle} />
      </div>
    </div>
  );
};

export default PlayButtons;
