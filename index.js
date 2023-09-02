const frame = document.querySelector(".clock-frame");

const innerFace = document.querySelector(".clock-innerface");
const pointHour = document.querySelector(".pointer-box_h");
const pointMin = document.querySelector(".pointer-box_m");
const pointSec = document.querySelector(".pointer-box_s");
//아날로그 시계
function rotatePointer() {
    const date = Date.now();
    const hour = (date / (1000 * 60 * 60)) % 24 - 3;
    const min = (date / (1000 * 60)) % 60;
    const sec = (date / 1000) % 60;
    const hourDeg = hour * 30;
    const minDeg = min * 6;
    const secDeg = sec * 6;

    pointHour.style.transform = `rotate(${hourDeg}deg)`;
    pointMin.style.transform = `rotate(${minDeg}deg)`;
    pointSec.style.transform = `rotate(${secDeg}deg)`;
}
setInterval(rotatePointer, 0.00001);
// 디지털 시계
function ttime(){
    const tt = new Date();
    const time=document.getElementById('time');
    const th = String(tt.getHours()).padStart(2,"0");
    const tm = String(tt.getMinutes()).padStart(2,"0");
    const ts = String(tt.getSeconds()).padStart(2,"0");
    time.innerHTML = th+" : "+ tm+" : "+ts;
}
setInterval(ttime, 0.00001);


//버거 이벤트
const bgermenu = {
    init: function(){
        this.bger();
    },
    bger: function() {
        let burger = $(".burger");
        let closeburger = $(".close-burger");

        // 버거 클릭
        $(".burger").click(function(){
            $(".burgermenu").addClass("on");
            $(".close-burger").addClass("on");
            $(".shadow").css("display", "block");
        });
        // 쉐도우 클릭
        $(".shadow").click(function(){
            $(".burgermenu").removeClass("on");
            $(".shadow").css("display", "none");
        });
        // 닫기 클릭
        $(".close-burger").click(function(){
            $(".burgermenu").removeClass("on");
            $(".shadow").css("display", "none");
        });
    }
}
$(document).ready(function(){
    bgermenu.init();
})
// jquery, dom, 객체, 자바스크립트 모두 사용