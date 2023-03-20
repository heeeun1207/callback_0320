import fs from 'fs';    
// file sysyem 를 이렇게 많이쓴다
let name = "heeeun";
// let date = new Date();
// let fileName = date.getFullYear() + name;
             // 2023년을 추출하는것  => 파일이름에 년도를 붙여줌 => 백엔드의 시작 
let year = "2023";
let month = "03";
let day = "20";
let fileName =  year + "-" + month + "-" + day + "-" +name;
fs.writeFileSync("./" + fileName +".txt" , name);  
// writeFileSync 경로 하위로 만들거야 , 이름은 네임으로  <= 변수이름 
// 파일을 동기방식으로 쓰다 . 

