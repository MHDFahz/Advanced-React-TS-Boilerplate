import React from 'react';
import './styles.scss';
import loaderIcon from '../loader.gif';
import { LoaderProps } from '..';

interface ContainerLoaderProps extends LoaderProps {
  height?: number;
}
const ContainerLoader: React.SFC<ContainerLoaderProps> = (
  props: ContainerLoaderProps
) => {
  return (
    <div
      className="Loader ContainerLoader"
      style={{ minHeight: props.height || 50 }}
    >
      {' '}
      <div className="ContainerLoader__icon">
        <img src={loaderIcon} alt={'..'}></img>
      </div>
      {props.text && <div className="Loader__text">{props.text}</div>}
    </div>
  );
};

export default ContainerLoader;
