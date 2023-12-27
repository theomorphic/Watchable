const body = document.querySelector('body');
const btn = document.getElementById('orange_btn');

const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');
const box4 = document.getElementById('box4');
const box5 = document.getElementById('box5');
const box6 = document.getElementById('box6');
const box7 = document.getElementById('box7');
const box8 = document.getElementById('box8');
const box9 = document.getElementById('box9');
const box10 = document.getElementById('box10');

btn.onclick = function (){

    box1.classList.toggle('active');
    box2.classList.toggle('active');
    box3.classList.toggle('active');
    box4.classList.toggle('active');
    box5.classList.toggle('active');
    box6.classList.toggle('active');
    box7.classList.toggle('active');
    box8.classList.toggle('active');
    box9.classList.toggle('active');
    box10.classList.toggle('active');

}
