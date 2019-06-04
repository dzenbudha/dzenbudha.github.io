var buttons = document.querySelectorAll('.header a')
var b1 = buttons[0];
var b2 = buttons[1];
var b3 = buttons[2];
var b4 = buttons[3];


b1.onclick = function(buttons){
	this.classList.add('itemMenuClicked')
	b2.classList.remove('itemMenuClicked');
	b3.classList.remove('itemMenuClicked');
	b4.classList.remove('itemMenuClicked');
}
b2.onclick = function(buttons){
	b1.classList.remove('itemMenuClicked')
	this.classList.add('itemMenuClicked');
	b3.classList.remove('itemMenuClicked');
	b4.classList.remove('itemMenuClicked');
}
b3.onclick = function(buttons){
	b1.classList.remove('itemMenuClicked');
	b2.classList.remove('itemMenuClicked');
	this.classList.add('itemMenuClicked');
	b4.classList.remove('itemMenuClicked');
}
b4.onclick = function(buttons){
	b1.classList.remove('itemMenuClicked');
	b2.classList.remove('itemMenuClicked');
	b3.classList.remove('itemMenuClicked');
	this.classList.add('itemMenuClicked');
}

// const function(){
// forEach(function(){
// 	buttons.classList.remove('itemMenuClicked')
// })
// 	this.classList.add('itemMenuClicked');

// }