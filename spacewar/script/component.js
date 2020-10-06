let btn_start = document.getElementById('btn-start')
let btn_map = document.getElementById('btn-map')
let btn_exit = document.getElementById('btn-exit')

let btn_more = document.getElementById('btn-more')
let btn_rating = document.getElementById('btn-rating')
let btn_shop = document.getElementById('btn-shop')
let btn_faq = document.getElementById('btn-faq')

let btn_setting = document.getElementById('btn-setting')
let btn_info = document.getElementById('btn-info') 

let btn_facebok = document.getElementById('btn-facebook')
let btn_google = document.getElementById('btn-google')
let btn_twitter = document.getElementById('btn-twitter')
let btn_vk = document.getElementById('btn-vk')

let settingWindow = document.getElementById('settingWindow')
let btn_close = document.getElementById('btn-close')
let btn_sound = document.getElementById('btn-sound')
let vol = document.getElementById('vol')
let sound = document.getElementById('sound')

let bgsong = document.getElementById('bgsong')
let imgsong = document.getElementById('imgsong')

let btn_exit_menu = document.getElementById('btn-exit-menu')

// scenario1
let scenario1 = new Image()
scenario1.src = 'img/Scenario/darkPurple.png'

let scen1 = {
    img: scenario1,
    x: 0,
    y: 0,
    width: canvas.width,
    height: canvas.height
}

let spritescen1 = []
spritescen1.push(scen1)

// Menu background
let menu = new Image()
menu.src = 'img/GUI/Main_Menu/BG.png'

let bg = {
    img: menu,
    x: 0,
    y: 0,
    width: canvas.width,
    height: canvas.height
}

let menubg = []
menubg.push(bg)

function startMenu(){
    for(let i in menubg){
        let bgimg = menubg[i]
        ctx.drawImage(bgimg.img, 0,0, bgimg.width, bgimg.height, bgimg.x, bgimg.y, bgimg.width,bgimg.height)
    }
    
}

function setting(){
    btn_start.style.display = 'none'
    btn_map.style.display = 'none'
    btn_exit.style.display = 'none'
    settingWindow.style.display = 'block'
    btn_close.style.display = 'block'
    vol.style.display = 'block'
    sound.style.display = 'block'
    btn_exit_menu.style.display = 'block'
}
function btnclose(){
    btn_close.style.display = 'none'
    settingWindow.style.display = 'none'
    vol.style.display = 'none'
    sound.style.display = 'none'
    btn_exit_menu.style.display = 'none'
    btn_start.style.display = 'block'
    btn_map.style.display = 'block'
    btn_exit.style.display = 'block'
}
function exit_menu(){
    document.location.reload(true)
}

function songon(){
    if(songon){
        bgsong.play()
        imgsong.src = ('img/GUI/Setting/Music_BTN.png')
    }
}

function songoff(){
    if(songoff){
        bgsong.pause()
        imgsong.src = ('img/GUI/Setting/Music_BTN_off.png')
    }
}


function volume(value){
    let audio = document.querySelector('#bgsong')
    audio.volume = value
}

//song
function scenario(){
    let area1 = document.getElementById('scenario1')

    area1.volume = 0.1
    area1.play()
}

function playerShoot(){
    let shoot1 = document.getElementById('shoot1')
    let shoot2 = document.getElementById('shoot2')
    let shoot3 = document.getElementById('shoot3')

    /*shoot1.volume = 0.1
    setTimeout(() => {
        shoot1.play()
    }, 200);

    setTimeout(() => {
        shoot1.pause()
    }, 1500);
    /*setInterval(() => {
        shoot1.play()
        //shoot3.play()
    }, 1100);*/
}

function drawscenario(){
    for(let i in spritescen1){
        let sce1 = spritescen1[i]
        ctx.clearRect(0,0, canvas.width, canvas.height)
        ctx.drawImage(sce1.img, 0,0, sce1.width, sce1.height, sce1.x, sce1.y, sce1.width, sce1.height)
    }
}

function start(){
    window.requestAnimationFrame(start, canvas)

    btn_start.style.display = btn_exit.style.display =
    btn_map.style.display = btn_more.style.display = 
    btn_rating.style.display = btn_shop.style.display =
    btn_faq.style.display = btn_info.style.display = 
    btn_facebok.style.display = btn_google.style.display =
    btn_twitter.style.display = btn_vk.style.display = btn_setting.style.display  = 'none'

    bgsong.pause()
    drawscenario()
    startGame()
    shootedge()
    drawMeteor()
    DrawEnemyShip()
    enemove()

    bgsong.volume = 0
    imgsong.src = ('img/GUI/Setting/Music_BTN_disable.png')

    btn_setting.style.display = 'block'
    btn_setting.style.width = '25px'
    btn_setting.style.height = '25px'
    btn_setting.style.left = '915px'
    btn_setting.style.top = '40px'
}