/*
File Name: Lab3
Student Name: Zach Warcola
Description: Lab to use classes in JS to explore inheritance when finding areaa of various polygons.
*/

class convexPoly{

  constructor(points){ //convexPoly parent constructor
    this._points = points;
  }

  get area(){ //getter to get area given array of points
      return this.findArea(this._points);
  }

  _heron = function(p1, p2, p3) { //herons formula helper function that gives area of triangle using 3 side lengths
    let a = Math.sqrt((p2.x-p1.x)*(p2.x-p1.x) + (p2.y-p1.y)*(p2.y-p1.y));
    let b = Math.sqrt((p3.x-p2.x)*(p3.x-p2.x) + (p3.y-p2.y)*(p3.y-p2.y));
    let c = Math.sqrt((p3.x-p1.x)*(p3.x-p1.x) + (p3.y-p1.y)*(p3.y-p1.y));
    let s = (a+b+c)/2;

    return Math.sqrt(s*(s-a)*(s-b)*(s-c));
  }

  findArea = function(areaPoints){ //compute area of convexPoly here
    let a = 0;

    for(let i = 0; i < areaPoints.length - 2; i++){ //divide convex polygon in to triangles and compute area
      a = a + this._heron(areaPoints[0], areaPoints[i + 1], areaPoints[i + 2]);
    }
    return a; //a will be the area of the given shape
  }
}

class regularPoly extends convexPoly{

  constructor(center, numSides, radius){ //define regularPoly constructor
    let buildArray = function(center, numSides, radius){ //function to build an array to in the format of [{x:x1, y:y1} ...] to pass to parent function
        let theta1 = 0;
        let theta2 = 2*(Math.PI);
        let x1 = 0;
        let y1 = 0;
        let array = [];
        //use .push() to add to end of an array
        for(let i = theta1; i < theta2; i = i + theta2/numSides){ //theta goes from 0 to 2*pi in increments of 2pi/numSides
          x1 = (radius * Math.cos(i) + center.x); //create x coord
          y1 = (radius * Math.sin(i) + center.y); //create y coord
          array.push({x:x1, y:y1}); //add these coords to array in proper format
        }

        return array; //once array is built, pass to super function to calculate area
    }

    super(buildArray(center, numSides, radius)); //assign properly conditioned data to builtArray, then call super to send it to the constructor of the parent class
  }
}


let customPoly = new convexPoly( [{x:0, y:0},{x:1, y:1},{x:2, y:2},{x:3, y:1},{x:4, y:0}, {x:3, y:-1}, {x:2, y:-2}] ); //custom convexPoly area: 8
console.log(`Custom Polygon area (a convexPoly): ${customPoly.area}`);

let customRegular = new regularPoly({x:0, y:0}, 8, 8); //custom regularPoly area: 181.01933598375615
console.log(`customRegular area (a regularPoly): ${customRegular.area}`);

let s1 = new regularPoly( {x:50, y:50}, 4, 50*Math.sqrt(2)); //given regularPoly area: 10000
console.log(`Square1 area (a regularPoly): ${s1.area}`);

let s2 = new convexPoly( [{x:0, y:0},{x:0, y:100},{x:100, y:100},{x:100, y:0}] ); //given convexPoly area: 10000
console.log(`Square2 area (another convexPoly): ${s2.area}`);
