import { useEffect, useState, type ReactElement } from 'react';
import ListSection from './ListSection';
import PlayerSection from './PlayerSection';
import type { Song } from '../utilities/types';

interface MainContainerProps {
  songs: Song[];
}

const MainContainer = ({ songs }: MainContainerProps): ReactElement => {
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);

  useEffect(() => {
    if (songs.length > 0) {
      setSelectedSong(songs[0]);
    }
  }, [songs]);

  const handleSelect = (song: Song) => {
    setSelectedSong(song);
  };

  return (
    <main>
      <ListSection songs={songs} onSelect={handleSelect} />
      <PlayerSection song={selectedSong} />
    </main>
  );
};

export default MainContainer;
