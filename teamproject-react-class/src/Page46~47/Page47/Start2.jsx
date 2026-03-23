import React, { useEffect } from 'react';
import Page47Title from './Page47Title';
import ProblemComponent from './ProblemComponent';

const Start2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div>
        <Page47Title />
      </div>

      <ProblemComponent />
    </div>
  );
};

export default Start2;
