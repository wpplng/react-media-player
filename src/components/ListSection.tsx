import type { ReactElement } from 'react';

import SongListItem from './SongListItem';

const ListSection = (): ReactElement => {
  return (
    <section className='list-section'>
      <SongListItem />
    </section>
  );
};
export default ListSection;
