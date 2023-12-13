let nickname = prompt("Введіть ваш нікнейм");

console.log(nickname);
if(!nickname || !nickname.trim()){
  alert("Ім'я було задано некоретно або було відсутнє, ваш нікнейм User");
}else{
  document.getElementById('nickname').textContent = nickname;
}

let valueUser = 0;
let iter = 0;
let winUser = 0;

const generate = document.getElementById("button");
generate.addEventListener('click', Generate);

const reset = document.getElementById("buttonReset");
reset.addEventListener('click', Reset);
function Generate(){
  iter++;
  document.getElementById("textUser").textContent = iter;
  const point = {
    point1:{
      name:"7",
    },
    point2:{
      name:"banana",
    },
    point3:{
      name:"bigWinn",
    },
    point4:{
      name:"chery",
    },
    point5:{
      name:"lemon",
    }
  }

  const array = [
Math.floor(Math.random()*5) + 1,
 Math.floor(Math.random()*5) + 1,
 Math.floor(Math.random()*5) + 1,
 Math.floor(Math.random()*5) + 1,
 Math.floor(Math.random()*5) + 1,
 Math.floor(Math.random()*5) + 1,
 Math.floor(Math.random()*5) + 1,
 Math.floor(Math.random()*5) + 1,
 Math.floor(Math.random()*5) + 1
]
for (let i = 0; i < array.length; ++i) {
  const picture = document.getElementById("picture" + i);
  switch (array[i]) {
    case 1:
      picture.className = "picture1";
      break;
    case 2:
      picture.className = "picture2";
      break;
    case 3:
      picture.className = "picture3";
      break;
    case 4:
      picture.className = "picture4";
      break;
    case 5:
      picture.className = "picture5";
      break;
    default:
      alert("wow");
  }
}
 const pic1 = document.getElementById('picture0').className;
 const pic2 = document.getElementById('picture1').className;
 const pic3 = document.getElementById('picture2').className;
 const pic4 = document.getElementById('picture3').className;
 const pic5 = document.getElementById('picture4').className;
 const pic6 = document.getElementById('picture5').className;
 const pic7 = document.getElementById('picture6').className;
 const pic8 = document.getElementById('picture7').className;
 const pic9 = document.getElementById('picture8').className;

switch (true) {
  case pic1 == pic2 && pic2 == pic3:
    winUser++;
    document.getElementById('winUser').textContent = winUser;
    break;
  case pic4 == pic5 && pic5 == pic6:
    winUser++;
    document.getElementById('winUser').textContent = winUser;
    break;
  case pic7 == pic8 && pic8 == pic9:
    winUser++;
    document.getElementById('winUser').textContent = winUser;
    break;
  default:
}
if(iter == 3){
  generate.removeEventListener('click', Generate);
}
}
function Reset() {
  for (var i = 0; i < 9; i++) {
    const picture = document.getElementById("picture" + i);
    picture.className = "picture";
  }
  iter = 0;
  document.getElementById("textUser").textContent = iter;
  generate.addEventListener('click', Generate);
}
