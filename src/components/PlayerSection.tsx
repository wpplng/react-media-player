import type { ReactElement } from 'react';

import Image from './Image';
import SongInfo from './SongInfo';
import ProgressBar from './ProgressBar';
import PlayButtons from './PlayButtons';

const PlayerSection = (): ReactElement => {
  return (
    <section>
      <Image />
      <SongInfo />
      <ProgressBar />
      <PlayButtons />
    </section>
  );
};

export default PlayerSection;
