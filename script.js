const btnAdvice = document.querySelector('.elipse');

function getAdvice () {
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.adviceslip.com/advice');
xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        const advice = JSON.parse(this.responseText);

        const adviceText = document.querySelector('h2');
        adviceText.innerHTML = advice.slip.advice;

        const adviceId = document.querySelector('.id');
        adviceId.innerHTML = `A D V I C E # ${advice.slip.id}`;
 }
};
xhr.send();
}

btnAdvice.addEventListener('click', getAdvice);

