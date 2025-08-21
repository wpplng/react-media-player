import type { ReactElement } from 'react';
import Image from './Image';
import SongBox from './SongBox';
import type { Song } from '../utilities/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

interface SongListItemProps {
  song: Song;
  onClick: () => void;
}

const SongListItem = ({ song, onClick }: SongListItemProps): ReactElement => {
  return (
    <article className='song-list-item'>
      <div className='song-list-item-info'>
        <Image coverUrl={song.coverUrl} className='song-list-item-image' />
        <SongBox artist={song.artist} title={song.title} />
      </div>
      <button
        className='play-button'
        onClick={onClick}
        aria-label={`Play ${song.title}`}
      >
        <FontAwesomeIcon icon={faCirclePlay} />
      </button>
    </article>
  );
};

export default SongListItem;
