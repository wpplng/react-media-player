import type { ReactElement } from 'react';
import ListSection from './ListSection';
import PlayerSection from './PlayerSection';
import type { Song } from '../utilities/types';

interface MainContainerProps {
  songs: Song[];
}

const MainContainer = ({ songs }: MainContainerProps): ReactElement => {
  return (
    <main>
      <ListSection songs={songs} />
      <PlayerSection song={songs[0]} />
    </main>
  );
};

export default MainContainer;
