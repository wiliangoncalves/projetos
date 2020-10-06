let destroeyedsongmeteor1 = document.getElementById('meteor1songdestroyed')
let destroeyedsongmeteor2 = document.getElementById('meteor2songdestroyed')
let destroeyedsongmeteor3 = document.getElementById('meteor3songdestroyed')
let destroeyedsongmeteor5 = document.getElementById('meteor5songdestroyed')

let met1 = new Image()
met1.src = 'img/Meteors/meteorBrown_tiny2.png'

let met2 = new Image()
met2.src = 'img/Meteors/meteorBrown_tiny1.png'

let met3 = new Image()
met3.src = 'img/Meteors/meteorBrown_small2.png'

let met4 = new Image()
met4.src = 'img/Meteors/meteorBrown_small1.png'

let met5 = new Image()
met5.src = 'img/Meteors/meteorBrown_med3.png'

let ship1 = new Image()
ship1.src = 'img/Enemies/enemyBlack1.png'

let meteor1 = {
    img: met1,
    x: meteorspot(),
    y: 1,
    width: 16,
    height: 15
}

let meteor2 = {
    img: met2,
    x: meteorspot(),
    y: 1,
    width: 18,
    height: 18
}

let meteor3 = {
    img: met3,
    x: meteorspot(),
    y: 1,
    width: 29,
    height: 26
}

let meteor4 = {
    img: met4,
    x: meteorspot(),
    y: 1,
    width: 28,
    height: 28
}

let meteor5 = {
    img: met5,
    x: meteorspot(),
    y: 1,
    width: 45,
    height: 40
}

let enemyship1 = {
    img: ship1,
    x: 1/*enemyshipspot() - 50*/,
    y: 1,
    width: 73,
    height: 66
}

let meteor01 = []
meteor01.push(meteor1)

let meteor02 = []
meteor02.push(meteor2)

let meteor03 = []
meteor03.push(meteor3)

let meteor04 = []
meteor04.push(meteor4)

let meteor05 = []
meteor05.push(meteor5)

let enemyship01 = []
enemyship01.push(enemyship1)

function enemyshipspot(min = 2, max = 499){
    return Math.floor(Math.random() * (max - min) + min)
}

function meteorspot(min = 35){
    return Math.floor(min + (Math.random() * 540))  // 35 até 540
}

