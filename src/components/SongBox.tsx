import type { ReactElement } from 'react';

interface SongBoxProps {
  artist: string;
  title: string;
}

const SongBox = ({ artist, title }: SongBoxProps): ReactElement => {
  return (
    <div className='song-box'>
      <h2>{artist}</h2>
      <h3>{title}</h3>
    </div>
  );
};

export default SongBox;
