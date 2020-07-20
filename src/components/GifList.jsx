import React from 'react';
import Gif from './Gif';

// const GifList = () => {
//   return (
//     props.gifts
//   );
// };

// export default GifList;

const GifList = ({
  gifs
}) => {
  return (
    <div className="gift-list">
      {gifs.map(gif => <Gif id={gif.id} key={gif.id} />)}
    </div>
  );
};


export default GifList;
