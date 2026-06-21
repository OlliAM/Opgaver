document.querySelector('#tilfojOpgave').addEventListener('click', (event) => {
    const titel = document.querySelector('#titel').value
    const beskrivelse = document.querySelector('#beskrivelse').value

    const liste = document.querySelector('#opgaver')
    const opgave = document.createElement(`li`)
    opgave.textContent = `${titel} - ${beskrivelse}`
    opgave.addEventListener('click', (event) => {
        opgave.classList.add('done')
        opgave.style.backgroundColor = 'green'
        liste.removeChild(opgave)
        liste.appendChild(opgave)
        opgave.removeEventListener('click')
    }, {once: true})
    liste.insertBefore(opgave, liste.querySelector('li.done'))
})