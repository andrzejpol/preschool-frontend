import React from 'react';
import {useSelector} from 'react-redux';
import './GlobalLoaderStyle.css';

const GlobalLoader = () => {
  const globalLoader = useSelector((state) => state.loaders.globalLoader);

  if (!globalLoader) return null;

  return (
    <div className="loader-overlay">
      <div className="spinner"></div>
    </div>
  );
};

export default GlobalLoader;
