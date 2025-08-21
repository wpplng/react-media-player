import type { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faHeart } from '@fortawesome/free-solid-svg-icons';
import SongBox from './SongBox';

interface SongInfoProps {
  artist: string;
  title: string;
}

const SongInfo = ({ artist, title }: SongInfoProps): ReactElement => {
  return (
    <div className='song-info'>
      <FontAwesomeIcon icon={faCirclePlus} />
      <SongBox artist={artist} title={title} />
      <FontAwesomeIcon icon={faHeart} />
    </div>
  );
};

export default SongInfo;
