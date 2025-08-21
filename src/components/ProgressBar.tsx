interface ProgressBarProps {
  duration: string;
}

const ProgressBar = ({ duration }: ProgressBarProps) => {
  return (
    <div className='time-line'>
      <p>0:40</p>
      <div className='progress-bar'></div>
      <p>{duration}</p>
    </div>
  );
};

export default ProgressBar;
