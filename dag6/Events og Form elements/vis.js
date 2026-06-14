for(const input of document.querySelectorAll('input')) {
    const label = document.createElement('label')
    if(input.id === 'tal') {
        label.textContent = 'Tal: '
    }
    else if(input.id === 'tid') {
        label.textContent = 'Tid: '
    }

    label.htmlFor = input.id
    input.before(label)
    input.addEventListener('click', () => clickFunc(input));
}


function clickFunc(input) {
    if(input.id === 'tal') {
    const tal = Math.floor(Math.random() * 100)
    input.value = tal;
    }

    else if(input.id === 'tid') {
        input.value = new Date().toLocaleTimeString("da-DK")
    }
}