function drawMeteor(){
    for(let i in meteor01){

        let meteor001 = meteor01[i]
        ctx.drawImage(meteor001.img, 0,0, meteor001.width, meteor001.height, meteor001.x, meteor001.y, meteor001.width, meteor001.height)
        meteor001.y+= 1

        if(shoot.y + shoot.width < meteor1.y + meteor1.width &&
            shoot.y + shoot.height > meteor1.y +  meteor1.height &&
            shoot.x  + shoot.width < (meteor1.x + 8.5)  + meteor1.width &&
            (shoot.x - 5) + shoot.height > (meteor1.x + 24.8) +  meteor1.height){
                meteor001.y = 400
                destroeyedsongmeteor1.play()
                destroeyedsongmeteor1.volume = 0.1
        }

        if(meteor001.y === 400){
            setTimeout(function(){
                meteor001.y = 1
                meteor001.x = meteorspot()
            }, 3000)
        }

        if(meteor1.y + meteor1.height > char.y + 40 &&
            meteor1.y < char.y + char.height &&
            meteor1.x + meteor1.width > char.x &&
            meteor1.x < char.x + char.height){
                alert('acertou')
            }
        
    }

    for(let i in meteor02){

        let meteor002 = meteor02[i]
        ctx.drawImage(meteor002.img, 0,0, meteor002.width, meteor002.height, meteor002.x, meteor002.y, meteor002.width, meteor002.height)
        meteor002.y+= 1

        if(shoot.y + shoot.width < meteor002.y + meteor002.width &&
            shoot.y + shoot.height > meteor002.y +  meteor002.height &&
            shoot.x  + shoot.width < (meteor002.x + 8.5)  + meteor002.width &&
            (shoot.x - 5) + shoot.height > (meteor002.x + 24.8) +  meteor002.height){
                meteor002.y = 400
                destroeyedsongmeteor2.play()
                destroeyedsongmeteor2.volume = 0.1
        }

        if(meteor002.y === 400){
            setTimeout(function(){
                meteor002.y = 1
                meteor002.x = meteorspot()
            }, 6000)
        }

        if(meteor2.y + meteor2.height > char.y + 40 &&
            meteor2.y < char.y + char.height &&
            meteor2.x + meteor2.width > char.x &&
            meteor2.x < char.x + char.height){
                alert('acertou')
            }
    }

    for(let i in meteor03){
        let meteor003 = meteor03[i]
        ctx.drawImage(meteor003.img, 0,0, meteor003.width, meteor003.height, meteor003.x, meteor003.y, meteor003.width, meteor003.height)
        meteor003.y+= 1

        if(shoot.y + shoot.width < meteor003.y + meteor003.width &&
            shoot.y + shoot.height > meteor003.y +  meteor003.height &&
            shoot.x  + shoot.width < (meteor003.x + 8.5)  + meteor003.width &&
            (shoot.x - 5) + shoot.height > (meteor003.x + 24.8) +  meteor003.height){
                meteor003.y = 400
                destroeyedsongmeteor3.play()
                destroeyedsongmeteor3.volume = 0.5
        }

        if(meteor003.y === 400){
            setTimeout(function(){
                meteor003.y = 1
                meteor003.x = meteorspot()
            }, 6000)
        }

        if(meteor3.y + meteor3.height > char.y + 40 &&
            meteor3.y < char.y + char.height &&
            meteor3.x + meteor3.width > char.x &&
            meteor3.x < char.x + char.height){
                alert('acertou')
            }
    }

    for(let i in meteor04){
        let meteor004 = meteor04[i]
        ctx.drawImage(meteor004.img, 0,0, meteor004.width, meteor004.height, meteor004.x, meteor004.y, meteor004.width, meteor004.height)
        meteor004.y += 1

        if(shoot.y + shoot.width < meteor004.y + meteor004.width &&
            shoot.y + shoot.height > meteor004.y +  meteor004.height &&
            shoot.x  + shoot.width < (meteor004.x + 8.5)  + meteor004.width &&
            (shoot.x - 5) + shoot.height > (meteor004.x + 24.8) +  meteor004.height){
                meteor004.y = 400
                destroeyedsongmeteor3.play()
                destroeyedsongmeteor3.volume = 0.5
        }

        if(meteor004.y === 400){
            setTimeout(function(){
                meteor004.y = 1
                meteor004.x = meteorspot()
            }, 6000)
        }

        if(meteor4.y + meteor4.height > char.y + 40 &&
            meteor4.y < char.y + char.height &&
            meteor4.x + meteor4.width > char.x &&
            meteor4.x < char.x + char.height){
                alert('acertou')
            }
    }

    for(let i in meteor05){
        let meteor005 = meteor05[i]
        ctx.drawImage(meteor005.img, 0,0, meteor005.width, meteor005.height, meteor005.x, meteor005.y, meteor005.width, meteor005.height)
        meteor005.y += 1

        if(shoot.y + shoot.width < meteor005.y + meteor005.width &&
            shoot.y + shoot.height > meteor005.y +  meteor005.height &&
            shoot.x  + shoot.width < (meteor005.x + 8.5)  + meteor005.width &&
            (shoot.x - 5) + shoot.height > (meteor005.x + 24.8) +  meteor005.height){
                meteor005.y = 400
                destroeyedsongmeteor5.play()
                destroeyedsongmeteor5.volume = 0.5
        }

        if(meteor005.y === 400){
            setTimeout(function(){
                meteor005.y = 1
                meteor005.x = meteorspot()
            }, 6000)
        }

        if(meteor5.y + meteor5.height > char.y + 40 &&
            meteor5.y < char.y + char.height &&
            meteor5.x + meteor5.width > char.x &&
            meteor5.x < char.x + char.height){
                alert('acertou')
            }
    }
}

let mleft = false
let mright = false

function checkright(){
    setInterval(function(){
        mright = true
    }, 3000)
}

function rifalse(){
    setInterval(function(){
        mright = false
    }, 3500)
}

function checkleft(){
    setInterval(function(){
        mleft = true
    }, 4000)
}

function lefalse(){
    setInterval(function(){
        mleft = false
    }, 4500)
}

function enemove(){
    checkright()

    lefalse()

    checkleft()

    rifalse()

    if(mright === true && mleft === false){
        enemyship1.x += 3.5
    }
    if(mleft === true && mright === false){
        enemyship1.x -= 2
    }
    if(enemyship1.x <= 3){
        enemyship1.x += 5.5
        lefalse()
    }
    if(enemyship1.x >= 500){
        enemyship1.x -= 3
        rifalse()
    }
    /*do{ 
        if(enemyship1.x <= 1){
            setInterval(function(){
                enemyship1.x++
            }, 60)
        }

        if(enemyship1.x >= 495){
            setInterval(function(){
                enemyship1.x--
            }, 60)
        }
    } while(enemyship1.x === true)*/
}

function DrawEnemyShip(){
    for(let i in enemyship01){
        let enemyship001 = enemyship01[i]
        ctx.drawImage(enemyship001.img, 0,0, enemyship001.width, enemyship001.height, enemyship001.x, enemyship001.y, enemyship001.width, enemyship001.height)

    }
}