function one(first , second , callback) {
  let addResult = first + second;
  return callback(addResult);
} // return 추가해주면 값이나온다 . 선생님의 깊은 의미가있을거라 판단... !! 
const oneCallback = one(1,2, function(result) {
  let callbackResult = result * 2  ;
  return callbackResult; 
});
console.log(oneCallback);