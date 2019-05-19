'use strict';

function whiteToBlack(bitmap) {
  let image = bitmap.buffer.slice(bitmap.pixelDataStart);
  console.log(bitmap.buffer.slice(7000));

  for(let i in image) {
    if(image[i] >= 245 && image[i] <= 256) image[i] = 0; 
  }

  bitmap.buffer = Buffer.concat([bitmap.buffer.slice(0, bitmap.pixelDataStart), image]);
}

function everyOther(bitmap) {
  let image = bitmap.buffer.slice(bitmap.pixelDataStart);
  console.log(bitmap.buffer.slice(0x0000007A, 700));
  const imageArr = [];
  for(let i = 0; i < bitmap.height; i++) {
    imageArr[i] = image.slice(0, 112);
    image = image.slice(112);
  }

  for(let i in imageArr){
    if (i % 2) imageArr[i] = Buffer.alloc(imageArr[i].length, 0x02);
  }

  let newImage = Buffer.concat(imageArr);
  bitmap.buffer = Buffer.concat([bitmap.buffer.slice(0, bitmap.pixelDataStart), newImage]);
}

function selectByColor(bitmap) {
  let image = bitmap.buffer.slice(bitmap.pixelDataStart);

  for(let i in image) {
    if(image[i] >= 0 && image[i] <= 50) image[i] = 0xf4; 
  }

  bitmap.buffer = Buffer.concat([bitmap.buffer.slice(0, bitmap.pixelDataStart), image]);
}

function colors(bitmap) {
  let image = bitmap.buffer.slice(bitmap.pixelDataStart);
  bitmap.buffer[0x0000007a] = 0x00;
  bitmap.buffer[0x0000007b] = 0xd7;
  bitmap.buffer[0x0000007c] = 0xff;

  //	#191970
  for(let i = 0; i < image.length; i++) {
    image[i] = 0;
  }
  bitmap.buffer = Buffer.concat([bitmap.buffer.slice(0, bitmap.pixelDataStart), image]);

}


module.exports = colors;