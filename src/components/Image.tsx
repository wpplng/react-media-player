import type { ReactElement } from 'react';

interface ImageProps {
  coverUrl: string;
  className: string;
}

const Image = ({ coverUrl, className }: ImageProps): ReactElement => {
  return <img src={coverUrl} className={className} />;
};

export default Image;
