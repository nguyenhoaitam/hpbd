const yourDate = new Date("2019-03-30T00:00:00"),
music = ['hpbd', 'hpbd2', 'hpbd3', 'hpbd4', 'hpbd5', 'hpbd6'];

document.addEventListener('DOMContentLoaded', function(){
      var rootTime = document.querySelector("time");

      // document.querySelector("anni").textContent = `${(yourDate.getDate()>9)?yourDate.getDate():"0"+yourDate.getDate()}-${(yourDate.getMonth()>8)?(yourDate.getMonth()+1):"0"+(yourDate.getMonth()+1)}-${yourDate.getFullYear()}`;
      
      document.querySelector("date").textContent = Math.floor( Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24)+" DAYS TOGETHER";

      function olock() {
            var today = new Date(),
            hrs = (Math.floor( Math.floor((today - yourDate) / 1000) / 60 / 60)) % 24,
            min = (Math.floor( Math.floor((today - yourDate) / 1000) / 60)) % 60,
            sec =  Math.floor((today - yourDate) / 1000) % 60;
            rootTime.textContent = `${(hrs>9)?hrs:"0"+hrs}:${(min>9)?min:"0"+min}:${(sec>9)?sec:"0"+sec}`;
      } olock();
      var timer = setInterval(function(){olock()}, 1000);
      document.querySelector("audio").setAttribute("src", `music/${music[Math.floor(Math.random()*music.length)]}.mp3`);

      document.getElementsByTagName("body")[0].insertAdjacentHTML(
            "beforeend",
            "<div id='mask'></div>"
      );

}, false);

var btn = document.getElementById("btn");
var box = document.getElementById("box");

btn.addEventListener("click", function() {
      box.style.display = 'block';

});

document.getElementById("close-box0").onclick = function() {
      box.style.display = 'none';
}




var btn2 = document.getElementById("btn3");
var box2 = document.getElementById("box2");

btn2.addEventListener("click", function() {
      box2.style.display = 'block';

});

var close2 = document.getElementById("close-box2");
close2.addEventListener("click", function() {
      box2.style.display = 'none';
});