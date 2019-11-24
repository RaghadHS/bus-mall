'use strict';
//// array to put image paths in to choose from them randomly
  
var imagePaths = ['img/bag.jpg',
  'img/banana.jpg',
  'img/bathroom.jpg',
  'img/boots.jpg',
  'img/breakfast.jpg',
  'img/bubblegum.jpg',
  'img/chair.jpg',
  'img/cthulhu.jpg',
  'img/dog-duck.jpg',
  'img/dragon.jpg',
  'img/pen.jpg',
  'img/pet-sweep.jpg',
  'img/scissors.jpg',
  'img/shark.jpg',
  'img/sweep.png',
  'img/tauntaun.jpg',
  'img/unicorn.jpg',
  'img/usb.gif',
  'img/water-can.jpg',
  'img/wine-glass.jpg'];

// ////Constructor of Products
////Assigns name of product and image file 
function Product() {

  var name;
  var path;

  var numClicked = 0;
  ///////FIX ADDING NUMBER TO numClicked

  this.displayThreeItems();
  this.eventListen();
}


Product.prototype.displayThreeItems = function(){

  ////Generating 3 random numbers to choose images from array
  var right = Math.ceil(Math.random() * imagePaths.length);
  var middle = Math.ceil(Math.random() * imagePaths.length);
  var left = Math.ceil(Math.random() * imagePaths.length);

  while( right === left || right === middle || left === middle)
  {
    right = Math.ceil(Math.random() * imagePaths.length);
    middle = Math.ceil(Math.random() * imagePaths.length);
    left = Math.ceil(Math.random() * imagePaths.length);

  }

  var rightImg = document.getElementById('right');
  rightImg.setAttribute('src', imagePaths[right]);

  var middleImg = document.getElementById('middle');
  middleImg.setAttribute('src', imagePaths[middle]);

  var leftImg = document.getElementById('left');
  leftImg.setAttribute('src', imagePaths[left]);


  
};


Product.prototype.eventListen = function()
{


};


var trial = new Product();