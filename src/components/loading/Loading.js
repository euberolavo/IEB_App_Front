import React from 'react';
import Style from './Loading.module.css'

const Loading = () => {
  return (
    <div className={Style.Loading}>
      <div className={Style.loadingSpinner}></div>
    </div>
  );
};

export default Loading;
