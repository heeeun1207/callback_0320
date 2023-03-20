function six (number, append ){
   return number + append ;
}
function seven(number , append ){
  return number - append ;
}


function eight(number , append, callback ){
  let a = number +1;
  let b = append +2;
  return callback( a, b);
}

//3번째 callback 정해진 형태 : 인자를 전달 받았다. 
console.log(eight(1,2,function(a,b){
  return a+b ;
}))

