
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

    if(localStorage.getItem("theme") == "oranges"){
		localStorage.setItem("theme", "bubbles");
	}
	else{
		localStorage.setItem("theme", "oranges");

	}

}

if(localStorage.getItem("theme") == "oranges"){
	box1.classList.remove("active");
	box2.classList.remove("active");
	box3.classList.remove("active");
	box4.classList.remove("active");
	box5.classList.remove("active");
	box6.classList.remove("active");
	box7.classList.remove("active");
	box8.classList.remove("active");
	box9.classList.remove("active");
	box10.classList.remove("active");

}
else if(localStorage.getItem("theme") == "bubbles"){
	box1.classList.add("active");
	box2.classList.add("active");
	box3.classList.add("active");
	box4.classList.add("active");
	box5.classList.add("active");
	box6.classList.add("active");
	box7.classList.add("active");
	box8.classList.add("active");
	box9.classList.add("active");
	box10.classList.add("active");

}
else{
	localStorage.setItem("theme", "oranges");
}


const dragItem = document.querySelectorAll('.img_orange');
