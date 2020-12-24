function navBar(){
    let ul = document.querySelector('ul')

    if(ul.style.display === 'block'){
        ul.style.display = 'none'
    }else{
        ul.style.display = 'block'
    }
}

function assistirAnimes(){
    let choose = document.querySelector('.choose')
    
    if(choose.style.display === 'block'){
        choose.style.display = 'none'
    }else{
        choose.style.display = 'block'
    }
}