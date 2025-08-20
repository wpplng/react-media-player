import type { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

const ListSection = (): ReactElement => {
  return (
    <section className='list-section'>
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
    </section>
  );
};
export default ListSection;
