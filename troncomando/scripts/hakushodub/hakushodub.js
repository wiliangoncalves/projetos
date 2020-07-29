function hakushodub(){
    const yufilmes = window.document.querySelector('#yufilmes')
    const yumanga = window.document.querySelector('#yumanga')
    const yuyudub = window.document.querySelector('#yudub')

    if(yufilmes.style.display && yumanga.style.display && yuyudub.style.display == 'block')
    {
        yufilmes.style.display = 'none'
        yumanga.style.display = 'none'
        yuyudub.style.display = 'none'
    }
    else{
        yufilmes.style.display = 'block'
        yumanga.style.display = 'block'
        yuyudub.style.display = 'block'
    }
}