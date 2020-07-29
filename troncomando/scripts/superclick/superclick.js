function superclick(){
    const sfilmes = window.document.querySelector('#sfilmes')
    const sbills = window.document.querySelector('#sbills')
    const sfreeza = window.document.querySelector('#sfreeza')
    const suniverso6 = window.document.querySelector('#suniverso6')
    const strunks = window.document.querySelector('#strunks')
    const storneio = window.document.querySelector('#storneio')

    if(sfilmes.style.display && sbills.style.display && sfreeza.style.display && suniverso6.style.display && strunks.style.display && storneio.style.display == 'block')
    {
        sfilmes.style.display = 'none'
        sbills.style.display = 'none'
        sfreeza.style.display = 'none'
        suniverso6.style.display = 'none'
        strunks.style.display = 'none'
        storneio.style.display = 'none'
    }
    else{
        sfilmes.style.display = 'block'
        sbills.style.display = 'block'
        sfreeza.style.display = 'block'
        suniverso6.style.display = 'block'
        strunks.style.display = 'block'
        storneio.style.display = 'block'
    }
}