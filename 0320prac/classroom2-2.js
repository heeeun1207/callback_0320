const exampleArray =[5,2,7,3,9,324,66,43];
//0번~ 7번 
function minValue(array, callback) {
  let min = array[0]; // 5
  for (let i = 2; i < array.length; i++){  // 7 
    if (array[i] < min) {
      min = array[i];
      console.log("min "+min);  // 7~43 까지  최소값 = 3 
    } else{
      console.dir(i+"번째"); // 아닌것 : 7 (2번째) 부터~
    }
  }
  return callback(min);   
}
const minValueExample = minValue(exampleArray,function(result){
  console.log(result);
  return result *2 
});
// console.log(minValueExample);
