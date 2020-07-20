import React from 'react';
import Gif from './Gif';

// const GifList = () => {
//   return (
//     props.gifts
//   );
// };

// export default GifList;

const GifList = ({
  gifs,
  gifClassName = '',
  onClick,
}) => {
  return (
    <div className="gif-list">
      {
        gifs.map(gif => (
          <Gif
            onClick={onClick}
            gifClassName={gifClassName}
            id={gif.id}
            key={gif.id}
          />))
      }
    </div>
  );
};


export default GifList;
