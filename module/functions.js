function one (){
  return 1 ;

}
function twoReturnString (){ // 문자인걸 이름에 알려준다 . 
  return "1";
}
// 두가지 차이는?  숫자와 문자
// two() === "1"; // true // 이 코드를 열어보기전에는 two 가 문자인것을 모르니 표시해두기 

function isthree (){
  return true;
}
// three === boolean  => 타입일때 함수일때 is 를 붙여준다 ! 암묵적인 룰  
function four(){
  return {
    a: 1,
    b: "2",
    c: true
  }
}
// four 함수는 무저건 객체 ! 호출하기전 = 함수 , 호출 후 = 객체 
// return 값만 보면 빠르게 무슨 형태인지 알 수 있다  
// return 만 생각해라 , 거의 대부분의 함수를 쓸 수 있다.

function five(){
  let a = 1+1 ;
}
// return 은 없고 , a = 값만 담은 형태 
// five 함수를 호출하면  1+1 행위만 하고 끝난다 .
// return VOID  실행만 하는 함수 = return 을 필요로 하지않는 동작만 하는함수
// 대표적인 예 ) for 문 