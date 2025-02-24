import React, { FC } from 'react';
import '../css/loadingCss.css';

const Loading: FC = () => {

  return(
    <div className="spinner">
      <div></div>
      <div></div>
    </div>
  );
};

export default Loading;