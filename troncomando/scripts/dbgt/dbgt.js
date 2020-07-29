function dbgt(){
    const gtuniverso = window.document.querySelector('#gtuniverso')
    const gtbaby = window.document.querySelector('#gtbaby')
    const gtsuper17 = window.document.querySelector('#gtsuper17')
    const gtdragoes = window.document.querySelector('#gtdragoes')

    if(gtuniverso.style.display && gtbaby.style.display && gtsuper17.style.display && gtdragoes.style.display == 'block')
    {
        gtuniverso.style.display = 'none'
        gtbaby.style.display = 'none'
        gtsuper17.style.display = 'none'
        gtdragoes.style.display = 'none'
    }
    else{
        gtuniverso.style.display = 'block'
        gtbaby.style.display = 'block'
        gtsuper17.style.display = 'block'
        gtdragoes.style.display = 'block'
    }
}