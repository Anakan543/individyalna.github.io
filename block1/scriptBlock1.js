const newElementDiv = document.createElement('div');

newElementDiv.classList.add("magicBall");
document.getElementById('content').append(newElementDiv);

const question = document.createElement("input");
question.type = "text";
question.placeholder = "Напишіть ваше запитання";
//question.id = "answer"
question.classList.add("text");
newElementDiv.append(question);


const image = document.createElement('div');
image.classList.add("image");
newElementDiv.append(image);

const answer = document.createElement('input');
answer.classList.add("text");
answer.type = "text";
newElementDiv.appendChild(answer);

const answerText = ["Так", "Ні", "Можливо", "Не знаю", "100%", "Скоріше за все, так", "Неможливо"]

question.addEventListener('keyup', function FindAnswer(enter) {
	if(enter.key == "Enter"){
	if(question.value.length !== 0){
			const numberAnswer = answerText[Math.floor(Math.random()*answerText.length)];
			answer.value = numberAnswer;
	}else{
		alert("Відстуне запитання");
	}
	}
});
