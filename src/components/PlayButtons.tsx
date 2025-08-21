import type { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBackward,
  faCirclePlay,
  faForward,
  faRepeat,
  faShuffle,
} from '@fortawesome/free-solid-svg-icons';

const PlayButtons = (): ReactElement => {
  return (
    <div className='play-buttons'>
      <FontAwesomeIcon icon={faRepeat} />
      <div className='play-buttons-inner'>
        <FontAwesomeIcon icon={faBackward} />
        <FontAwesomeIcon icon={faCirclePlay} />
        <FontAwesomeIcon icon={faForward} />
      </div>
      <FontAwesomeIcon icon={faShuffle} />
    </div>
  );
};

export default PlayButtons;
