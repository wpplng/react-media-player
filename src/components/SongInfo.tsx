import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faHeart } from '@fortawesome/free-solid-svg-icons';

interface SongInfoProps {
  artist: string;
  title: string;
}

const SongInfo = ({ artist, title }: SongInfoProps) => {
  return (
    <div className='title-box'>
      <FontAwesomeIcon icon={faCirclePlus} />
      <div className='song-info'>
        <h2>{artist}</h2>
        <h3>{title}</h3>
      </div>
      <FontAwesomeIcon icon={faHeart} />
    </div>
  );
};
export default SongInfo;
