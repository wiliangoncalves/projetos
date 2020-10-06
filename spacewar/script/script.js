let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')
let left = 37, right = 39, esc = 27
let moveLeft = moveRight = escKey = false

let player1 = new Image()
player1.src = 'img/playerShip1_blue.png'

let laser = new Image()
laser.src = 'img/Lasers/laserBlue01.png'

let char = {
    img: player1,
    x: canvas.width / 2 - 99 / 2,
    y: 321,
    width: 99,
    height: 75
}
let shoot = {
    img: laser,
    x: char.x + 45,
    y: char.y - 37.5,
    width: 9,
    height: 54
}


let ship = []
ship.push(char)

let shipshoot = []
shipshoot.push(shoot)

window.addEventListener('keydown', keypressed1, false)
window.addEventListener('keyup', keypressed2, false)
function keypressed1(e){
    switch(e.keyCode){
        case left:
            moveLeft = true
            break
        case right:
            moveRight = true
            break
        case esc:
            escKey = true
            break   
    }
}
function keypressed2(e){
    switch(e.keyCode){
        case left:
            moveLeft = false
            break
        case right:
            moveRight = false
            break
        case esc:
            escKey = false
            break
    }
}
function move(){
    if(moveLeft){
        char.x-= 5
    }
    if(moveRight){
        char.x+= 5
    }
}

function shootedge(){
    // começa em 283.5
    shoot.y-= 5
    if(shootedge){
        playerShoot()
        scenario()
    }

    while(shoot.y === - 11.5){
        shoot.y = char.y - 52.5
        shoot.x = char.x + 45
    }
}

function edge(){
    if(char.x > canvas.width - 95){
        char.x-= 5
    }
    if(char.x < canvas.width / 2 - 305){
        char.x+= 5
    }
}

function update(){
    move()
    edge()
}
function draw(){
    for(let i in ship){
        let character = ship[i]
        ctx.drawImage(character.img, 0,0, character.width, character.height, character.x, character.y, character.width, character.height)
    }
    for(let i in shipshoot){
        let shoot = shipshoot[i]
        ctx.drawImage(shoot.img, 0,0, shoot.width, shoot.height, shoot.x, shoot.y, shoot.width, shoot.height)
    }


}

function startGame(){
    update()
    draw()
}
