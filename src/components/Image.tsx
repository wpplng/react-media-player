import type { ReactElement } from 'react';

interface ImageProps {
  coverUrl: string;
  className?: string;
}

const Image = ({ coverUrl, className }: ImageProps): ReactElement => {
  return (
    <div className='image'>
      <img src={coverUrl} className={className} />
    </div>
  );
};

export default Image;
