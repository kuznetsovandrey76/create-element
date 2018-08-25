let main = document.querySelector('#main');
let btn = document.querySelector('#button');
let text = document.querySelector('#text');

var addBlock = function() {
	let div = document.createElement('div');
	div.classList.add((text.value === 'blue' || text.value === 'tomato') ? text.value : 'test');
	div.textContent = 'World';
	main.appendChild(div);
}

btn.addEventListener('click', addBlock);
