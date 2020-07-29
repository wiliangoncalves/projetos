function yuyudub(){
    const yusaga1 = window.document.querySelector('#yusaga1')
    const yusaga2 = window.document.querySelector('#yusaga2')
    const yusaga3 = window.document.querySelector('#yusaga3')

    if(yusaga1.style.display && yusaga2.style.display && yusaga3.style.display == 'block')
    {
        yusaga1.style.display = 'none'
        yusaga2.style.display = 'none'
        yusaga3.style.display = 'none'
    }
    else{
        yusaga1.style.display = 'block'
        yusaga2.style.display = 'block'
        yusaga3.style.display = 'block'
    }
}