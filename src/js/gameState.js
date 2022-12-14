function initState(){

    let startX = Math.floor(Math.random()*400);
    let startY = Math.floor(Math.random()*200);

    const state = {
        player: 'Pesho',
        score: 0,
        scoreRate: 1,
        killScore: 1000,
        gameOver: false,
        wizard: {
            width: 82,
            height:100,

            posX: startX,
            posY: startY,
            speed: 4,
        },
        bugStats:{
            width: 50,
            height: 50,
            nextSpawnTimestamp: 0,
            maxSpawnInterval: 1500,
            speed: 10,
        },
        fireball:{
          width:20,
          height:20,
          speed: 16,
          nextSpawnTimestamp: 0,  
          firerate: 300,
        },
        keys: {
            KeyA: false,
            KeyD: false,
            KeyW: false,
            KeyS: false,
            Space: false,
        }
    }

    return state;
}