import type { ReactElement } from 'react';

interface ProgressBarProps {
  duration: string;
}

const ProgressBar = ({ duration }: ProgressBarProps): ReactElement => {
  return (
    <div className='progress-bar'>
      <p>0:40</p>
      <div className='progress-bar-line'></div>
      <p>{duration}</p>
    </div>
  );
};

export default ProgressBar;
