////SEPARATED THE LISTENER FUNCTION INTO 
////THREE DIFFERENT FUNCTIONS AND REMOVED
////THE CREATION OF NEW PRODUCT

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

/////////Start listening for clicks 
var leftListener = document.getElementById('left');
var middleListener = document.getElementById('middle');
var rightListener = document.getElementById('right');


/////// Array for Number of Views
  
var numViews = [];
  
for (var num = 0 ; num < names.length ; num++)
{
  numViews[num] = 0;
}


////////Array for number of times clicked
  
var numClicks = [];
  
for (var num2 = 0 ; num2 < names.length ; num2++)
{
  numClicks[num2] = 0;

}

// ////Constructor of Products
////Assigns name of product and image file
function Product(names, path) {

  this.productName = names;
  this.productPath = path;


}

///////ARRAY THAT HAS NAME AND PATH OF PRODUCTS
var allProducts = [];
for (var a = 0; a < imagePaths.length; a++){
  allProducts[a] = new Product(imagePaths[a], names[a]);
}


/////Variables to put image path in
var right;
var middle;
var left;

/////Function to change the images
function displayThreeItems(){
  imgCount += 1;

  right = getRandomNumber(0,imagePaths.length - 1);
  middle = getRandomNumber(0,imagePaths.length - 1);
  left = getRandomNumber(0,imagePaths.length - 1);
  
  while( right === left || right === middle || left === middle)
  {
    
    right = Math.ceil(Math.random() * imagePaths.length - 1);
    middle = Math.ceil(Math.random() * imagePaths.length - 1);
    left = Math.ceil(Math.random() * imagePaths.length - 1);
    
    
  }
  
  numViews[right]++;
  numViews[middle]++;
  numViews[left]++;


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

displayThreeItems();


///////Event Listener for the Right Image)
rightListener.addEventListener('click', rListening);

function rListening(event){
  numClicks[right]++;
  displayThreeItems();
}
rListening();

///////Event Listener for the Middle Image
middleListener.addEventListener('click', mListening);

function mListening(event){
  numClicks[middle]++;
  displayThreeItems();
}
mListening();

////////Event Listener for the Left Image
leftListener.addEventListener('click', lListening);

function lListening(event){
  numClicks[left]++;
  displayThreeItems();
    
}
lListening();

///////Function to get random numbers
function getRandomNumber(min,max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function removeListener(){
  alert('removed');
}
////////////End of Functions////////////

if (imgCount > 5) {
  console.log(imgCount);

  rightListener.removeEventListener('click', removeListener);
  middleListener.removeEventListener('click', removeListener);
  leftListener.removeEventListener('click', removeListener);
}