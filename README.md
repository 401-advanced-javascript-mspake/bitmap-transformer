![CF](http://i.imgur.com/7v5ASc8.png) LAB  
=================================================  
  
## Bitmap Transformer  
  
### Author: Morgana Spake  
  
### Links and Resources
* [submission PR](https://github.com/401-advanced-javascript-mspake/bitmap-transformer/pull/2)  
* [travis](https://www.travis-ci.com/401-advanced-javascript-mspake/bitmap-transformer)  
  
### Modules  
#### `stars.js`, `upsidedown.js`  
##### Exported Values and Methods  
  
###### `upsidedown(bitmap) -> modifies the passed in object in place`  
Takes the existing bmp image and flips it upsidedown.  
  
###### `stars(bitmap) -> modifies the passed in object in place`  
Adds stars to the existing bitmap in pre-determined locations.  
  
### Setup
  
#### Running the app
* `npm install`
* `node index.js './assets/baldy-bmp' <operation>` (stars or upsidedown)  
