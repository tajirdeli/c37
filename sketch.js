var hypnoticBall, database;
var position;

var gameState=0 
var playerCount
var distance=0

var allPlayers
var game,form,player
function setup(){
  database = firebase.database();
 
  createCanvas(500,500);
game=new Game() 
game.GetState()
game.Start()
}

function draw(){
  background("white");
  if (playerCount===4){
    game.updateState(1)
  }
 if( gameState===1){
   game.play()
 }
}