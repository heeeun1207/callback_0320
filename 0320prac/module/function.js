function one (){
  return  1;
}
function twoString (){
  return "1";
}
function isfalse (){
  return false; 
}
function four(){
  return{
  a : 1,
  bString : "1",
  isC : true
  }
}  // 함수는 호출후 객채 확인 -> 문자인지 정확히 변수이름설정할 것 / 불린이름은 보통 is 를 붙여준다. 
console.dir(four());

