'use strict';

function upsidedown(bitmap) {
  let image = bitmap.buffer.slice(bitmap.pixelDataStart);

  let imageArr = [];
  for(let i = 0; i < bitmap.height; i++) {
    imageArr[i] = image.slice(0, 112);
    image = image.slice(112);
  }

  imageArr.reverse();

  let newImage = Buffer.concat(imageArr);
  bitmap.buffer = Buffer.concat([bitmap.buffer.slice(0, bitmap.pixelDataStart), newImage]);
  
}

module.exports = upsidedown;