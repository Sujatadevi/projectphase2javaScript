// project phase 2 

window.onload = function(){ 
 
let learnerInput = document.getElementById('input');
document.getElementById('plus').onclick = adding;

// creating function
function adding() {
	//using if else statement
	if (learnerInput.value == "") {
		alert("please enter the value");
	} else {
		// creating new elements
		var text = learnerInput.value
		let div = document.createElement('div');
		let para = document.createElement('para');
		let learnerinput = document.createElement('learnerinput');
		let button = document.createElement('button');


		para.textContent = text;
		para.setAttribute('class', 'box');
		button.textContent = 'delete';
		button.setAttribute('class', 'row');

		// appending child elements
		div.appendChild(learnerinput);
		div.appendChild(para);
		div.appendChild(button);


		learnerInput.onclick = (event) => { // adding on click event
			event.target.parentNode.setAttribute('class', 'section');
		};

		// using delete button to delete the tasks
		button.onclick = () => {
			event.target.parentNode.parentNode.removeChild(event.target.parentNode);
		};
		document.getElementById('list').prepend(div);
	}
}
};


	