var selector=document.createElement("div");
var rock_selector=document.createElement("img");
var paper_selector=document.createElement("img");
var scissors_selector=document.createElement("img");

const weapons = {
    Rock: {weakTo: 'Paper', strongTo: 'Scissors'},
    Paper: {weakTo: 'Scissors', strongTo: 'Rock'},
    Scissors: {weakTo: 'Rock', strongTo: 'Paper'}
 }
 
//  if (weapons[myChoice].strongTo === enemyChoice) {
//      // I won
//      return;
//  }
 
//  if (weapons[myChoice].weakTo === enemyChoice) {
//      // I Lost
//      return;
//  }
 
 // tie
rock_selector.src='rock.png';
rock_selector.id="rock";
paper_selector.src='paper.png';
paper_selector.id="paper";
scissors_selector.src='scissors.png';
scissors_selector.id="scissors";

rock_selector.onclick=function(){
    this.parentElement.dataset.select="Rock"
    
    cgsp=JSON.parse(JSON.stringify(cgs));
    cgsp.choice="Rock";
    cgsp.choicest=weapons.Rock;
    gs.push(cgsp);
    cgs.player=cgs.player+1;
    drawGame(cgs);
  };
  paper_selector.onclick=function(){
    this.parentElement.dataset.select="Paper"
    cgsp=JSON.parse(JSON.stringify(cgs));
    cgsp.choice="Paper";
    cgsp.choicest=weapons.Paper;
    gs.push(cgsp);
    cgs.player=cgs.player+1;
    drawGame(cgs);
  };
  scissors_selector.onclick=function(){
    this.parentElement.dataset.select="Scissors"
    cgsp=JSON.parse(JSON.stringify(cgs));
    cgsp.choice="Scissors";
    cgsp.choicest=weapons.Scissors;
    gs.push(cgsp);
    cgs.player=cgs.player+1;
    drawGame(cgs);
  };

selector.append(rock_selector);
selector.append(paper_selector);
selector.append(scissors_selector);
var cgs={
    player:1,
    choice:null,
    choicest:null
}
var gs=[];
function empty(thingtoempty){
    try {
        while (thingtoempty.firstChild) {
            thingtoempty.removeChild(thingtoempty.lastChild);
        }
    } catch (error) {
        
    }
    
}

function drawGame(gamestate){
    empty(document.getElementById("p1ch"));
    empty(document.getElementById("p2ch"));
    if (gamestate.player==1) {
        var p1choice=document.createElement("div");
        p1choice.id="p1ch";
p1choice.innerHTML="Player 1 make a choice"
p1choice.append(selector);
document.getElementsByTagName("body")[0].append(p1choice);

    }
    else if(gamestate.player==2){
        var p2choice=document.createElement("div");
        p2choice.id="p2ch";
p2choice.innerHTML="Player 2 make a choice"
p2choice.append(selector);
document.getElementsByTagName("body")[0].append(p2choice);
    }else {
        document.getElementsByTagName("body")[0].append(endScreen(gs));
    }
    console.log(cgs);
    console.log(gs);
    
}
function endScreen(gameState){
    var endSc=document.createElement("div");

    var winner=document.createElement("div");
    winner.id="winner";
    //compare
    if (gameState[0].choice === gameState[1].choicest.weakTo) {
        winner.innerHTML="The winner is Player 1!";
        
    }
    else if(gameState[0].choice === gameState[1].choicest.strongTo){
        winner.innerHTML="The winner is Player 2!";
    }else{
    winner.innerHTML="It's a tie! try again.";
    }
    endSc.append(winner);
    return endSc;
    //tie

    
}

console.log(weapons);
console.log(cgs);
drawGame(cgs);