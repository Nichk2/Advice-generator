
const btnAdvice = document.querySelector('.elipse');

function getAdvice() {
  fetch('https://api.adviceslip.com/advice')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const advice = data.slip.advice;
      const adviceId = data.slip.id;

      const adviceText = document.querySelector('h2');
      adviceText.innerHTML = advice;

      const adviceIdElement = document.querySelector('.id');
      adviceIdElement.innerHTML = `A D V I C E # ${adviceId}`;
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
}

btnAdvice.addEventListener('click', getAdvice);
