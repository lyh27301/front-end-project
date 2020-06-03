const button1 = document.querySelector('#b1');
const button2 = document.querySelector('#b2');

const triangle1 = document.querySelector('.star-six');

button1.addEventListener('click', () => { triangle1.style.borderBottomColor = '#b2a8bf'; });
button2.addEventListener('click', () => { triangle1.style.borderBottomColor = '#e1d5f1'; });