import type { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBackward,
  faCirclePlay,
  faForward,
  faRepeat,
  faShuffle,
  faCirclePlus,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

const PlayerSection = (): ReactElement => {
  return (
    <section>
      <img
        src='../src/assets/images/reputation.jpg'
        className='player-section-image'
      />
      <div className='title-box'>
        <FontAwesomeIcon icon={faCirclePlus} />
        <div className='song-info'>
          <h2>Taylor Swift</h2>
          <h3>Reputation</h3>
        </div>
        <FontAwesomeIcon icon={faHeart} />
      </div>
      <div className='time-line'>
        <p>0:40</p>
        <div className='progress-bar'></div>
        <p>3:42</p>
      </div>
      <div className='play-icons-outer'>
        <div>
          <FontAwesomeIcon icon={faRepeat} />
        </div>
        <div className='play-icons-inner'>
          <FontAwesomeIcon icon={faBackward} />
          <FontAwesomeIcon icon={faCirclePlay} />
          <FontAwesomeIcon icon={faForward} />
        </div>
        <div>
          <FontAwesomeIcon icon={faShuffle} />
        </div>
      </div>
    </section>
  );
};

export default PlayerSection;
