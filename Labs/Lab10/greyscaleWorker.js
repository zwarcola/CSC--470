/*
File Name: greyscaleWorker.js
Student Name: Zach Warcola
Description: Web Worker providing image -> greyScale processing 
*/

self.onmessage = function(imageData){

  let greyData = function(imageData){
    let grayScale = 0;

    for(let i = 0; i < imageData.data.data.length; i += 4){ //loop to adjust colors to grey scale
      greyScale = (imageData.data.data[i] * 0.299) + (imageData.data.data[i + 1] * 0.587) + (imageData.data.data[i + 2] * 0.114);
      imageData.data.data[i] = greyScale;
      imageData.data.data[i + 1] = greyScale;
      imageData.data.data[i + 2] = greyScale;
    }

    return imageData.data; //return newly formatted imageData
  }

  self.postMessage(greyData(imageData)); //call greyData function and send over processed image data
}
