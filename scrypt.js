const input = document.querySelector('#email__input'),
      btn = document.querySelector('#form__btn'),
      body = document.querySelector('body')


let createPopup = email =>{
    return `<div class="pop__up">
    <p class="pop__up__text">Now your email <strong> ${email} </strong> is on our newslist</p>
</div>`
}

btn.addEventListener('click', () =>{
    const emailValue = input.value
    body.innerHTML += createPopup(emailValue)
    setTimeout(() => {
        const popup = document.querySelector('.pop__up')
        popup.remove()
    }, 3000);
})