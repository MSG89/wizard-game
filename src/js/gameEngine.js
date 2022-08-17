function start(state, game){
    game.createWizard(state.wizard);

    window.requestAnimationFrame((timestamp) => gameLoop(state, game, timestamp));
}

function gameLoop(state, game, timestamp){

    const {wizard} = state;
    const {wizardElement} = game;

    modifyWizardPosition(state, game);


    //spawn enemy
    if(timestamp > state.bugStats.nextSpawnTimestamp){
        game.createBug(state.bugStats);
        state.bugStats.nextSpawnTimestamp = timestamp + Math.random()*state.bugStats.maxSpawnInterval;
    }
    

    //Render
    wizardElement.style.left = wizard.posX + 'px';
    wizardElement.style.top = wizard.posY + 'px';
    
    window.requestAnimationFrame(gameLoop.bind(null, state, game));
}

function modifyWizardPosition(state, game){
    const {wizard} = state;

//move wizard R/L
if (state.keys.KeyD){
    wizard.posX = Math.min(wizard.posX + wizard.speed, game.gameScreen.offsetWidth - wizard.width);
}
if (state.keys.KeyA){
    wizard.posX = Math.max(wizard.posX - wizard.speed, 0);
}
//move wizard U/D
if(state.keys.KeyW){
    wizard.posY = Math.max(wizard.posY - wizard.speed, 0);
}
if(state.keys.KeyS){
    wizard.posY = Math.min(wizard.posY + wizard.speed,game.gameScreen.offsetHeight - wizard.height);
}

}