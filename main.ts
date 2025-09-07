 class NewTilemapSystem {
   constructor() { }
   //% block="create tilemap collision handler $this(system) %col %row %sprite=variables_get(sprite) %tileImage=tileset_tile_picker"
    createTilemapCollisionHandler(col: number, row: number, sprite: Sprite, tileImage: Image) {
        const tm = game.currentScene().tileMap 
      // for the obstacle to add for x axis
        if (tm.isObstacle(col, row)) {
            const tile = sprites.create(tileImage)
            if(sprite.overlapsWith(tile) && sprite.x <= tile.x) {
                sprite.x -= 1
            } else if (sprite.overlapsWith(tile) && sprite.x >= tile.x) {
                sprite.x += 1
            }
       // for the obstacle to add for the y axis
            if (sprite.overlapsWith(tile) && sprite.y <= tile.y) {
                sprite.y -= 1
            } else if (sprite.overlapsWith(tile) && sprite.y <= tile.y) {
                sprite.y -= 1
            }
        }
    }
 }

