// 'use strict';
// //// array to put image paths in to choose from them randomly
  
// var imagePaths = ['img/bag.jpg',
//   'img/banana.jpg',
//   'img/bathroom.jpg',
//   'img/boots.jpg',
//   'img/breakfast.jpg',
//   'img/bubblegum.jpg',
//   'img/chair.jpg',
//   'img/cthulhu.jpg',
//   'img/dog-duck.jpg',
//   'img/dragon.jpg',
//   'img/pen.jpg',
//   'img/pet-sweep.jpg',
//   'img/scissors.jpg',
//   'img/shark.jpg',
//   'img/sweep.png',
//   'img/tauntaun.jpg',
//   'img/unicorn.jpg',
//   'img/usb.gif',
//   'img/water-can.jpg',
//   'img/wine-glass.jpg'];

// var display = document.getElementById('display');

// // ////Constructor of Products
// ////Assigns name of product and image file 
// function Product() {

//   var name;
//   var path;

//   var numClicked = 0;
//   ///////FIX ADDING NUMBER TO numClicked

//   this.displayThreeItems();
//   this.eventListen();
// }



// Product.prototype.displayThreeItems = function(){
//   // var display = document.getElementById('display');
//   var repeatArray = [];
//   for (var y = 0; y < 3; y++){
//     var imageHolder = document.createElement('img');
//     var rand = Math.ceil(Math.random() * imagePaths.length);
//     imageHolder.src = imagePaths[rand];
//     this.path = imagePaths[rand];
//     display.appendChild(imageHolder);
//     imageHolder.setAttribute('id', 'productIMG');
//     repeatArray[y] = this.path;
//     if (y === 1)
//     {
//       if (repeatArray[1] === repeatArray[0]){
//         rand = Math.ceil(Math.random() * imagePaths.length);
//         imageHolder.src = imagePaths[rand];
//         this.path = imagePaths[rand];
//         display.appendChild(imageHolder);
//         imageHolder.setAttribute('id', 'productIMG');
//       }

//     }

//     if (y === 2)
//     {
//       if (repeatArray[2] === repeatArray[0]){
//         rand = Math.ceil(Math.random() * imagePaths.length);
//         imageHolder.src = imagePaths[rand];
//         this.path = imagePaths[rand];
//         display.appendChild(imageHolder);
//         imageHolder.setAttribute('id', 'productIMG');
//       }

//       if (repeatArray[2] === repeatArray[1]){
//         rand = Math.ceil(Math.random() * imagePaths.length);
//         imageHolder.src = imagePaths[rand];
//         this.path = imagePaths[rand];
//         display.appendChild(imageHolder);
//         imageHolder.setAttribute('id', 'productIMG');
//       }
//     }

//   }
// };


// // ///////FUNCTION THAT LISTENS TO CLICK
// // Product.prototype.eventListen = function(){

// //   var eventP = document.getElementById('display');
// //   eventP.addEventListener("click", function () { 
    
// //     var display = document.getElementById('display');
// //     var repeatArray = [];
// //     for (var y = 0; y < 3; y++){
// //       var imageHolder = document.createElement('img');
// //       var rand = Math.ceil(Math.random() * imagePaths.length);
// //       imageHolder.src = imagePaths[rand];
// //       this.path = imagePaths[rand];
// //       display.replaceChild(imageHolder);
// //       imageHolder.setAttribute('id', 'productIMG');
// //       repeatArray[y] = this.path;
// //       if (y === 1)
// //       {
// //         if (repeatArray[1] === repeatArray[0]){
// //           rand = Math.ceil(Math.random() * imagePaths.length);
// //           imageHolder.src = imagePaths[rand];
// //           this.path = imagePaths[rand];
// //           display.replaceChild(imageHolder);
// //           imageHolder.setAttribute('id', 'productIMG');
// //         }

// //       }

// //       if (y === 2)
// //       {
// //         if (repeatArray[2] === repeatArray[0]){
// //           rand = Math.ceil(Math.random() * imagePaths.length);
// //           imageHolder.src = imagePaths[rand];
// //           this.path = imagePaths[rand];
// //           display.replaceChild(imageHolder);
// //           imageHolder.setAttribute('id', 'productIMG');
// //         }

// //         if (repeatArray[2] === repeatArray[1]){
// //           rand = Math.ceil(Math.random() * imagePaths.length);
// //           imageHolder.src = imagePaths[rand];
// //           this.path = imagePaths[rand];
// //           display.replaceChild(imageHolder);
// //           imageHolder.setAttribute('id', 'productIMG');
// //         }
// //       }

// //     }
// //   }, false);
  
// // };
// var productt = new Product();