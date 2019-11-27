'use strict';
//////Counter to count the numbber of time the imgaes are displayed
var imgCount = 0;

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

//////array for names of images
var names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast',
  'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 
  'scissors', 'shark' , 'sweep', 'tauntaun', 'unicorn','usb', 'water-can', 'wine-glass'];

////////Try to get initial images
var right = Math.ceil(Math.random() * imagePaths.length - 1);
var middle = Math.ceil(Math.random() * imagePaths.length - 1);
var left = Math.ceil(Math.random() * imagePaths.length - 1);
  
// ////Constructor of Products
////Assigns name of product and image file
function Product(names, path) {

  this.productName = names;
  this.productPath = path;

  this.views ++;
  this.numClicked ++;

  // this.eventListen();
}



/////Function to change the images
function displayThreeItems(){

  right = getRandomNumber(0,imagePaths.length - 1);
  middle = getRandomNumber(0,imagePaths.length - 1);
  left = getRandomNumber(0,imagePaths.length - 1);

  while( right === left || right === middle || left === middle)
  {
  
    right = Math.ceil(Math.random() * imagePaths.length - 1);
    middle = Math.ceil(Math.random() * imagePaths.length - 1);
    left = Math.ceil(Math.random() * imagePaths.length - 1);

  }

  var rightImg = document.getElementById('right');
  rightImg.setAttribute('src', imagePaths[right]);
  rightImg.setAttribute('alt', names[right]);

  var middleImg = document.getElementById('middle');
  middleImg.setAttribute('src', imagePaths[middle]);
  middleImg.setAttribute('alt', names[middle]);

  var leftImg = document.getElementById('left');
  leftImg.setAttribute('src', imagePaths[left]);
  leftImg.setAttribute('alt', imagePaths[left]);
};


// displayThreeItems();

function getRandomNumber(min,max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}




/////////Start listening for clicks 
var leftListener = document.getElementById('left');
var middleListener = document.getElementById('middle');
var rightListener = document.getElementById('right');

function clicking (){

  
  ///////Event Listener for the Right Image
  rightListener.addEventListener('click', function(){
    new Product(names[right], imagePaths[right]);
    displayThreeItems();
  
  });


  ///////Event Listener for the Middle Image
  middleListener.addEventListener('click', function(){

    new Product(names[middle], imagePaths[middle]);
    displayThreeItems();

  });

  ////////Event Listener for the Left Image
  leftListener.addEventListener('click', function(){

    new Product(names[left], imagePaths[left]);
    displayThreeItems();

  });
}
 
for (var rounds = 0; rounds < 5; rounds++){
  clicking();
}