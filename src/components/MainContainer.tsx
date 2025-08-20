import type { ReactElement } from 'react';
import ListSection from './ListSection';
import PlayerSection from './PlayerSection';

const MainContainer = (): ReactElement => {
  return (
    <main>
      <ListSection />
      <PlayerSection />
    </main>
  );
};
export default MainContainer;
