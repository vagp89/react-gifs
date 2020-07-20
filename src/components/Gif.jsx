import React from 'react';

const Gif = ({
  id
}) => {
  const src = `https://media3.giphy.com/media/${id}/200.gif`;
  return (
    <img src={src} alt="" className="gif-center" />
  );
};

export default Gif;
