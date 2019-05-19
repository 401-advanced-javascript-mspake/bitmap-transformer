'use strict';

function stars(bitmap) {
  let image = bitmap.buffer.slice(bitmap.pixelDataStart);

  bitmap.buffer[0x0000007a] = 0x00;
  bitmap.buffer[0x0000007b] = 0xd7;
  bitmap.buffer[0x0000007c] = 0xff;

  const imageArr = [];
  for(let i = 0; i < bitmap.height; i++) {
    imageArr[i] = image.slice(0, 112);
    image = image.slice(112);
  }

  let base =[[15, 15], [30, 100], [85, 95], [108, 100], [6, 106], [100, 7], [117, 15]];
  for (let i in base) {
    for(let j in imageArr) {
      for(let k in imageArr[i]) {
        imageArr[base[i][0]][base[i][1]] = 0;
        imageArr[base[i][0] - 1][base[i][1]] = 0;
        imageArr[base[i][0] - 2][base[i][1]] = 0;
        imageArr[base[i][0] - 3][base[i][1]] = 0;
        imageArr[base[i][0] - 4][base[i][1]] = 0;
        imageArr[base[i][0] - 5][base[i][1]] = 0;
        imageArr[base[i][0] - 6][base[i][1]] = 0;
        
        imageArr[base[i][0] + 1][base[i][1]] = 0;
        imageArr[base[i][0] + 2][base[i][1]] = 0;
        imageArr[base[i][0] + 3][base[i][1]] = 0;
        imageArr[base[i][0] + 4][base[i][1]] = 0;
        imageArr[base[i][0] + 5][base[i][1]] = 0;
        imageArr[base[i][0] + 6][base[i][1]] = 0;
        
        imageArr[base[i][0]][base[i][1] - 1] = 0;
        imageArr[base[i][0]][base[i][1] - 2] = 0;
        imageArr[base[i][0]][base[i][1] - 3] = 0;
        imageArr[base[i][0]][base[i][1] - 4] = 0;
        imageArr[base[i][0]][base[i][1] - 5] = 0;
        imageArr[base[i][0]][base[i][1] - 6] = 0;
        
        imageArr[base[i][0]][base[i][1] + 1] = 0;
        imageArr[base[i][0]][base[i][1] + 2] = 0;
        imageArr[base[i][0]][base[i][1] + 3] = 0;
        imageArr[base[i][0]][base[i][1] + 4] = 0;
        imageArr[base[i][0]][base[i][1] + 5] = 0;
        imageArr[base[i][0]][base[i][1] + 6] = 0;
        
        imageArr[base[i][0] - 1][base[i][1] - 1] = 0;
        imageArr[base[i][0] - 2][base[i][1] - 2] = 0;
        imageArr[base[i][0] - 3][base[i][1] - 3] = 0;
        
        imageArr[base[i][0] + 1][base[i][1] + 1] = 0;
        imageArr[base[i][0] + 2][base[i][1] + 2] = 0;
        imageArr[base[i][0] + 3][base[i][1] + 3] = 0;
        
        imageArr[base[i][0] - 1][base[i][1] + 1] = 0;
        imageArr[base[i][0] - 2][base[i][1] + 2] = 0;
        imageArr[base[i][0] - 3][base[i][1] + 3] = 0;
        
        imageArr[base[i][0] + 1][base[i][1] - 1] = 0;
        imageArr[base[i][0] + 2][base[i][1] - 2] = 0;
        imageArr[base[i][0] + 3][base[i][1] - 3] = 0;
        
      }
    }
  }

  let newImage = Buffer.concat(imageArr);
  bitmap.buffer = Buffer.concat([bitmap.buffer.slice(0, bitmap.pixelDataStart), newImage]);
  
}

module.exports = stars;


// for(let j in imageArr[i]) {
//   if(imageArr[i][j] === 0xff){
//     if(!(i % 10) && j % 7) imageArr[i][j] = 0; 
//     if((j % 7) === 3 && (i%5 === 2 || i%5 === 3 || i%5 === 4)) imageArr[i][j] = 0; 
//   }

// }