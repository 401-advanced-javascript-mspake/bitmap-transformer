'use strict';

function whiteToBlack(bitmap) {
  let image = bitmap.buffer.slice(bitmap.pixelDataStart);

  for(let i in image) {
    if(image[i] === 0xff) image[i] = 0; 
  }

  bitmap.buffer = Buffer.concat([bitmap.buffer.slice(0, bitmap.pixelDataStart), image]);
}

module.exports = whiteToBlack;