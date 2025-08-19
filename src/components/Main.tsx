import type { ReactElement } from 'react';
import ListSection from './ListSection';
import PlayerSection from './PlayerSection';

const Main = (): ReactElement => {
  return (
    <>
      <ListSection />
      <PlayerSection />
    </>
  );
};
export default Main;
