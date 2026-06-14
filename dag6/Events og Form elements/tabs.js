const spans = document.querySelectorAll('span');
const h1s = document.querySelectorAll('h1');

for(h1 of h1s) {
    h1.style.display = 'none';
}
h1s[0].style.display = 'block'
let active = h1s[0]
let i = 0;

spans.forEach((span, index) => {
    span.addEventListener('click', () => {
        active.style.display = 'none';
        active = h1s[index];
        active.style.display = 'block';
    });
});