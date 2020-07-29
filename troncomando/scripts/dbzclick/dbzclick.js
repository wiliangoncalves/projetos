function dbzclick(){
    const zfilme = window.document.querySelector('#zfilme')
    const zsaiya = window.document.querySelector('#zsaiya')
    const zfreeza = window.document.querySelector('#zfreeza')
    const zgarlic = window.document.querySelector('#zgarlic')
    const zandroides = window.document.querySelector('#zandroides')
    const zcell = window.document.querySelector('#zcell')
    const ztorneio = window.document.querySelector('#ztorneio')
    const zboo = window.document.querySelector('#zboo')

    if(zfilme.style.display && zsaiya.style.display && zfreeza.style.display && zgarlic.style.display && zandroides.style.display && zcell.style.display && ztorneio.style.display && zboo.style.display == 'block')
    {
        zfilme.style.display = 'none'
        zsaiya.style.display = 'none'
        zfreeza.style.display = 'none'
        zgarlic.style.display = 'none'
        zandroides.style.display = 'none'
        zcell.style.display = 'none'
        ztorneio.style.display = 'none'
        zboo.style.display = 'none'
    } 
    else{
        zfilme.style.display = 'block'
        zsaiya.style.display = 'block'
        zfreeza.style.display = 'block'
        zgarlic.style.display = 'block'
        zandroides.style.display = 'block'
        zcell.style.display = 'block'
        ztorneio.style.display = 'block'
        zboo.style.display = 'block'
    }
}