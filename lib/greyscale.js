'use strict';

/**
 * Sample Transformer (greyscale)
 * Would be called by Bitmap.transform('greyscale')
 * Pro Tip: Use "pass by reference" to alter the bitmap's buffer in place so you don't have to pass it around ...
 * @param bmp
 */
const transformGreyscale = (bmp) => {

  console.log('Transforming bitmap into greyscale', bmp);
  // this.bpp = buffer.readInt16LE(28);
  
  console.log(bmp.buffer.slice(28));
  // console.log(bmp.buffer.writeInt16LE(1, 28));
  bmp.buffer[28] = 8;
  console.log(bmp.buffer.slice(28));


};

module.exports = transformGreyscale;