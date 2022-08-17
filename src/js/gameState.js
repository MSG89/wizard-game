function initState(){

    let startX = Math.floor(Math.random()*400);
    let startY = Math.floor(Math.random()*200);

    const state = {
        player: 'Pesho',
        wizard: {
            width: 82,
            height:100,

            posX: startX,
            posY: startY,
            speed: 2,
        },
        keys: {}
    }

    return state;
}