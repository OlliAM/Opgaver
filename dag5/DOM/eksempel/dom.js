//Det første p tag
const p1 = document.querySelector('p');
p1.className = 'alert'

const cityNames = ['København', 'Århus', 'Odense', 'Aalborg', 'Esbjerg']

const ulNode = document.querySelector('ul')
for (const city of cityNames) {
    let liNode = document.createElement('li')
    liNode.classList.add('alert');
    const liNodeText = document.createTextNode(city)
    liNode.id = city
    liNode.appendChild(liNodeText)
    ulNode.appendChild(liNode)
}

// Søge fra ulnode
const liCreatedNodes = ulNode.querySelectorAll('li')
const h2 = document.querySelector('h2')
h2.textContent = `En liste af ${cityNames.length} gay byer` 

const clerkNode = document.createElement('img')
const liÅrhus = document.querySelector('li#Århus')
clerkNode.src = 'clerk.png'
clerkNode.width = '300'
liÅrhus.after(clerkNode)



