function initState(){
    const state = {
        player: 'Pesho',
        wizard: {
            width: 82,
            height:100,
            startx: Math.floor(Math.random()*400),
            starty: Math.floor(Math.random()*200),
        },
        keys: {}
    }

    return state;
}