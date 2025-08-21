import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import type { Song } from '../utilities/types';

interface SongListItemProps {
  song: Song;
}

const SongListItem = ({ song }: SongListItemProps) => {
  return (
    <article className='song-list-item'>
      <div className='song-list-item-info'>
        <img src={song.coverUrl} className='song-list-item-image' />
        <div>
          <h2>{song.artist}</h2>
          <h3>{song.title}</h3>
        </div>
      </div>
      <FontAwesomeIcon icon={faCirclePlay} />
    </article>
  );
};

export default SongListItem;
