import type { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';

const Header = (): ReactElement => {
  return (
    <header>
      <FontAwesomeIcon icon={faAngleLeft} />
      <h1>Playlist - Taylor Swift</h1>
      <FontAwesomeIcon icon={faEllipsisVertical} />
    </header>
  );
};
export default Header;
