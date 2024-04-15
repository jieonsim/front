// 날짜함수 연습

'use strict';

let str = '';

// 오늘 날짜 : date()
const today = new Date();
const year = today.getFullYear(); // 연도 4자리
str += "오늘의 연도 : " + year + "년<br/>";
const month = today.getMonth() + 1;
// 자바스크립트 월의 시작이 0월이기 때문에 +1을 해줌
str += "오늘의 월 : " + month + "월<br/>";
const date = today.getDate(); // 날짜(일)
str += "오늘의 일 : " + date + "일<br/>";
const hour = today.getHours();
str += "현재 시간 : " + hour + "시<br/>";
const minute = today.getMinutes();
str += "현재 분 : " + minute + "분<br/>";
const second = today.getSeconds();
str += "현재 초 : " + second + "초<br/>";
const yymmdd = year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
str += "오늘 날짜 / 시간 : " + yymmdd + "<br/>";

// let weekStr = new Arrray(); 배열 이 방법으로 해도됨
let weekStr = ['일','월','화','수','목','금','토'];
let weekDay = today.getDay(); // 요일
// str += "<hr/>오늘 요일 : " + weekDay + "<br/>"; 숫자로 나옴. 0이 일요일
str += "<hr/>오늘 요일 : " + weekStr[weekDay] + "요일<br/>";

let lastDate = new Date(2024, 4, 0);
lastDate = lastDate.getDate();
str += "이번 달 마지막 일자 : " + lastDate + "일<br/>";

demo.innerHTML = "<font size='4' color='red'><b>" + str + "</font></b>";
function dateCheck() {
    let year = document.getElementById("yy").value;
    let month = document.getElementById("mm").value;
    
    let strLastDate = new Date(year, month, 0);
    demo.innerHTML = `${year}년 ${month}월의 마지막 일자 : <font size='4' color='red'><b>${strLastDate.getDate()}일</font></b>`;   
}