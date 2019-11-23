'use strict';

////Constructor of Products
////Assigns name of product and image file 
function Product(name, path) {

  this.name = name;
  this.path = path;

}

//// array to put image paths in to choose from them randomly
var imagePath = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg',
  'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg',
  'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 
  'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg',
  'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png',
  'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 
  'img/water-can.jpg', 'img/wine-glass.jpg'];

var display = document.getElementById('display');
for (var i = 0; i < 20; i++)
{
  document.getElementById('display').appendChild( imagePath[i]);
}