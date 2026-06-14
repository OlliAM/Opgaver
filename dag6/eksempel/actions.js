const usernameNode = document.getElementById('username');

const submitBtnNode = document.querySelector('button');
const onClickEvent = (event) => {
    window.alert(usernameNode.value)
    event.stopPropagation()
}

listener = submitBtnNode.addEventListener('click', onClickEvent)
//submitBtnNode.onclick = 

submitBtnNode.addEventListener('mouseover', () => {
    submitBtnNode.removeEventListener('click', onClickEvent)
})