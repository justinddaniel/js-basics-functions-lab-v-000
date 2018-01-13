// Code your solution in this file!
function distanceFromHqInBlocks (blocks) {
  return Math.abs(blocks - 42)
}

function distanceFromHqInFeet (blocks) {
   return distanceFromHqInBlocks (blocks) * 264
}

function distanceTravelledInFeet (origin, destination) {
  return Math.abs(origin - destination) * 264
}

function calculatesFarePrice (origin, destination) {
  
  switch (let x = distanceTravelledInFeet(origin, destination)) {
    case x < 400 :
      return 0;
    case (x >= 400 && x <= 2000) :
      return x * 0.02;
    case (x > 2000 && x <= 2500) :
      return x * 25;
    case x > 2500 :
      return 'cannot travel that far';
  }
}
