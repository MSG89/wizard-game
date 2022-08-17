function start(state, game){
    game.createWizard(state.wizard);

    window.requestAnimationFrame(gameLoop.bind(null, state, game));
}

function gameLoop(state, game){

    const {wizard} = state;
    const {wizardElement} = game;

    //move wizard R/L
    if (state.keys.KeyD){
        state.wizard.posX += wizard.speed;
    }
    if (state.keys.KeyA){
        state.wizard.posX -= wizard.speed;
    }
    //move wizard U/D
    if(state.keys.KeyW){
        state.wizard.posY -= wizard.speed;
    }
    if(state.keys.KeyS){
        state.wizard.posY += wizard.speed;
    }

    //Render

    wizardElement.style.left = wizard.posX + 'px';
    wizardElement.style.top = wizard.posY + 'px';
    
    window.requestAnimationFrame(gameLoop.bind(null, state, game));
}