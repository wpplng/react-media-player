import type { ReactElement } from 'react';
import SongListItem from './SongListItem';
import type { Song } from '../utilities/types';

interface ListSectionProps {
  songs: Song[];
}

const ListSection = ({ songs }: ListSectionProps): ReactElement => {
  return (
    <section className='list-section'>
      {songs.map((song) => (
        <SongListItem key={song.id} song={song} />
      ))}
    </section>
  );
};

export default ListSection;
