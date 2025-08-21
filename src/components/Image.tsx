interface ImageProps {
  coverUrl: string;
}

const Image = ({ coverUrl }: ImageProps) => {
  return <img src={coverUrl} className='player-section-image' />;
};

export default Image;
