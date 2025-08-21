import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import type { Song } from '../utilities/types';

interface SongListItemProps {
  song: Song;
}

const SongListItem = ({ song }: SongListItemProps) => {
  return (
    <>
      <div className='song-info-box'>
        <img src={song.coverUrl} className='list-section-image' />
        <div>
          <h2>{song.artist}</h2>
          <h3>{song.title}</h3>
        </div>
      </div>
      <FontAwesomeIcon icon={faCirclePlay} />
    </>
  );
};

export default SongListItem;
