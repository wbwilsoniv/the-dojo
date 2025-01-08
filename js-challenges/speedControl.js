/*
In John's car the GPS records every s seconds the distance travelled from an origin (distances are measured in an arbitrary but consistent unit). For example, below is part of a record with s = 15:

x = [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]
The sections are:

0.0-0.19, 0.19-0.5, 0.5-0.75, 0.75-1.0, 1.0-1.25, 1.25-1.50, 1.5-1.75, 1.75-2.0, 2.0-2.25
We can calculate John's average hourly speed on every section and we get:

[45.6, 74.4, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0]
Given s and x the task is to return as an integer the *floor* of the maximum average speed per hour obtained on the sections of x. If x length is less than or equal to 1 return 0 since the car didn't move.

Example:
with the above data your function gps(s, x)should return 74

Note
With floats it can happen that results depends on the operations order. To calculate hourly speed you can use:

 (3600 * delta_distance) / s.
*/

// Refactored
const gps = (s, x) => {
    if (x.length<=1) {
      return 0;
    }    
    let output = [];
    for (let i = 0; i < x.length-1; i++) { 
      output.push((x[i+1]-x[i])*3600/s);
    }   
    return Math.max(...output);
  }


// Passes tests
function gps(s, x) { 
    let maxSpeed = 0;
    if(x.length <= 1){ return maxSpeed};
    let speeds = [];
    for(let i=1; i < x.length; i++){
      speeds.push(Math.floor((3600 * (x[i] - x[i-1])) / s));
    }
    const sortSpeed = speeds.sort((a,b) => (b - a));
    if(sortSpeed.length >= 1){
      maxSpeed = sortSpeed[0];
    }
    return maxSpeed
  }

// Did not work
function gps(s, x) {
    if(x.length <= 1){ return 0};
    let maxSpeed = 0;
    let speeds = [];
    let distance = [];
    for(let i=1; i < x.length; i++){
      speeds.push(Math.floor((3600 * (x[i] - x[i-1])) / s));
      //console.log((3600 * (x[i+1]- x[i])) / s);
     // distance.push(Math.floor((3600 * (x[i+1] - x[i]))/ s));
      
    }
    console.log(speeds)
    for(let i=0; i <= speeds.length; i++){
      if(speeds[i] >= speeds[i-1]){
        maxSpeed = speeds[i]
      }
      console.log(maxSpeed);
    }
    return maxSpeed
  }

