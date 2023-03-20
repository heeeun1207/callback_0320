const exampleArray =[5,2,7,3,9,324,66,43];
// console.log(exampleArray[0]);

function minValue(array, callback) {
  let min = array[0]; // 5
  for (let i = 1; i < array.length; i++){  
    //min = 5 임.    
    // 배열의 번호가 1 2 3 4 5 6 7  하나씩 늘어난다  = > 0 번을 제외하고 , 1~ 7까지 
    // 배열의 길이보다 i가 작을때까지만 반복문이 진행된다.
    // 배열의 i 값이 만일 배열의 min[0] 보다 작다면 ,  min의 값을 되돌려받아라 . 
    // 5라고 치면 2, 3  이있음 . 앞에서 true 되면 중단돼서 2값의 *2 는 결과 =4 ??
    // 선생님 유진이 질문  : 콘솔로 확인해보면 2가 뜰것임  / 다른 값이 나오도록 추가연구해봐라 . 
    if (array[i] < min) {
      min = array[i];
      console.log(min); // 2값 출력 .
    } else{
      console.dir("아닌것"); // 아닌것 배열 6개가 나옴 
    }
  }
  return callback(min);   // 예문1과 똑같이 return 값을 입력해주면 값이 나온다 // => 4 
}
const minValueExample = minValue(exampleArray,function(result){
  return result *2 
});
// console.log(minValueExample);



