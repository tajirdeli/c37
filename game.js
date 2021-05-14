class Game{
constructor(){

}
GetState(){
    var GS=database.ref("gameState")
    GS.on("value",function(data){
        gameState=data.val()
    })
}
updateState(state){
    database.ref("/").update({
        gameState:state
    })
}
 async Start(){
     if (gameState===0){
         player=new Player()
         var playerCountRef = await database.ref('playerCount').once("value"); 
         if(playerCountRef.exists())
         { playerCount = playerCountRef.val();
             player.getCount(); }
        
         form= new Form()
         form.display() 
     }
 }
 play(){
form.hide()
textSize(30)
text("Game Start",100,100)
Player.getPlayerInfo()
if(allPlayers!==undefined){
    var y=130
    for(var plr in allPlayers){

    
    y=y+30
    textSize(20)
    text(allPlayers[plr].name+":"+allPlayers[plr].distance,100,y)
}
}
if(keyIsDown(UP_ARROW)&&player.index!==null){
    player.distance=player.distance+30
    player.update()
}
 }
 
}