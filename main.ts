let projectile: Sprite = null
let projectile2: Sprite = null
game.onUpdateInterval(750, function () {
    projectile = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 4 4 4 4 . . . . 
        . . . . . b b b c b 4 4 4 4 . . 
        . . . . . c b b b b 2 2 2 4 4 4 
        . . . . . b b c b b 2 2 2 4 4 4 
        . . . . . b b b b b 2 2 2 4 4 . 
        . . . . . b c b c b 4 4 4 4 . . 
        . . . . . . . . 4 4 4 4 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    projectile.setVelocity(randint(-90, -30), 0)
    projectile.y = randint(0, scene.screenHeight())
    projectile.x += 100
})
game.onUpdateInterval(500, function () {
    projectile2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    projectile2.setVelocity(randint(-90, -30), 0)
    projectile2.y = randint(0, scene.screenHeight())
    projectile2.x += 100
})
