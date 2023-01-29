import React from 'react';
import './NotFound.css';

interface Props {
  message?: string;
}

const NotFound = (props: Props) => {
  const { message = 'Sorry, page not found!' } = props;
  return (
    <div className="NotFound">
      <h3>{message}</h3>
    </div>
  );
};

export default NotFound;
