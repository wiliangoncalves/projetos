function nanatsu(){
    const nanova = window.document.querySelector('#nanova')
    const nana1 = window.document.querySelector('#nana1')
    const nana2 = window.document.querySelector('#nana2')
    const nana3 = window.document.querySelector('#nana3')

    if(nanova.style.display && nana1.style.display && nana2.style.display && nana3.style.display == 'block')
    {
        nanova.style.display = 'none'
        nana1.style.display = 'none'
        nana2.style.display = 'none'
        nana3.style.display = 'none'
    }
    else{
        nanova.style.display = 'block'
        nana1.style.display = 'block'
        nana2.style.display = 'block'
        nana3.style.display = 'block'
    }
}