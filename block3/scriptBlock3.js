let nickname = prompt("Введіть ваш нікнейм");

console.log(nickname);
if(!nickname){
  alert("Ім'я було задано некоретно або було відсутнє, ваш нікнейм User");
}else{
   document.getElementById('nickname').textContent = nickname;
 }
 let valueUser = 0;
 let valueComputer = 0;
 let iter = 0;
 let winUser = 0;
 let winComputer = 0;
 const position = [0, -200, -400, -600]

const generate = document.getElementById("button");
generate.addEventListener('click', Generate);

const generateTextUser = document.getElementById('textUser');

const generateTextComputer = document.getElementById('textComputer');

const reset = document.getElementById("reset");
reset.addEventListener('click', Reset);

function Generate() {
  iter++;
  const numbers1 = Math.floor(Math.random()*9) + 1;
  const numbers2 = Math.floor(Math.random()*9) + 1;

  const numbers3 = Math.floor(Math.random()*3);

 const pictureUser = document.getElementById('picture')
  const pictureComputer = document.getElementById('pictureComputer')
  const deck = {
    card1:{
      name:"6",
      value: 6
    },
    card2:{
      name:"7",
      value: 7
    },
    card3:{
      name:"8",
      value: 8
    },
    card4:{
      name:"9",
      value: 9
    },
    card5:{
      name:"10",
      value: 10
    },
    card6:{
      name:"jack",
      value: 2
    },
    card7:{
      name:"king",
      value: 4
    },
    card8:{
      name:"Queen",
      value: 3
    },
    card9:{
      name:"Ace",
      value: 11
    }
  }

  if(numbers1 == 1){
    pictureUser.classList.remove("pictures");
    pictureUser.className = "picture"
    valueUser += deck['card' + numbers1].value;
    pictureUser.style.backgroundPositionX = position[numbers3] + "px";
  }
  if(numbers1 == 2){
    pictureUser.classList.remove("pictures");
    pictureUser.className = "picture7"
    valueUser += deck['card' + numbers1].value;
    pictureUser.style.backgroundPositionX = position[numbers3] + "px";
  }
  if(numbers1 == 3){
    pictureUser.classList.remove("pictures");
    pictureUser.className = "picture8"
    valueUser += deck['card' + numbers1].value;
    pictureUser.style.backgroundPositionX = position[numbers3] + "px";
  }
  if(numbers1 == 4){
    pictureUser.classList.remove("pictures");
    pictureUser.className = "picture9"
    valueUser += deck['card' + numbers1].value;
    pictureUser.style.backgroundPositionX = position[numbers3] + "px";
  }
  if(numbers1 == 5){
    pictureUser.classList.remove("pictures");
    pictureUser.className = "picture10"
    valueUser += deck['card' + numbers1].value;
    pictureUser.style.backgroundPositionX = position[numbers3] + "px";
  }
  if(numbers1 == 6){
    pictureUser.classList.remove("pictures");
    pictureUser.className = "picture11"
    valueUser += deck['card' + numbers1].value;
    pictureUser.style.backgroundPositionX = position[numbers3] + "px";
  }
  if(numbers1 == 7){
    pictureUser.classList.remove("pictures");
    pictureUser.className = "picture12"
    valueUser += deck['card' + numbers1].value;
    pictureUser.style.backgroundPositionX = position[numbers3] + "px";
  }
  if(numbers1 == 8){
    pictureUser.classList.remove("pictures");
    pictureUser.className = "picture13"
    valueUser += deck['card' + numbers1].value;
    pictureUser.style.backgroundPositionX = position[numbers3] + "px";
  }
  if(numbers1 == 9){
    pictureUser.classList.remove("pictures");
    pictureUser.className = "picture14"
    valueUser += deck['card' + numbers1].value;
    pictureUser.style.backgroundPositionX = position[numbers3] + "px";
  }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  if(numbers2 == 1){
    pictureComputer.classList.remove("pictures");
    pictureComputer.className = "picture"
    valueComputer += deck['card' + numbers2].value;
    pictureComputer.style.backgroundPositionX = position[numbers3] + "px";
  }
  if(numbers2 == 2){
    pictureComputer.classList.remove("pictures");
    pictureComputer.className = "picture7"
    valueComputer += deck['card' + numbers2].value;
    pictureComputer.style.backgroundPositionX = position[numbers3] + "px";
  }
  if(numbers2 == 3){
    pictureComputer.classList.remove("pictures");
    pictureComputer.className = "picture8"
    valueComputer += deck['card' + numbers2].value;
    pictureComputer.style.backgroundPositionX = position[numbers3] + "px";
  }
  if(numbers2 == 4){
    pictureComputer.classList.remove("pictures");
    pictureComputer.className = "picture9"
    valueComputer += deck['card' + numbers2].value;
    pictureComputer.style.backgroundPositionX = position[numbers3] + "px";
  }
  if(numbers2 == 5){
    pictureComputer.classList.remove("pictures");
    pictureComputer.className = "picture10"
    valueComputer += deck['card' + numbers2].value;
    pictureComputer.style.backgroundPositionX = position[numbers3] + "px";
  }
  if(numbers2 == 6){
    pictureComputer.classList.remove("pictures");
    pictureComputer.className = "picture11"
    valueComputer += deck['card' + numbers2].value;
    pictureComputer.style.backgroundPositionX = position[numbers3] + "px";
  }
  if(numbers2 == 7){
    pictureComputer.classList.remove("pictures");
    pictureComputer.className = "picture12"
    valueComputer += deck['card' + numbers2].value;
    pictureComputer.style.backgroundPositionX = position[numbers3] + "px";
  }
  if(numbers2 == 8){
    pictureComputer.classList.remove("pictures");
    pictureComputer.className = "picture13"
    valueComputer += deck['card' + numbers2].value;
    pictureComputer.style.backgroundPositionX = position[numbers3] + "px";
  }
  if(numbers2 == 9){
    pictureComputer.classList.remove("pictures");
    pictureComputer.className = "picture14"
    valueComputer += deck['card' + numbers2].value;
    pictureComputer.style.backgroundPositionX = position[numbers3] + "px";
  }

  console.log("numbers1 = " + numbers1);
  console.log("numbers2 = " + numbers2);

  document.getElementById('valueUser').textContent = valueUser;
  document.getElementById('valueComputer').textContent = valueComputer;
  let check = true;
  if(valueUser == 21){
    check = false;
     alert("Вітаю, ви перемогли - " + nickname + ", тримайте цукерку!");
     winUser++;
     generate.removeEventListener('click', Generate);
  }else if(valueComputer == 21){
    check = false;
    alert("На жаль, ви не перемогли! Сьогодні без цукерки...");
    winComputer++;
    generate.removeEventListener('click', Generate);
  }
  if(iter == 3 && check){
    if (valueUser > valueComputer) {
     alert("Вітаю, ви перемогли - " + nickname + ", тримайте цукерку!");
     winUser++;
   } else if(valueComputer > valueUser){
     alert("На жаль, ви не перемогли! Сьогодні без цукерки...");
     winComputer++;
   }  else if(valueUser == valueComputer){
     alert("Нічья");
   }
    generate.removeEventListener('click', Generate);
  }
  generateTextUser.textContent = winUser;
  generateTextComputer.textContent = winComputer;
}

function Reset() {
  valueUser = 0;
  valueComputer = 0
  iter = 0;
  document.getElementById('valueUser').textContent = valueUser;
  document.getElementById('valueComputer').textContent = valueComputer;
  generate.addEventListener('click', Generate);
}
