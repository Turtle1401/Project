let score = JSON.parse(localStorage.getItem('score')) ||{
  wins : 0,
  losses :0,
  ties :0
};
/*
if(score === null){
  score ={
    wins :0,
    losses : 0,
    ties : 0
  };
}
*/
UpdateScore();

function playGame (playerMove){
  const ComputerMove = pickComputerMove();
  let result ='';
  if (playerMove === 'Rock'){
    if(ComputerMove ==='Rock'){
      result ='Tie.';
    }else if(ComputerMove ==='Paper'){
      result ='You lose.';
    }else if(ComputerMove ==='Scissors'){
      result ='You win.';
      }

    }else if(playerMove ==='Paper'){
      if(ComputerMove ==='Rock'){
        result ='You win.';
      }else if(ComputerMove ==='Paper'){
        result ='Tie.';
      }else if(ComputerMove ==='Scissors'){
        result= 'You lose.';
      }
      
    }else if(playerMove ==='Scissors'){
      if(ComputerMove ==='Rock'){
        result ='You lose.';
      }else if(ComputerMove ==='Paper'){
        result ='You win.';
      }else if(ComputerMove ==='Scissors'){
        result= 'Tie.';
      }
    }
 
    if(result === 'You win.'){
      score.wins+=1;
    }else if(result ==='You lose.'){
      score.losses+=1;
    }else if(result ==='Tie.'){
      score.ties+=1;
    }

    localStorage.setItem('score' , JSON.stringify(score));
    
    UpdateScore();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML =`You <img src="images/${playerMove}-emoji.png" class="move-icon">
    <img src="images/${ComputerMove}-emoji.png" class="move-icon"> Computer`;
}
  
  function UpdateScore (){
      document.querySelector('.js-score')
      .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    }
function pickComputerMove(){
  let ComputerMove ='';
  const RandomNumber = Math.random();
  if(RandomNumber >=0 && RandomNumber <1/3){
    ComputerMove ='Rock';
  }else if(RandomNumber >=1/3 && RandomNumber <2/3){
    ComputerMove ='Paper';
  }else if(RandomNumber >=2/3 && RandomNumber <1){
    ComputerMove ='Scissors';
  }
  return ComputerMove;
}