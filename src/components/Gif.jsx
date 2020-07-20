import React from 'react';

const noop = () => true;

const Gif = ({
  id,
  gifClassName,
  onClick = noop,
}) => {
  const src = `https://media3.giphy.com/media/${id}/200.gif`;
  return (
    <img
      src={src}
      alt=""
      className={gifClassName}
      onClick={() => onClick(id)}
    />
  );
};

export default Gif;
