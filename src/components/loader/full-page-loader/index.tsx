import React from 'react';
import './styles.scss';
import loaderIcon from '../loader.gif';
import { LoaderProps } from '..';

const FullPageLoader: React.SFC<LoaderProps> = (props: LoaderProps) => {
  return (
    <div className="Loader FullLoader">
      <div className="FullLoader__icon">
        <img src={loaderIcon} alt=".."></img>
      </div>
      {props.text && <div className="Loader__text">{props.text}</div>}
    </div>
  );
};

export default FullPageLoader;
