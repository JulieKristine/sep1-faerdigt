namespace SpriteKind {
    export const Materiale = SpriteKind.create()
    export const Bomuld = SpriteKind.create()
    export const tshirt = SpriteKind.create()
    export const Mudder = SpriteKind.create()
    export const vaksemaskine = SpriteKind.create()
    export const Vaskemaskine = SpriteKind.create()
    export const Trøje = SpriteKind.create()
    export const Svans = SpriteKind.create()
    export const Snavs = SpriteKind.create()
    export const Spørgsmål = SpriteKind.create()
    export const Spørgsmål2 = SpriteKind.create()
    export const Spørgsmål1 = SpriteKind.create()
    export const Gras = SpriteKind.create()
    export const Økobomuld = SpriteKind.create()
    export const Bomuld2 = SpriteKind.create()
    export const Dør = SpriteKind.create()
    export const Point = SpriteKind.create()
    export const Væg = SpriteKind.create()
    export const Skraldemand = SpriteKind.create()
}
function Brugsfasen () {
    tiles.setCurrentTilemap(tilemap`level10`)
    game.splash("Velkommen til", "Brugsfasen")
    game.showLongText("44% af klimabelastningerne i tekstilbranchen kommer fra brugsfasen", DialogLayout.Bottom)
    game.showLongText("Du skal her samle den hvide t-shirt op og klare dig gennem banen", DialogLayout.Bottom)
    Rød = sprites.create(assets.image`myImage2`, SpriteKind.Player)
    controller.moveSprite(Rød, 100, 0)
    Rød.vy = 300
    Rød.ay = 300
    scene.cameraFollowSprite(Rød)
    tiles.placeOnTile(Rød, tiles.getTileLocation(0, 14))
    tshirt = sprites.create(assets.image`myImage0`, SpriteKind.Trøje)
    tiles.placeOnTile(tshirt, tiles.getTileLocation(6, 14))
    mudder = sprites.create(img`
        9 . . . . . . . . . . . . . . . 
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
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Snavs)
    tiles.placeOnTile(mudder, tiles.getTileLocation(35, 16))
    vaskemaskine = sprites.create(img`
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
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 1 . . . . . . . . . 
        . . . . . 1 1 . . . . . . . . . 
        `, SpriteKind.Vaskemaskine)
    tiles.placeOnTile(vaskemaskine, tiles.getTileLocation(78, 5))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bomuld2, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 200)
    scene.cameraShake(4, 200)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Væg, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    tiles.placeOnTile(Skib, tiles.getTileLocation(1, 4))
})
function Bortskaffelsesfasen () {
    tiles.setCurrentTilemap(tilemap`level20`)
    game.splash("Velkommen til", "Bortskaffelsesfasen")
    game.showLongText("Danske tøjproducenter smider hvert år 677 tons nye ubrugte tekstiler ud", DialogLayout.Bottom)
    game.showLongText("Find skraldemanden og svar på hans spørgsmål", DialogLayout.Bottom)
    Hvid = sprites.create(assets.image`heroWalkFront1`, SpriteKind.Player)
    controller.moveSprite(Hvid, 100, 0)
    tiles.placeOnTile(Hvid, tiles.getTileLocation(1, 5))
    scene.cameraFollowSprite(Hvid)
    Skralde = sprites.create(img`
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f f e e e e e e f f . 
        f f f f 4 e e e f f f f 
        f f f 4 4 4 e e f f f f 
        f f f 4 4 4 4 e e f f f 
        f 4 e 4 4 4 4 4 4 e 4 f 
        f 4 4 f f 4 4 f f 4 4 f 
        f e 4 d d d d d d 4 e f 
        . f e d d b b d d e f . 
        . f f e 4 4 4 4 e f f . 
        e 4 f b 1 1 1 1 b f 4 e 
        4 d f 1 1 1 1 1 1 f d 4 
        4 4 f 6 6 6 6 6 6 f 4 4 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `, SpriteKind.Skraldemand)
    tiles.placeOnTile(Skralde, tiles.getTileLocation(12, 5))
}
function Materialefasen () {
    tiles.setCurrentTilemap(tilemap`level13`)
    game.splash("Velkommen til", "Materialefasen")
    game.showLongText("Økologisk bomuld dyrkes uden kemikalier", DialogLayout.Bottom)
    game.showLongText("Konventionel bomuld gør brug at dem for at øge udbyttet, hvilket kan føre til større miljøpåvirkning", DialogLayout.Bottom)
    game.showLongText("Du skal her samle 35 stykker økologisk bomuld", DialogLayout.Bottom)
    game.showLongText("Undgå at samle det kemikaliefarvede bomuld ", DialogLayout.Bottom)
    mySprite = sprites.create(assets.image`myImage2`, SpriteKind.Player)
    controller.moveSprite(mySprite, 100, 0)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 6))
    scene.cameraFollowSprite(mySprite)
}
function Transportfasen () {
    tiles.setCurrentTilemap(tilemap`level17`)
    game.splash("Velkommen til", "Transportfasen")
    game.showLongText("De færdige produkter skal transporteres ud til resten af verden", DialogLayout.Bottom)
    game.showLongText("Du skal klare dig over havet uden at støde på grund i tanget, eller at ramme skyerne", DialogLayout.Bottom)
    Skib = sprites.create(img`
        . . . . . . f f e . . . . . . . 
        . . . . . . f 1 f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . f f f f f f f f f f f f f . 
        . . . . 2 2 1 2 f 2 1 2 2 . . . 
        . e . 2 2 2 2 1 f 1 2 2 2 2 . . 
        2 e . 2 2 2 2 2 1 2 2 2 2 2 2 . 
        . e . . 2 2 2 1 f 1 2 2 2 2 . . 
        f f f f f 2 1 2 f 2 1 2 2 . 2 . 
        f 5 f 5 f . f f f f 3 f f f 2 2 
        f f f f f . . f f . . . . 2 f f 
        . . f e f f f f f f f f f f f . 
        . . f e e e e e e e e e e f . . 
        . . . f 5 e 5 e 5 e 5 e f . . . 
        . . . . f e e e e e e f . . . . 
        . . . . . f f f f f f . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(Skib, tiles.getTileLocation(1, 4))
    Skib.ay = 300
    Skib.setVelocity(50, 0)
    controller.moveSprite(Skib, 0, 0)
    scene.cameraFollowSprite(Skib)
    Point1 = sprites.create(img`
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `, SpriteKind.Point)
    Point2 = sprites.create(img`
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `, SpriteKind.Point)
    tiles.placeOnTile(Point1, tiles.getTileLocation(5, 4))
    tiles.placeOnTile(Point2, tiles.getTileLocation(10, 3))
    Point3 = sprites.create(img`
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `, SpriteKind.Point)
    tiles.placeOnTile(Point3, tiles.getTileLocation(15, 4))
    Point4 = sprites.create(img`
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `, SpriteKind.Point)
    tiles.placeOnTile(Point4, tiles.getTileLocation(20, 5))
    Point5 = sprites.create(img`
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `, SpriteKind.Point)
    tiles.placeOnTile(Point5, tiles.getTileLocation(25, 4))
    Point6 = sprites.create(img`
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `, SpriteKind.Point)
    tiles.placeOnTile(Point6, tiles.getTileLocation(30, 3))
    Point7 = sprites.create(img`
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `, SpriteKind.Point)
    tiles.placeOnTile(Point7, tiles.getTileLocation(35, 5))
    Point8 = sprites.create(img`
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `, SpriteKind.Point)
    tiles.placeOnTile(Point8, tiles.getTileLocation(40, 4))
    Point9 = sprites.create(img`
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `, SpriteKind.Point)
    tiles.placeOnTile(Point9, tiles.getTileLocation(45, 4))
    Point10 = sprites.create(img`
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `, SpriteKind.Point)
    tiles.placeOnTile(Point10, tiles.getTileLocation(50, 3))
    Væg1 = sprites.create(img`
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        9111111111111111
        9911111111111111
        9911111111111199
        9991111111119999
        9911111111111999
        9111111111111199
        1111111111111119
        9111111111111111
        9111111111111119
        9111111111111111
        1111111111111111
        1111111111111119
        1111111111111119
        1111111111111111
        1111111111111111
        1111111111111111
        9111111111111111
        9911119911111111
        9911199991111199
        `, SpriteKind.Væg)
    tiles.placeOnTile(Væg1, tiles.getTileLocation(5, 1))
    Væg2 = sprites.create(img`
        99999cc999999cc9
        9cc99c3c99cc9c3c
        9c3cc33c99c3c63c
        9c33c36c99c3633c
        ccc6366c9cc333cc
        33cc66c6c6c633cc
        633ccc36c33cc6cc
        3633633ccc3c36c6
        3c6333cc3c3c33c3
        ccc33c36333cc363
        ccc63c3363c6c633
        63c636c333c33c36
        6336663c636c333c
        c63363ccc36cc63c
        cc666cc6c63c666c
        ccc66cc666cc66cc
        66666cc666666cc6
        6cc66c3c66cc6c3c
        6c3cc33c66c3c63c
        6c33c36c66c3633c
        ccc6366c6cc333cc
        33cc66c6c6c633cc
        633ccc36c33cc6cc
        3633633ccc3c36c6
        3c6333cc3c3c33c3
        ccc33c36333cc363
        ccc63c3363c6c633
        63c636c333c33c36
        6336663c636c333c
        c63363ccc36cc63c
        cc666cc6c63c666c
        ccc66cc666cc66cc
        66666cc666666cc6
        6cc66c3c66cc6c3c
        6c3cc33c66c3c63c
        6c33c36c66c3633c
        ccc6366c6cc333cc
        33cc66c6c6c633cc
        633ccc36c33cc6cc
        3633633ccc3c36c6
        3c6333cc3c3c33c3
        ccc33c36333cc363
        ccc63c3363c6c633
        63c636c333c33c36
        6336663c636c333c
        c63363ccc36cc63c
        cc666cc6c63c666c
        ccc66cc666cc66cc
        `, SpriteKind.Væg)
    tiles.placeOnTile(Væg2, tiles.getTileLocation(5, 7))
    Væg3 = sprites.create(img`
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        9111111111111111
        9911119911111111
        9911199991111199
        `, SpriteKind.Væg)
    tiles.placeOnTile(Væg3, tiles.getTileLocation(10, 0))
    Væg4 = sprites.create(img`
        99999cc999999cc9
        9cc99c3c99cc9c3c
        9c3cc33c99c3c63c
        9c33c36c99c3633c
        ccc6366c9cc333cc
        33cc66c6c6c633cc
        633ccc36c33cc6cc
        3633633ccc3c36c6
        3c6333cc3c3c33c3
        ccc33c36333cc363
        ccc63c3363c6c633
        63c636c333c33c36
        6336663c636c333c
        c63363ccc36cc63c
        cc666cc6c63c666c
        ccc66cc666cc66cc
        66666cc666666cc6
        6cc66c3c66cc6c3c
        6c3cc33c66c3c63c
        6c33c36c66c3633c
        ccc6366c6cc333cc
        33cc66c6c6c633cc
        633ccc36c33cc6cc
        3633633ccc3c36c6
        3c6333cc3c3c33c3
        ccc33c36333cc363
        ccc63c3363c6c633
        63c636c333c33c36
        6336663c636c333c
        c63363ccc36cc63c
        cc666cc6c63c666c
        ccc66cc666cc66cc
        66666cc666666cc6
        6cc66c3c66cc6c3c
        6c3cc33c66c3c63c
        6c33c36c66c3633c
        ccc6366c6cc333cc
        33cc66c6c6c633cc
        633ccc36c33cc6cc
        3633633ccc3c36c6
        3c6333cc3c3c33c3
        ccc33c36333cc363
        ccc63c3363c6c633
        63c636c333c33c36
        6336663c636c333c
        c63363ccc36cc63c
        cc666cc6c63c666c
        ccc66cc666cc66cc
        `, SpriteKind.Væg)
    tiles.placeOnTile(Væg4, tiles.getTileLocation(10, 6))
    Væg5 = sprites.create(img`
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        9111111111111111
        9911111111111111
        9911111111111199
        9991111111119999
        9911111111111999
        9111111111111199
        1111111111111119
        9111111111111111
        9111111111111119
        9111111111111111
        1111111111111111
        1111111111111119
        1111111111111119
        1111111111111111
        1111111111111111
        1111111111111111
        9111111111111111
        9911119911111111
        9911199991111199
        `, SpriteKind.Væg)
    tiles.placeOnTile(Væg5, tiles.getTileLocation(15, 1))
    Væg6 = sprites.create(img`
        99999cc999999cc9
        9cc99c3c99cc9c3c
        9c3cc33c99c3c63c
        9c33c36c99c3633c
        ccc6366c9cc333cc
        33cc66c6c6c633cc
        633ccc36c33cc6cc
        3633633ccc3c36c6
        3c6333cc3c3c33c3
        ccc33c36333cc363
        ccc63c3363c6c633
        63c636c333c33c36
        6336663c636c333c
        c63363ccc36cc63c
        cc666cc6c63c666c
        ccc66cc666cc66cc
        66666cc666666cc6
        6cc66c3c66cc6c3c
        6c3cc33c66c3c63c
        6c33c36c66c3633c
        ccc6366c6cc333cc
        33cc66c6c6c633cc
        633ccc36c33cc6cc
        3633633ccc3c36c6
        3c6333cc3c3c33c3
        ccc33c36333cc363
        ccc63c3363c6c633
        63c636c333c33c36
        6336663c636c333c
        c63363ccc36cc63c
        cc666cc6c63c666c
        ccc66cc666cc66cc
        66666cc666666cc6
        6cc66c3c66cc6c3c
        6c3cc33c66c3c63c
        6c33c36c66c3633c
        ccc6366c6cc333cc
        33cc66c6c6c633cc
        633ccc36c33cc6cc
        3633633ccc3c36c6
        3c6333cc3c3c33c3
        ccc33c36333cc363
        ccc63c3363c6c633
        63c636c333c33c36
        6336663c636c333c
        c63363ccc36cc63c
        cc666cc6c63c666c
        ccc66cc666cc66cc
        `, SpriteKind.Væg)
    tiles.placeOnTile(Væg6, tiles.getTileLocation(15, 7))
    Væg7 = sprites.create(img`
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        9111111111111111
        9911111111111111
        9911111111111199
        9991111111119999
        9911111111111999
        9111111111111199
        1111111111111119
        9111111111111111
        9111111111111119
        9111111111111111
        1111111111111111
        1111111111111119
        1111111111111119
        1111111111111111
        1111111111111111
        1111111111111111
        9111111111111111
        9911111111111111
        9911111111111199
        9991111111119999
        9911111111111999
        9111111111111199
        1111111111111119
        9111111111111111
        9111111111111119
        9111111111111111
        1111111111111111
        1111111111111119
        1111111111111119
        1111111111111111
        1111111111111111
        1111111111111111
        9111111111111111
        9911119911111111
        9911199991111199
        `, SpriteKind.Væg)
    tiles.placeOnTile(Væg7, tiles.getTileLocation(20, 1))
    Væg8 = sprites.create(img`
        9 9 9 9 9 c c 9 9 9 9 9 9 c c 9 
        9 c c 9 9 c 3 c 9 9 c c 9 c 3 c 
        9 c 3 c c 3 3 c 9 9 c 3 c 6 3 c 
        9 c 3 3 c 3 6 c 9 9 c 3 6 3 3 c 
        c c c 6 3 6 6 c 9 c c 3 3 3 c c 
        3 3 c c 6 6 c 6 c 6 c 6 3 3 c c 
        6 3 3 c c c 3 6 c 3 3 c c 6 c c 
        3 6 3 3 6 3 3 c c c 3 c 3 6 c 6 
        3 c 6 3 3 3 c c 3 c 3 c 3 3 c 3 
        c c c 3 3 c 3 6 3 3 3 c c 3 6 3 
        c c c 6 3 c 3 3 6 3 c 6 c 6 3 3 
        6 3 c 6 3 6 c 3 3 3 c 3 3 c 3 6 
        6 3 3 6 6 6 3 c 6 3 6 c 3 3 3 c 
        c 6 3 3 6 3 c c c 3 6 c c 6 3 c 
        c c 6 6 6 c c 6 c 6 3 c 6 6 6 c 
        c c c 6 6 c c 6 6 6 c c 6 6 c c 
        `, SpriteKind.Væg)
    tiles.placeOnTile(Væg8, tiles.getTileLocation(20, 7))
    Væg9 = sprites.create(img`
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        9111111111111111
        9911111111111111
        9911111111111199
        9991111111119999
        9911111111111999
        9111111111111199
        1111111111111119
        9111111111111111
        9111111111111119
        9111111111111111
        1111111111111111
        1111111111111119
        1111111111111119
        1111111111111111
        1111111111111111
        1111111111111111
        9111111111111111
        9911119911111111
        9911199991111199
        `, SpriteKind.Væg)
    tiles.placeOnTile(Væg9, tiles.getTileLocation(25, 1))
    Væg10 = sprites.create(img`
        99999cc999999cc9
        9cc99c3c99cc9c3c
        9c3cc33c99c3c63c
        9c33c36c99c3633c
        ccc6366c9cc333cc
        33cc66c6c6c633cc
        633ccc36c33cc6cc
        3633633ccc3c36c6
        3c6333cc3c3c33c3
        ccc33c36333cc363
        ccc63c3363c6c633
        63c636c333c33c36
        6336663c636c333c
        c63363ccc36cc63c
        cc666cc6c63c666c
        ccc66cc666cc66cc
        66666cc666666cc6
        6cc66c3c66cc6c3c
        6c3cc33c66c3c63c
        6c33c36c66c3633c
        ccc6366c6cc333cc
        33cc66c6c6c633cc
        633ccc36c33cc6cc
        3633633ccc3c36c6
        3c6333cc3c3c33c3
        ccc33c36333cc363
        ccc63c3363c6c633
        63c636c333c33c36
        6336663c636c333c
        c63363ccc36cc63c
        cc666cc6c63c666c
        ccc66cc666cc66cc
        66666cc666666cc6
        6cc66c3c66cc6c3c
        6c3cc33c66c3c63c
        6c33c36c66c3633c
        ccc6366c6cc333cc
        33cc66c6c6c633cc
        633ccc36c33cc6cc
        3633633ccc3c36c6
        3c6333cc3c3c33c3
        ccc33c36333cc363
        ccc63c3363c6c633
        63c636c333c33c36
        6336663c636c333c
        c63363ccc36cc63c
        cc666cc6c63c666c
        ccc66cc666cc66cc
        `, SpriteKind.Væg)
    tiles.placeOnTile(Væg10, tiles.getTileLocation(25, 7))
    Væg11 = sprites.create(img`
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        9111111111111111
        9911119911111111
        9911199991111199
        `, SpriteKind.Væg)
    tiles.placeOnTile(Væg11, tiles.getTileLocation(30, 0))
    Væg12 = sprites.create(img`
        99999cc999999cc9
        9cc99c3c99cc9c3c
        9c3cc33c99c3c63c
        9c33c36c99c3633c
        ccc6366c9cc333cc
        33cc66c6c6c633cc
        633ccc36c33cc6cc
        3633633ccc3c36c6
        3c6333cc3c3c33c3
        ccc33c36333cc363
        ccc63c3363c6c633
        63c636c333c33c36
        6336663c636c333c
        c63363ccc36cc63c
        cc666cc6c63c666c
        ccc66cc666cc66cc
        66666cc666666cc6
        6cc66c3c66cc6c3c
        6c3cc33c66c3c63c
        6c33c36c66c3633c
        ccc6366c6cc333cc
        33cc66c6c6c633cc
        633ccc36c33cc6cc
        3633633ccc3c36c6
        3c6333cc3c3c33c3
        ccc33c36333cc363
        ccc63c3363c6c633
        63c636c333c33c36
        6336663c636c333c
        c63363ccc36cc63c
        cc666cc6c63c666c
        ccc66cc666cc66cc
        66666cc666666cc6
        6cc66c3c66cc6c3c
        6c3cc33c66c3c63c
        6c33c36c66c3633c
        ccc6366c6cc333cc
        33cc66c6c6c633cc
        633ccc36c33cc6cc
        3633633ccc3c36c6
        3c6333cc3c3c33c3
        ccc33c36333cc363
        ccc63c3363c6c633
        63c636c333c33c36
        6336663c636c333c
        c63363ccc36cc63c
        cc666cc6c63c666c
        ccc66cc666cc66cc
        `, SpriteKind.Væg)
    tiles.placeOnTile(Væg12, tiles.getTileLocation(30, 6))
    Væg13 = sprites.create(img`
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        9111111111111111
        9911111111111111
        9911111111111199
        9991111111119999
        9911111111111999
        9111111111111199
        1111111111111119
        9111111111111111
        9111111111111119
        9111111111111111
        1111111111111111
        1111111111111119
        1111111111111119
        1111111111111111
        1111111111111111
        1111111111111111
        9111111111111111
        9911111111111111
        9911111111111199
        9991111111119999
        9911111111111999
        9111111111111199
        1111111111111119
        9111111111111111
        9111111111111119
        9111111111111111
        1111111111111111
        1111111111111119
        1111111111111119
        1111111111111111
        1111111111111111
        1111111111111111
        9111111111111111
        9911119911111111
        9911199991111199
        `, SpriteKind.Væg)
    tiles.placeOnTile(Væg13, tiles.getTileLocation(35, 1))
    Væg14 = sprites.create(img`
        9 9 9 9 9 c c 9 9 9 9 9 9 c c 9 
        9 c c 9 9 c 3 c 9 9 c c 9 c 3 c 
        9 c 3 c c 3 3 c 9 9 c 3 c 6 3 c 
        9 c 3 3 c 3 6 c 9 9 c 3 6 3 3 c 
        c c c 6 3 6 6 c 9 c c 3 3 3 c c 
        3 3 c c 6 6 c 6 c 6 c 6 3 3 c c 
        6 3 3 c c c 3 6 c 3 3 c c 6 c c 
        3 6 3 3 6 3 3 c c c 3 c 3 6 c 6 
        3 c 6 3 3 3 c c 3 c 3 c 3 3 c 3 
        c c c 3 3 c 3 6 3 3 3 c c 3 6 3 
        c c c 6 3 c 3 3 6 3 c 6 c 6 3 3 
        6 3 c 6 3 6 c 3 3 3 c 3 3 c 3 6 
        6 3 3 6 6 6 3 c 6 3 6 c 3 3 3 c 
        c 6 3 3 6 3 c c c 3 6 c c 6 3 c 
        c c 6 6 6 c c 6 c 6 3 c 6 6 6 c 
        c c c 6 6 c c 6 6 6 c c 6 6 c c 
        `, SpriteKind.Væg)
    tiles.placeOnTile(Væg14, tiles.getTileLocation(35, 7))
    Væg15 = sprites.create(img`
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        9111111111111111
        9911111111111111
        9911111111111199
        9991111111119999
        9911111111111999
        9111111111111199
        1111111111111119
        9111111111111111
        9111111111111119
        9111111111111111
        1111111111111111
        1111111111111119
        1111111111111119
        1111111111111111
        1111111111111111
        1111111111111111
        9111111111111111
        9911119911111111
        9911199991111199
        `, SpriteKind.Væg)
    tiles.placeOnTile(Væg15, tiles.getTileLocation(40, 1))
    Væg16 = sprites.create(img`
        99999cc999999cc9
        9cc99c3c99cc9c3c
        9c3cc33c99c3c63c
        9c33c36c99c3633c
        ccc6366c9cc333cc
        33cc66c6c6c633cc
        633ccc36c33cc6cc
        3633633ccc3c36c6
        3c6333cc3c3c33c3
        ccc33c36333cc363
        ccc63c3363c6c633
        63c636c333c33c36
        6336663c636c333c
        c63363ccc36cc63c
        cc666cc6c63c666c
        ccc66cc666cc66cc
        66666cc666666cc6
        6cc66c3c66cc6c3c
        6c3cc33c66c3c63c
        6c33c36c66c3633c
        ccc6366c6cc333cc
        33cc66c6c6c633cc
        633ccc36c33cc6cc
        3633633ccc3c36c6
        3c6333cc3c3c33c3
        ccc33c36333cc363
        ccc63c3363c6c633
        63c636c333c33c36
        6336663c636c333c
        c63363ccc36cc63c
        cc666cc6c63c666c
        ccc66cc666cc66cc
        66666cc666666cc6
        6cc66c3c66cc6c3c
        6c3cc33c66c3c63c
        6c33c36c66c3633c
        ccc6366c6cc333cc
        33cc66c6c6c633cc
        633ccc36c33cc6cc
        3633633ccc3c36c6
        3c6333cc3c3c33c3
        ccc33c36333cc363
        ccc63c3363c6c633
        63c636c333c33c36
        6336663c636c333c
        c63363ccc36cc63c
        cc666cc6c63c666c
        ccc66cc666cc66cc
        `, SpriteKind.Væg)
    tiles.placeOnTile(Væg16, tiles.getTileLocation(40, 7))
    Væg17 = sprites.create(img`
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        9111111111111111
        9911111111111111
        9911111111111199
        9991111111119999
        9911111111111999
        9111111111111199
        1111111111111119
        9111111111111111
        9111111111111119
        9111111111111111
        1111111111111111
        1111111111111119
        1111111111111119
        1111111111111111
        1111111111111111
        1111111111111111
        9111111111111111
        9911119911111111
        9911199991111199
        `, SpriteKind.Væg)
    tiles.placeOnTile(Væg17, tiles.getTileLocation(45, 1))
    Væg18 = sprites.create(img`
        99999cc999999cc9
        9cc99c3c99cc9c3c
        9c3cc33c99c3c63c
        9c33c36c99c3633c
        ccc6366c9cc333cc
        33cc66c6c6c633cc
        633ccc36c33cc6cc
        3633633ccc3c36c6
        3c6333cc3c3c33c3
        ccc33c36333cc363
        ccc63c3363c6c633
        63c636c333c33c36
        6336663c636c333c
        c63363ccc36cc63c
        cc666cc6c63c666c
        ccc66cc666cc66cc
        66666cc666666cc6
        6cc66c3c66cc6c3c
        6c3cc33c66c3c63c
        6c33c36c66c3633c
        ccc6366c6cc333cc
        33cc66c6c6c633cc
        633ccc36c33cc6cc
        3633633ccc3c36c6
        3c6333cc3c3c33c3
        ccc33c36333cc363
        ccc63c3363c6c633
        63c636c333c33c36
        6336663c636c333c
        c63363ccc36cc63c
        cc666cc6c63c666c
        ccc66cc666cc66cc
        66666cc666666cc6
        6cc66c3c66cc6c3c
        6c3cc33c66c3c63c
        6c33c36c66c3633c
        ccc6366c6cc333cc
        33cc66c6c6c633cc
        633ccc36c33cc6cc
        3633633ccc3c36c6
        3c6333cc3c3c33c3
        ccc33c36333cc363
        ccc63c3363c6c633
        63c636c333c33c36
        6336663c636c333c
        c63363ccc36cc63c
        cc666cc6c63c666c
        ccc66cc666cc66cc
        `, SpriteKind.Væg)
    tiles.placeOnTile(Væg18, tiles.getTileLocation(45, 7))
    Væg19 = sprites.create(img`
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        1111111111111111
        9111111111111111
        9911119911111111
        9911199991111199
        `, SpriteKind.Væg)
    tiles.placeOnTile(Væg19, tiles.getTileLocation(50, 0))
    Væg20 = sprites.create(img`
        99999cc999999cc9
        9cc99c3c99cc9c3c
        9c3cc33c99c3c63c
        9c33c36c99c3633c
        ccc6366c9cc333cc
        33cc66c6c6c633cc
        633ccc36c33cc6cc
        3633633ccc3c36c6
        3c6333cc3c3c33c3
        ccc33c36333cc363
        ccc63c3363c6c633
        63c636c333c33c36
        6336663c636c333c
        c63363ccc36cc63c
        cc666cc6c63c666c
        ccc66cc666cc66cc
        66666cc666666cc6
        6cc66c3c66cc6c3c
        6c3cc33c66c3c63c
        6c33c36c66c3633c
        ccc6366c6cc333cc
        33cc66c6c6c633cc
        633ccc36c33cc6cc
        3633633ccc3c36c6
        3c6333cc3c3c33c3
        ccc33c36333cc363
        ccc63c3363c6c633
        63c636c333c33c36
        6336663c636c333c
        c63363ccc36cc63c
        cc666cc6c63c666c
        ccc66cc666cc66cc
        66666cc666666cc6
        6cc66c3c66cc6c3c
        6c3cc33c66c3c63c
        6c33c36c66c3633c
        ccc6366c6cc333cc
        33cc66c6c6c633cc
        633ccc36c33cc6cc
        3633633ccc3c36c6
        3c6333cc3c3c33c3
        ccc33c36333cc363
        ccc63c3363c6c633
        63c636c333c33c36
        6336663c636c333c
        c63363ccc36cc63c
        cc666cc6c63c666c
        ccc66cc666cc66cc
        `, SpriteKind.Væg)
    tiles.placeOnTile(Væg20, tiles.getTileLocation(50, 6))
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.score() < 40) {
        mySprite.vy = 0
    } else if (info.score() <= 51) {
        Skib.vy = -100
    } else if (info.score() == 52) {
        Rød.vy = -150
    } else if (info.score() == 53) {
        Hvid.vy = -150
    } else if (info.score() == 54) {
        Brun.vy = -150
    } else if (info.score() == 55) {
        Hvid.vy = -150
    } else if (info.score() == 56) {
        Hvid.vy = 0
    }
})
info.onScore(41, function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    Transportfasen()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.score() < 40) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d e e e e e f . . . 
            . . . f e 4 e d d 4 f . . . . . 
            . . . f 2 2 e d d e f . . . . . 
            . . f f 5 5 f e e f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `,img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e d d 4 . . . . 
            . . . f 2 2 2 2 e d d e . . . . 
            . . f f 5 5 4 4 f e e f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `],
        200,
        false
        )
    } else if (info.score() == 52) {
        animation.runImageAnimation(
        Rød,
        [img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d e e e e e f . . . 
            . . . f e 4 e d d 4 f . . . . . 
            . . . f 2 2 e d d e f . . . . . 
            . . f f 5 5 f e e f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `,img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e d d 4 . . . . 
            . . . f 2 2 2 2 e d d e . . . . 
            . . f f 5 5 4 4 f e e f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `],
        200,
        false
        )
    } else if (info.score() == 53) {
        animation.runImageAnimation(
        Hvid,
        [img`
            . . . . f f f f f f . . . . . . 
            . . . f 1 f e e e e f f . . . . 
            . . f 1 1 1 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 1 1 1 1 e e f f f f . . . 
            . f 1 e f f f f 1 1 1 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 1 1 1 e d d 4 . . . . . 
            . . . f 1 1 1 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 1 f e e e e f f . . . . 
            . . f 1 1 1 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 1 1 1 1 e e f f f f . . . 
            . f 1 e f f f f 1 1 1 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d e e e e e f . . . 
            . . . f e 4 e d d 4 f . . . . . 
            . . . f 1 1 e d d e f . . . . . 
            . . f f 5 5 f e e f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `,img`
            . . . . f f f f f f . . . . . . 
            . . . f 1 f e e e e f f . . . . 
            . . f 1 1 1 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 1 1 1 1 e e f f f f . . . 
            . f 1 e f f f f 1 1 1 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 1 1 1 e d d 4 . . . . . 
            . . . f 1 1 1 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 1 f e e e e f f . . . . 
            . . f 1 1 1 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 1 1 1 1 e e f f f f . . . 
            . f 1 e f f f f 1 1 1 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e d d 4 . . . . 
            . . . f 1 1 1 1 e d d e . . . . 
            . . f f 5 5 4 4 f e e f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `],
        200,
        false
        )
    } else if (info.score() == 54) {
        animation.runImageAnimation(
        Brun,
        [img`
            . . . . f f f f f f . . . . . . 
            . . . f e f e e e e f f . . . . 
            . . f e e e f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e e e e e e e f f f f . . . 
            . f e e f f f f e e e e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f e e e e d d 4 . . . . . 
            . . . f e e e e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f e f e e e e f f . . . . 
            . . f e e e f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e e e e e e e f f f f . . . 
            . f e e f f f f e e e e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d e e e e e f . . . 
            . . . f e 4 e d d 4 f . . . . . 
            . . . f e e e d d e f . . . . . 
            . . f f 5 5 f e e f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `,img`
            . . . . f f f f f f . . . . . . 
            . . . f e f e e e e f f . . . . 
            . . f e e e f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e e e e e e e f f f f . . . 
            . f e e f f f f e e e e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f e e e e d d 4 . . . . . 
            . . . f e e e e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f e f e e e e f f . . . . 
            . . f e e e f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e e e e e e e f f f f . . . 
            . f e e f f f f e e e e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e d d 4 . . . . 
            . . . f e e e e e d d e . . . . 
            . . f f 5 5 4 4 f e e f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `],
        200,
        false
        )
    } else if (info.score() >= 55) {
        animation.runImageAnimation(
        Hvid,
        [img`
            . . . . f f f f f f . . . . . . 
            . . . f 1 f e e e e f f . . . . 
            . . f 1 1 1 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 1 1 1 1 e e f f f f . . . 
            . f 1 e f f f f 1 1 1 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 1 1 1 e d d 4 . . . . . 
            . . . f 1 1 1 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 1 f e e e e f f . . . . 
            . . f 1 1 1 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 1 1 1 1 e e f f f f . . . 
            . f 1 e f f f f 1 1 1 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d e e e e e f . . . 
            . . . f e 4 e d d 4 f . . . . . 
            . . . f 1 1 e d d e f . . . . . 
            . . f f 5 5 f e e f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `,img`
            . . . . f f f f f f . . . . . . 
            . . . f 1 f e e e e f f . . . . 
            . . f 1 1 1 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 1 1 1 1 e e f f f f . . . 
            . f 1 e f f f f 1 1 1 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 1 1 1 e d d 4 . . . . . 
            . . . f 1 1 1 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 1 f e e e e f f . . . . 
            . . f 1 1 1 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 1 1 1 1 e e f f f f . . . 
            . f 1 e f f f f 1 1 1 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e d d 4 . . . . 
            . . . f 1 1 1 1 e d d e . . . . 
            . . f f 5 5 4 4 f e e f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `],
        200,
        false
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Vaskemaskine, function (sprite, otherSprite) {
    sprites.destroy(vaskemaskine)
    sprites.destroy(Brun)
    info.changeScoreBy(1)
    Hvid = sprites.create(assets.image`heroWalkFront1`, SpriteKind.Player)
    tiles.placeOnRandomTile(Hvid, assets.tile`myTile12`)
    controller.moveSprite(Hvid, 100, 0)
    Hvid.vy = 300
    Hvid.ay = 300
    scene.cameraFollowSprite(Hvid)
    game.showLongText("Din t-shirt er nu ren!", DialogLayout.Bottom)
    game.showLongText("Find videre til bortskaffelsesfasen", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile13, function (sprite, location) {
    pause(100)
    game.showLongText("Du faldt i kemikalie søen... du bliver sendt tilbage til starten af levelet", DialogLayout.Bottom)
    pause(100)
    tiles.placeOnTile(Rød, tiles.getTileLocation(0, 14))
    tiles.placeOnTile(Hvid, tiles.getTileLocation(0, 14))
    tiles.placeOnTile(Brun, tiles.getTileLocation(0, 14))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Snavs, function (sprite, otherSprite) {
    sprites.destroy(mudder)
    sprites.destroy(Hvid)
    info.changeScoreBy(1)
    Brun = sprites.create(assets.image`mySprite1`, SpriteKind.Player)
    tiles.placeOnRandomTile(Brun, assets.tile`swampTile1`)
    controller.moveSprite(Brun, 100, 0)
    Brun.vy = 300
    Brun.ay = 300
    scene.cameraFollowSprite(Brun)
    game.showLongText("Åh nej, du landede i en mudderpøl...", DialogLayout.Bottom)
    game.showLongText("Spil videre for at finde vaskemaskinen", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile21`, function (sprite, location) {
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Point, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.score() < 40) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 2 2 2 f . . . 
            . . . . . e d d e 2 2 2 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e e e d d d f . . . 
            . . . . . f 4 d d e 4 e f . . . 
            . . . . . f e d d e 2 2 f . . . 
            . . . . f f f e e f 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `,img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 2 2 2 f . . . 
            . . . . . e d d e 2 2 2 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . 4 d d e 4 4 4 e f . . . 
            . . . . e d d e 2 2 2 2 f . . . 
            . . . . f e e f 4 4 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `],
        200,
        false
        )
    } else if (info.score() == 52) {
        animation.runImageAnimation(
        Rød,
        [img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 2 2 2 f . . . 
            . . . . . e d d e 2 2 2 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e e e d d d f . . . 
            . . . . . f 4 d d e 4 e f . . . 
            . . . . . f e d d e 2 2 f . . . 
            . . . . f f f e e f 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `,img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 2 2 2 f . . . 
            . . . . . e d d e 2 2 2 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . 4 d d e 4 4 4 e f . . . 
            . . . . e d d e 2 2 2 2 f . . . 
            . . . . f e e f 4 4 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `],
        200,
        false
        )
    } else if (info.score() == 53) {
        animation.runImageAnimation(
        Hvid,
        [img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 1 f . . . 
            . . . f f e e e e f 1 1 1 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 1 1 1 1 e f . 
            . . . f e 1 1 1 f f f f e 1 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 1 1 1 f . . . 
            . . . . . e d d e 1 1 1 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 1 f . . . 
            . . . f f e e e e f 1 1 1 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 1 1 1 1 e f . 
            . . . f e 1 1 1 f f f f e 1 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e e e d d d f . . . 
            . . . . . f 4 d d e 4 e f . . . 
            . . . . . f e d d e 1 1 f . . . 
            . . . . f f f e e f 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `,img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 1 f . . . 
            . . . f f e e e e f 1 1 1 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 1 1 1 1 e f . 
            . . . f e 1 1 1 f f f f e 1 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 1 1 1 f . . . 
            . . . . . e d d e 1 1 1 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 1 f . . . 
            . . . f f e e e e f 1 1 1 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 1 1 1 1 e f . 
            . . . f e 1 1 1 f f f f e 1 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . 4 d d e 4 4 4 e f . . . 
            . . . . e d d e 1 1 1 1 f . . . 
            . . . . f e e f 4 4 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `],
        200,
        false
        )
    } else if (info.score() == 54) {
        animation.runImageAnimation(
        Brun,
        [img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f e f . . . 
            . . . f f e e e e f e e e f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e e e e e e f . 
            . . . f e e e e f f f f e e f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e e e e f . . . 
            . . . . . e d d e e e e f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f e f . . . 
            . . . f f e e e e f e e e f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e e e e e e f . 
            . . . f e e e e f f f f e e f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e e e d d d f . . . 
            . . . . . f 4 d d e 4 e f . . . 
            . . . . . f e d d e e e f . . . 
            . . . . f f f e e f 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `,img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f e f . . . 
            . . . f f e e e e f e e e f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e e e e e e f . 
            . . . f e e e e f f f f e e f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e e e e f . . . 
            . . . . . e d d e e e e f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f e f . . . 
            . . . f f e e e e f e e e f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e e e e e e f . 
            . . . f e e e e f f f f e e f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . 4 d d e 4 4 4 e f . . . 
            . . . . e d d e e e e e f . . . 
            . . . . f e e f 4 4 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `],
        200,
        false
        )
    } else if (info.score() >= 55) {
        animation.runImageAnimation(
        Hvid,
        [img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 1 f . . . 
            . . . f f e e e e f 1 1 1 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 1 1 1 1 e f . 
            . . . f e 1 1 1 f f f f e 1 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 1 1 1 f . . . 
            . . . . . e d d e 1 1 1 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 1 f . . . 
            . . . f f e e e e f 1 1 1 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 1 1 1 1 e f . 
            . . . f e 1 1 1 f f f f e 1 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e e e d d d f . . . 
            . . . . . f 4 d d e 4 e f . . . 
            . . . . . f e d d e 1 1 f . . . 
            . . . . f f f e e f 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `,img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 1 f . . . 
            . . . f f e e e e f 1 1 1 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 1 1 1 1 e f . 
            . . . f e 1 1 1 f f f f e 1 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 1 1 1 f . . . 
            . . . . . e d d e 1 1 1 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 1 f . . . 
            . . . f f e e e e f 1 1 1 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 1 1 1 1 e f . 
            . . . f e 1 1 1 f f f f e 1 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . 4 d d e 4 4 4 e f . . . 
            . . . . e d d e 1 1 1 1 f . . . 
            . . . . f e e f 4 4 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `],
        200,
        false
        )
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Økobomuld, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 200)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    info.changeScoreBy(1)
})
function Produktionsfasen () {
    tiles.setCurrentTilemap(tilemap`level15`)
    game.splash("Velkommen til", "Produktionsfasen")
    game.showLongText("Produktion af tekstil er ofte placeret i Asien", DialogLayout.Bottom)
    game.showLongText("Det er ofte et farligt arbejde med lave lønninger og dårlige arvejdsforhold", DialogLayout.Bottom)
    game.showLongText("Du skal her svare rigtigt på 5 spørgsmål for at komme igennem produktionen", DialogLayout.Bottom)
    game.showLongText("Gå op til en væg og tryk \"A\" for at få spørgsmålet frem", DialogLayout.Bottom)
    mySprite = sprites.create(assets.image`myImage2`, SpriteKind.Player)
    controller.moveSprite(mySprite, 100, 0)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 5))
    scene.cameraFollowSprite(mySprite)
    Sprørsmål_1 = sprites.create(assets.image`Spørgsmål`, SpriteKind.Spørgsmål)
    tiles.placeOnTile(Sprørsmål_1, tiles.getTileLocation(5, 5))
    Dør1 = sprites.create(img`
        b d d d d d d c c d d d d d d c 
        d b b b b b c d d c b b b b b c 
        d b b b b c d b b b c b b b b c 
        d b b b c d b b b b b c b b b c 
        d b b c d b b b b b b b c b b c 
        d b c d b b b b b b b b b c b c 
        d c d b b b b b b b b b b b c b 
        c d b b b b b b b b b b b b b c 
        c d b b b b b b b b b b b b c d 
        d c b b b b b b b b b b b c d c 
        d b c b b b b b b b b b c d b c 
        d b b c b b b b b b b c d b b c 
        d b b b c b b b b b c d b b b c 
        d b b b b c b b b c d b b b b c 
        d b b b b b c b c d b b b b b c 
        c c c c c c b c d c c c c c c a 
        `, SpriteKind.Dør)
    tiles.placeOnTile(Dør1, tiles.getTileLocation(6, 5))
    Spørgsmål_2 = sprites.create(img`
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
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . d d . . . . . . . 
        `, SpriteKind.Spørgsmål)
    tiles.placeOnTile(Spørgsmål_2, tiles.getTileLocation(12, 5))
    Dør2 = sprites.create(img`
        b d d d d d d c c d d d d d d c 
        d b b b b b c d d c b b b b b c 
        d b b b b c d b b b c b b b b c 
        d b b b c d b b b b b c b b b c 
        d b b c d b b b b b b b c b b c 
        d b c d b b b b b b b b b c b c 
        d c d b b b b b b b b b b b c b 
        c d b b b b b b b b b b b b b c 
        c d b b b b b b b b b b b b c d 
        d c b b b b b b b b b b b c d c 
        d b c b b b b b b b b b c d b c 
        d b b c b b b b b b b c d b b c 
        d b b b c b b b b b c d b b b c 
        d b b b b c b b b c d b b b b c 
        d b b b b b c b c d b b b b b c 
        c c c c c c b c d c c c c c c a 
        `, SpriteKind.Dør)
    tiles.placeOnTile(Dør2, tiles.getTileLocation(13, 5))
    Spørgsmål3 = sprites.create(img`
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
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . d d . . . . . . . 
        `, SpriteKind.Spørgsmål)
    tiles.placeOnTile(Spørgsmål3, tiles.getTileLocation(19, 5))
    Dør3 = sprites.create(img`
        b d d d d d d c c d d d d d d c 
        d b b b b b c d d c b b b b b c 
        d b b b b c d b b b c b b b b c 
        d b b b c d b b b b b c b b b c 
        d b b c d b b b b b b b c b b c 
        d b c d b b b b b b b b b c b c 
        d c d b b b b b b b b b b b c b 
        c d b b b b b b b b b b b b b c 
        c d b b b b b b b b b b b b c d 
        d c b b b b b b b b b b b c d c 
        d b c b b b b b b b b b c d b c 
        d b b c b b b b b b b c d b b c 
        d b b b c b b b b b c d b b b c 
        d b b b b c b b b c d b b b b c 
        d b b b b b c b c d b b b b b c 
        c c c c c c b c d c c c c c c a 
        `, SpriteKind.Dør)
    tiles.placeOnTile(Dør3, tiles.getTileLocation(20, 5))
    Spørgsmål4 = sprites.create(img`
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
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . d d . . . . . . . 
        `, SpriteKind.Spørgsmål)
    tiles.placeOnTile(Spørgsmål4, tiles.getTileLocation(26, 5))
    Dør4 = sprites.create(img`
        b d d d d d d c c d d d d d d c 
        d b b b b b c d d c b b b b b c 
        d b b b b c d b b b c b b b b c 
        d b b b c d b b b b b c b b b c 
        d b b c d b b b b b b b c b b c 
        d b c d b b b b b b b b b c b c 
        d c d b b b b b b b b b b b c b 
        c d b b b b b b b b b b b b b c 
        c d b b b b b b b b b b b b c d 
        d c b b b b b b b b b b b c d c 
        d b c b b b b b b b b b c d b c 
        d b b c b b b b b b b c d b b c 
        d b b b c b b b b b c d b b b c 
        d b b b b c b b b c d b b b b c 
        d b b b b b c b c d b b b b b c 
        c c c c c c b c d c c c c c c a 
        `, SpriteKind.Dør)
    tiles.placeOnTile(Dør4, tiles.getTileLocation(27, 5))
    Spørgsmål5 = sprites.create(img`
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
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . d d . . . . . . . 
        `, SpriteKind.Spørgsmål)
    tiles.placeOnTile(Spørgsmål5, tiles.getTileLocation(33, 5))
    Dør5 = sprites.create(img`
        b d d d d d d c c d d d d d d c 
        d b b b b b c d d c b b b b b c 
        d b b b b c d b b b c b b b b c 
        d b b b c d b b b b b c b b b c 
        d b b c d b b b b b b b c b b c 
        d b c d b b b b b b b b b c b c 
        d c d b b b b b b b b b b b c b 
        c d b b b b b b b b b b b b b c 
        c d b b b b b b b b b b b b c d 
        d c b b b b b b b b b b b c d c 
        d b c b b b b b b b b b c d b c 
        d b b c b b b b b b b c d b b c 
        d b b b c b b b b b c d b b b c 
        d b b b b c b b b c d b b b b c 
        d b b b b b c b c d b b b b b c 
        c c c c c c b c d c c c c c c a 
        `, SpriteKind.Dør)
    tiles.placeOnTile(Dør5, tiles.getTileLocation(34, 5))
}
info.onScore(56, function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    Bortskaffelsesfasen()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    info.changeScoreBy(1)
})
info.onScore(35, function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Økobomuld)
    sprites.destroyAllSpritesOfKind(SpriteKind.Bomuld2)
    Produktionsfasen()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Skraldemand, function (sprite, otherSprite) {
    if (otherSprite == Skralde) {
        game.showLongText("Din t-shirt er slidt og kan ikke bruges mere, hvordan vil du smide den ud?", DialogLayout.Bottom)
        Dialog = true
        story.showPlayerChoices("Skraldespanden", "Tekstilaffald")
        if (story.checkLastAnswer("Tekstilaffald")) {
            info.changeScoreBy(1)
            music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
            sprites.destroy(otherSprite)
            Dialog = false
            game.gameOver(true)
        } else if (story.checkLastAnswer("Småt brændbart")) {
            info.changeLifeBy(-1)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Trøje, function (sprite, otherSprite) {
    sprites.destroy(tshirt)
    sprites.destroy(Rød)
    info.changeScoreBy(1)
    Hvid = sprites.create(assets.image`heroWalkFront1`, SpriteKind.Player)
    tiles.placeOnRandomTile(Hvid, assets.tile`Lyseblå0`)
    controller.moveSprite(Hvid, 100, 0)
    Hvid.vy = 300
    Hvid.ay = 300
    scene.cameraFollowSprite(Hvid)
    game.showLongText("Du har nu fået en ny hvid t-shirt", DialogLayout.Bottom)
    game.showLongText("Klar dig igennem banen uden at gøre den beskidt", DialogLayout.Bottom)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Spørgsmål, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        if (otherSprite == Sprørsmål_1) {
            game.showLongText("Hvilken tøjproduktionsform udleder mindst CO2?", DialogLayout.Bottom)
            Dialog = true
            story.showPlayerChoices("Slowfashion", "Fastfashion")
            if (story.checkLastAnswer("Slowfashion")) {
                info.changeScoreBy(1)
                music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
                sprites.destroy(otherSprite)
                sprites.destroy(Dør1)
                tiles.setWallAt(tiles.getTileLocation(6, 5), false)
                Dialog = false
            } else if (story.checkLastAnswer("Fastfashion")) {
                info.changeLifeBy(-1)
            }
        } else if (otherSprite == Spørgsmål_2) {
            game.showLongText("Hvor mange liter vand kræver det at producere en t-shirt?", DialogLayout.Bottom)
            story.showPlayerChoices("750 liter vand", "1.400 liter vand")
            if (story.checkLastAnswer("1.400 liter vand")) {
                info.changeScoreBy(1)
                music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
                sprites.destroy(otherSprite)
                sprites.destroy(Dør2)
                tiles.setWallAt(tiles.getTileLocation(13, 5), false)
                Dialog = false
            } else if (story.checkLastAnswer("750 liter vand")) {
                info.changeLifeBy(-1)
            }
        } else if (otherSprite == Spørgsmål3) {
            game.showLongText("Hvor mange kg CO2 bliver der udledt ved produktionen af 1kg tekstil?", DialogLayout.Bottom)
            story.showPlayerChoices("10 kg", "15 kg")
            if (story.checkLastAnswer("15 kg")) {
                info.changeScoreBy(1)
                music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
                sprites.destroy(otherSprite)
                sprites.destroy(Dør3)
                tiles.setWallAt(tiles.getTileLocation(20, 5), false)
                Dialog = false
            } else if (story.checkLastAnswer("10 kg")) {
                info.changeLifeBy(-1)
            }
        } else if (otherSprite == Spørgsmål4) {
            game.showLongText("Hvor mange ton nyt tøj sender danske tøjproducenter årligt til forbrænding?", DialogLayout.Bottom)
            story.showPlayerChoices("677 ton tøj", "425 ton tøj")
            if (story.checkLastAnswer("677 ton tøj")) {
                info.changeScoreBy(1)
                music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
                sprites.destroy(otherSprite)
                sprites.destroy(Dør4)
                tiles.setWallAt(tiles.getTileLocation(27, 5), false)
                Dialog = false
            } else if (story.checkLastAnswer("425 ton tøj")) {
                info.changeLifeBy(-1)
            }
        } else if (otherSprite == Spørgsmål5) {
            game.showLongText("På hvilket kontinent ligger de fleste virksomheder deres tøjproduktion", DialogLayout.Bottom)
            story.showPlayerChoices("Asien", "Afrika")
            if (story.checkLastAnswer("Asien")) {
                info.changeScoreBy(1)
                music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
                sprites.destroy(otherSprite)
                sprites.destroy(Dør5)
                tiles.setWallAt(tiles.getTileLocation(34, 5), false)
                Dialog = false
            } else if (story.checkLastAnswer("Afrika")) {
                info.changeLifeBy(-1)
            }
        }
    }
})
info.onScore(52, function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Væg)
    Brugsfasen()
})
let Bomuld2: Sprite = null
let ØkoBomuld: Sprite = null
let Dialog = false
let Dør5: Sprite = null
let Spørgsmål5: Sprite = null
let Dør4: Sprite = null
let Spørgsmål4: Sprite = null
let Dør3: Sprite = null
let Spørgsmål3: Sprite = null
let Dør2: Sprite = null
let Spørgsmål_2: Sprite = null
let Dør1: Sprite = null
let Sprørsmål_1: Sprite = null
let Brun: Sprite = null
let Væg20: Sprite = null
let Væg19: Sprite = null
let Væg18: Sprite = null
let Væg17: Sprite = null
let Væg16: Sprite = null
let Væg15: Sprite = null
let Væg14: Sprite = null
let Væg13: Sprite = null
let Væg12: Sprite = null
let Væg11: Sprite = null
let Væg10: Sprite = null
let Væg9: Sprite = null
let Væg8: Sprite = null
let Væg7: Sprite = null
let Væg6: Sprite = null
let Væg5: Sprite = null
let Væg4: Sprite = null
let Væg3: Sprite = null
let Væg2: Sprite = null
let Væg1: Sprite = null
let Point10: Sprite = null
let Point9: Sprite = null
let Point8: Sprite = null
let Point7: Sprite = null
let Point6: Sprite = null
let Point5: Sprite = null
let Point4: Sprite = null
let Point3: Sprite = null
let Point2: Sprite = null
let Point1: Sprite = null
let mySprite: Sprite = null
let Skralde: Sprite = null
let Hvid: Sprite = null
let Skib: Sprite = null
let vaskemaskine: Sprite = null
let mudder: Sprite = null
let tshirt: Sprite = null
let Rød: Sprite = null
game.splash("Velkommen til", "t-shirtens livscyklus")
game.splash("Du vil komme igennem", "t-shirtens 5 faser")
info.setLife(5)
info.setScore(0)
Materialefasen()
forever(function () {
    if (Dialog == false) {
        controller.moveSprite(mySprite, 100, 0)
    } else if (Dialog == true) {
        controller.moveSprite(mySprite, 0, 0)
    }
})
game.onUpdateInterval(500, function () {
    if (info.score() < 35) {
        ØkoBomuld = sprites.create(assets.image`øko-bomuld`, SpriteKind.Økobomuld)
        Bomuld2 = sprites.create(assets.image`bomuld`, SpriteKind.Bomuld2)
        ØkoBomuld.setPosition(randint(0, scene.screenWidth()), 0)
        Bomuld2.setPosition(randint(0, scene.screenWidth()), 0)
        ØkoBomuld.setVelocity(0, 50)
        Bomuld2.setVelocity(0, 50)
        ØkoBomuld.setFlag(SpriteFlag.DestroyOnWall, true)
        Bomuld2.setFlag(SpriteFlag.DestroyOnWall, true)
    }
})
