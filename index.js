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