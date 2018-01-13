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

let x = distanceTravelledInFeet(origin, destination)

function calculatesFarePrice (origin, destination) {
  switch (distanceTravelledInFeet(origin, destination)) {
    case x < 400 :
      return 0;
    case 400 <= x < 2000
      return x * 0.02;
    default:
      return x * 25;
  }
}
