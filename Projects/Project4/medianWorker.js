/*
File Name: medianWorker.js
Student Name: Zach Warcola
Description: Web Worker providing image processing functionality
*/

self.onmessage = function(workerObj) {
    // Start time
    let start = Date.now();

    let newArr = median(workerObj.data.imageData.data, workerObj.data.x, workerObj.data.imageData.height); //calculate new imageData

    workerObj.data.imageData.data.set(newArr); //replace old imageData with new refined data

    // Calculate and add elapsed timepytho
    let elapsed = Date.now() - start;

    // Post results
    self.postMessage({imageData: workerObj.data.imageData, x: workerObj.data.x, y: workerObj.data.y, stripHeight: workerObj.data.stripHeight, time: elapsed});
};

// Given median function to refine imageData
// Apply the color median filter to the ImageData and replace data.
// @param {Uint8ClampedArray} arr  array holding image data
// @param {number}            w    Width of image to process
// @param {number}            h    Height of image to process
function median(arr, w, h) {
    let r, c, rr, cc, i, j, k;

    // Create output array
    let arr2 = new Uint8ClampedArray( new ArrayBuffer(4*w*h) );

    // Loop over all pixels
    for (r=1; r<h-1; r++) {
        for (c=1; c<w-1; c++) {

            let ared = [];
            let agrn = [];
            let ablu = [];

            for (i=-1; i<2; i++) {
                rr = r + i;
                for (j=-1; j<2; j++) {
                    cc = c + j;

                    // Push channel values to three color arrays
                    k  = 4*(rr*w + cc);
                    ared.push( arr[k] );
                    agrn.push( arr[k+1] );
                    ablu.push( arr[k+2] );
                }
            }

            // Order pixel values
            ared.sort();
            agrn.sort();
            ablu.sort();

            // Reset all values to the median
            k  = 4*(r*w + c);
            arr2[k]   = ared[4];
            arr2[k+1] = agrn[4];
            arr2[k+2] = ablu[4];

            // Set alpha to a fixed value of 255
            arr2[k+3] = 255;
        }
    }

    return arr2;
}
