'use strict';

// ////Constructor of Products
////Assigns name of product and image file 
function Product(name, path) {

  this.name = name;
  this.path = path;

}

//// array to put image paths in to choose from them randomly
var imagePaths = [];
imagePaths[0] = 'img/bag.jpg';
imagePaths[1] = 'img/banana.jpg';
imagePaths[2] = 'img/bathroom.jpg';
imagePaths[3] = 'img/boots.jpg';
imagePaths[4] = 'img/breakfast.jpg';
imagePaths[5] = 'img/bubblegum.jpg';
imagePaths[6] = 'img/chair.jpg';
imagePaths[7] = 'img/cthulhu.jpg';
imagePaths[8] = 'img/dog-duck.jpg';
imagePaths[9] = 'img/dragon.jpg';
imagePaths[10] = 'img/pen.jpg';
imagePaths[11] = 'img/pet-sweep.jpg';
imagePaths[12] = 'img/scissors.jpg';
imagePaths[13] = 'img/shark.jpg';
imagePaths[14] = 'img/sweep.png';
imagePaths[15] = 'img/tauntaun.jpg';
imagePaths[16] = 'img/unicorn.jpg';
imagePaths[17] = 'img/usb.gif';
imagePaths[18] = 'img/water-can.jpg';
imagePaths[19] = 'img/wine-glass.jpg';

var display = document.getElementById('display');

for (var y = 0; y < 3; y++){
  var imageHolder = document.createElement('img');
  var rand = Math.ceil(Math.random() * imagePaths.length);
  imageHolder.src = imagePaths[rand];
  display.appendChild(imageHolder);
  imageHolder.style.height = '15%';
  imageHolder.style.width = '15%';
  imageHolder.style.marginRight = '4%';
  imageHolder.style.textAlign = 'center';

}

