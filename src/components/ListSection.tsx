import type { ReactElement } from 'react';
import SongListItem from './SongListItem';
import type { Song } from '../utilities/types';

interface ListSectionProps {
  songs: Song[];
  onSelect: (song: Song) => void;
}

const ListSection = ({ songs, onSelect }: ListSectionProps): ReactElement => {
  return (
    <section className='list-section'>
      {songs.map((song) => (
        <SongListItem
          key={song.id}
          song={song}
          onClick={() => onSelect(song)}
        />
      ))}
    </section>
  );
};

export default ListSection;
