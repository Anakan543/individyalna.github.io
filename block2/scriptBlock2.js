let name = prompt("Введіть ваш нікнейм:");
console.log(name);
if(!name){
  alert("Ім'я було задано некоретно або було відсутнє, ваш нікнейм User");
}else{
   document.getElementById('name').textContent = name;
}
let value1 = 0;
let value2 = 0;
let check = true;
  let numbers1 = 0;
	let numbers2 = 0;
	let divNumbers1 = document.getElementById("numbers1");
	let divNumbers2 = document.getElementById('numbers2');
	let pointWin1 = document.getElementById("pointWin1");
	let pointWin2 = document.getElementById('pointWin2');

	function reset() {
		value1 = 0;
	  value2 = 0;
	  check = true;
	  pointWin1.textContent = value1;
	  pointWin2.textContent = value2;

	  $("#button").on('click', button);
	}
	function button() {
		divNumbers1.textContent= Math.floor(Math.random() * 11);
		divNumbers2.textContent= Math.floor(Math.random() * 11);

		if (divNumbers1.textContent > divNumbers2.textContent) {
    value1++;
  } else if (divNumbers1.textContent < divNumbers2.textContent) {
    value2++;
  }

  pointWin1.textContent = value1;
  pointWin2.textContent = value2;

  if(value1 > 2){
    alert("Вітаю, ви перемогли! Держіть цукерку");
    check = false;
    $("#button").off('click');
  } else if(value2 > 2){
    alert("На жаль, ви не перемогли :(");
    check = false;
    $("#button").off('click');
  }

	}
	$("#reset").on('click', reset);
	$("#button").on('click', button);
