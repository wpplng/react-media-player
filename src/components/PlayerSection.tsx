import type { ReactElement } from 'react';
import Image from './Image';
import SongInfo from './SongInfo';
import ProgressBar from './ProgressBar';
import PlayButtons from './PlayButtons';
import type { Song } from '../utilities/types';

interface PlayerSectionProps {
  song: Song | null;
}

const PlayerSection = ({ song }: PlayerSectionProps): ReactElement => {
  if (!song) {
    return <section className='player-section'></section>;
  }

  return (
    <section className='player-section'>
      <Image coverUrl={song.coverUrl} className='player-section-image' />
      <SongInfo artist={song.artist} title={song.title} />
      <ProgressBar duration={song.duration} />
      <PlayButtons />
    </section>
  );
};

export default PlayerSection;
