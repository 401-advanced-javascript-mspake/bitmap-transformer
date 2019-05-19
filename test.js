'use strict';

const fs = require('fs');

/**
 * Bitmap -- receives a file name, used in the transformer to note the new buffer
 * @param filePath
 * @constructor
 */
function Bitmap(filePath) {
  this.file = filePath;
}

/**
 * Parser -- accepts a buffer and will parse through it, according to the specification, creating object properties for each segment of the file
 * @param buffer
 */
Bitmap.prototype.parse = function(buffer) {
  this.buffer = buffer;
  this.type = buffer.toString('utf-8', 0, 2);
  this.fileSize = buffer.readInt32LE(2);
  this.pixelDataStart = buffer.readInt16LE(10);
  this.width = buffer.readInt16LE(18);
  this.height = buffer.readInt16LE(22);
  this.bpp = buffer.readInt16LE(28);
  this.imageSize = buffer.readInt16LE(34);



  //... and so on
};

// TODO: Explain how this works (in your README)
const [file] = process.argv.slice(2);
console.log(file);

let bitmap = new Bitmap(file);

fs.readFile(file, (err, buffer) => {

  if (err) {
    throw err;
  }

  bitmap.parse(buffer);
  console.log(bitmap);
  console.log(buffer.readInt32LE(2));
  console.log(buffer.readInt16LE(10));
  console.log(buffer.readInt16LE(18));
  console.log(buffer.readInt16LE(22));
  console.log(buffer.readInt16LE(28));
  console.log(buffer.readInt16LE(34)); //image size
  console.log(buffer.readInt16LE(46)); //colors used
  console.log(buffer.readInt16LE(50)); //important colors
  //54 has something: 42 47 52 73

  console.log(buffer.slice(60));


});