function oneThroughTwenty(n) {
  let result = []
  for(let i = 1; i <= n; i++){
    result.push(i)
  }
  return result
}
console.log(oneThroughTwenty(20))
//call function oneThroughTwenty

function evensToTwenty(n) {
  let result = []
  for(let i = 0; i <= n; i++){
    if(i % 2 === 0){
      result.push(i)
    }
  }
  return result
}
console.log(evensToTwenty(20))
//call function evensToTwenty

function oddsToTwenty(n) {
  let result = []
  for(let i = 0; i <= n; i++){
    if(i % 2 === 1){
      result.push(i)
    }
  }   
  return result
}
console.log(oddsToTwenty(20))

function multiplesOfFive(n) {
  let result = [];
  for(let i = 0; i <= n; i++){
    if(i % 5 === 0){
      result.push(i)
    }
  }
  return result
}
console.log(multiplesOfFive(100))

function squareNumbers(n) {
  let arr = []
  for(let a = 1; a <= n; a++){
    if((a * a) <= n){
      arr.push(a * a)
    }
  }
  return arr
}
console.log(squareNumbers(100))
//call function squareNumbers

function countingBackwards(n) {
  let arr = []
  for(let i = n; i > 0; i--){
    arr.push(i)
  }
  return arr
}
console.log(countingBackwards(20))

function evenNumbersBackwards(n) {
  let arr = []
  for(let i = n; i > 0; i--){
    if(i % 2 === 0){
      arr.push(i)
    }
  }
  return arr
}
console.log(evenNumbersBackwards(20))


function oddNumbersBackwards(n) {
  let arr = []
  for(let i = n; i > 0; i--){
    if(i % 2 === 1){
      arr.push(i)
    }
  }
  return arr
}
console.log(oddNumbersBackwards(20))
//call function oddNumbersBackwards

function multiplesOfFiveBackwards(n) {
  let arr = []
  for(let i = n; i > 0; i--){
    if(i % 5 === 0){
      arr.push(i)
    }
  }
  return arr
}
console.log(multiplesOfFiveBackwards(100))

function squareNumbersBackwards(n) {
  let arr = []
  for(let i = n; i > 0; i--){
    if((i * i) <= 100)
    arr.push(i*i)
  }
  return arr
}
console.log(squareNumbersBackwards(10))

