const getH1Tag = document.querySelector('.user-name');
const getNameForm = document.querySelector('.name-form')
const getNameInput = document.querySelector('#name');
const usernameKey = 'username';
const HIDDEN_CLASS = 'hidden';
const getBody = document.querySelector('body')
const getContainer = document.querySelector('.container')
const getBottomContainer = document.querySelector('.bottom-container')


if(localStorage.getItem(usernameKey)!==null){
    greet();
    getNameForm.classList.add(HIDDEN_CLASS)
    getBody.classList.remove('non-user-name')
    getContainer.classList.remove(HIDDEN_CLASS)
    getBottomContainer.classList.remove(HIDDEN_CLASS)
}else{
    localStorage.clear();
}   

getNameForm.addEventListener('submit',submitEvent)

function submitEvent(event){
    const userName = getNameInput.value;
    if(userName===""||userName===null){
        alert("이름을 입력하세요! (입력없이 엔터❌)");
        location.reload();
        return;
    }
    event.preventDefault();
    getNameForm.classList.add(HIDDEN_CLASS);
    getBody.classList.remove('non-user-name')
    localStorage.setItem(usernameKey,userName);
    getContainer.classList.remove(HIDDEN_CLASS)
    location.reload()
}

function greet(){
    getH1Tag.innerHTML = `<i>${localStorage.getItem(usernameKey)}</i> 님의 새싹 성장중!`
}