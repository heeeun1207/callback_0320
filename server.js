// const http = require  // 노노
import http from 'http' ;
console.dir(http); // 찍어서 확인해야함 creatServer 암기하지 말 것 . //터미널 객채를 확인할것 
const server = http.createServer(function(request, response){
  // const server = http.createServer(function(a, b){
  // 단어는 다르지만 콜백 원리와 같다 . request는  뭔가를 담고있다 .
  // console.log(a,b)
  let body ="";
  body = body + "<!DOCTYPE html>";
  body = body + "<html>";
  body = body + "<head>";
  body = body + "<title>Node.js</titel>";
  body = body + "</head>";
  body = body + "<body>";
  body = body + "<h1> Hello World </h1>";
  body = body + "</body>";
  body = body + "</html>";

  response.statusCode =200 ;
  response.setHeader('Content-Type','text/plain');
  response.end('Hello World');
});
console.log(server);

// 매서드 : 객체 안에 들어있는 함수 아용하기 

