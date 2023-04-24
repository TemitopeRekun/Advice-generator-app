const diceBtn = document.querySelector(".button");
const advice = document.querySelector(".advice");
const adviceNum = document.querySelector(".advice-num");
const url = "https://api.adviceslip.com/advice";

async function generate() {
	const res = await fetch(url);
	const data = await res.json();
	let slip = data.slip;
	let dataId = slip.id;
	let dataAdvice = slip.advice;

	adviceNum.innerHTML = `advice # ${dataId}`;
	advice.innerHTML = dataAdvice;
}

diceBtn.addEventListener("click", generate);
