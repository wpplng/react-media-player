import type { ReactElement } from 'react';

const Header = (): ReactElement => {
  return (
    <header>
      <span className='material-symbols-outlined'>arrow_back_ios</span>
      <h1>Playlist - Moody</h1>
      <span className='material-symbols-outlined'>more_vert</span>
    </header>
  );
};
export default Header;
