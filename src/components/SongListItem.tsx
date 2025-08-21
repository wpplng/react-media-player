import type { ReactElement } from 'react';
import Image from './Image';
import type { Song } from '../utilities/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

interface SongListItemProps {
  song: Song;
}

const SongListItem = ({ song }: SongListItemProps): ReactElement => {
  return (
    <article className='song-list-item'>
      <div className='song-list-item-info'>
        <Image coverUrl={song.coverUrl} className='song-list-item-image' />
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
