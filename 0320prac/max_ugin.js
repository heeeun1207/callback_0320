
const exampleArray =[5,2,7,3,9,324,66,43];
//max값 구하기
function maxValue(array, callback){
  let max=array[0];
  for(let i=1; i<array.length;i++){ //1부터 array.length이므로 7까지
    if(array[i]>max){ 
      max=array[i];
      console.log("max",max);
    }
  }
  return callback(max);
}

const maxValueExample=maxValue(exampleArray,function(result){
  return result*1;
});
// console.log(maxValueExample);