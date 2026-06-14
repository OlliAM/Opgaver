// Tilføj kode for opgave 5.1 - 5.5 her!

//Opg5.1
const ps = document.querySelectorAll('p');
for (const p of ps) {
    p.classList.add('red')
}

//Opg5.2
const h1s = document.querySelectorAll('h1');
for(const h1 of h1s) {
    h1.nextElementSibling.nextElementSibling.style.color = 'brown'
}

/*
for(let secondElement of document.querySelectorAll('h1 + * + *')) {
    secondElement.style.color = 'brown';
} 
*/

//Opg5.3
const lis = document.querySelector('ul').children;

for(let i = 0; i < lis.length; i++) {
    if((i+1) % 2 == 0) {
        lis[i].style.color = "gray"
    }
}

//Opg5.4
for (h1 of h1s) {
    const p = h1.nextElementSibling;
    const h2 = document.createElement('h2');
    h2.textContent = p.textContent;
    p.replaceWith(h2);
}

/* 
for (p of querySelectorAll('h1 + p')) {
    p.outerhtml = <h2>p.innerHTML</h2>
}
*/

//Opg5.5
let i = 0;
for (let h1 of h1s) {
    h1.id = i++
}

let links = document.createElement('nav')

for(let j = 0; j < i; j++) {
    const element = document.createElement('a');
    element.href = '#' + j;
    element.textContent = 'Afsnit ' + j

    element.style.display = "block"
    links.appendChild(element)
}

document.body.append(links);


