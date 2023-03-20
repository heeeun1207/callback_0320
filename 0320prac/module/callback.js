function one (number,append ){
  return number + append
}
console.dir(one);
function two (number,append ){
  return number - append
}

function three (number,append, callback ){
  return callback(number+ append);
}