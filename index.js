function distanceFromHqInBlocks(currentBlock) {
  let result
  result = Math.abs(currentBlock - 42)
  return result
}

function distanceFromHqInFeet(currentBlock) {
  let result
  result = distanceFromHqInBlocks(currentBlock) * 264
  return result
}

function distanceTravelledInFeet(start, finish) {
  let result
  result = Math.abs(finish - start) * 264
  return result
}

function calculatesFarePrice(start, finish) {
  let result = distanceTravelledInFeet(start, finish)
  let price
  switch (true) {
    case result < 400:
    price = 0
    break
    case result > 400 && result < 2000:
    price = (result - 400) * 0.02
    break
    case result > 2000 && result < 2500:
    price = 25
    break
    default:
    price = 'cannot travel that far'
  }
  return price
}
