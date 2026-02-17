 /*
      const score ={
        wins:0,
        losses:0,
        ties: 0
      };*/
      let score = JSON.parse(localStorage.getItem('score')) || {
          wins: 0,
          losses:0,
          ties: 0
        };
      //console.log(JSON.parse(localStorage.getItem('score')));
      updateScoreElement();



      /*
      if (score === null){
        score = {
          wins: 0,
          losses:0,
          ties: 0
        };
      }
*/
      function playGame(playerMove){
        // this code is for comparing both my and computer ans and store the result in result variable
        const computerMove = pickComputerMove();
        let result = '';
        if (playerMove === 'rock'){
          if (computerMove === 'rock'){
            result = 'Tie.';
          }else if (computerMove === 'paper'){
            result = 'You lose.';
          }else if (computerMove === 'scissors'){
            result = 'You win.';
          }

        }else if (playerMove === 'paper'){
          if (computerMove === 'rock'){
            result = 'You win.';
          }else if (computerMove === 'paper'){
            result = 'Tie.';
          }else if (computerMove === 'scissors'){
            result = 'You lose.';
          }
          
        }else if (playerMove === 'scissors'){
          if (computerMove === 'rock'){
            result = 'You lose.';
          }else if (computerMove === 'paper'){
            result = 'You win.';
          }else if (computerMove === 'scissors'){
            result = 'Tie.';
          }
        }
      
        if (result === 'You win.'){
          score.wins += 1;
        }else if (result === 'You lose.'){
          score.losses += 1;
        }else if(result === 'Tie.'){
          score.ties += 1;
        }
        
        localStorage.setItem('score', JSON.stringify(score));
        updateScoreElement();
        document.querySelector('.js-result').innerHTML = result;
        document.querySelector('.js-move').innerHTML = `
        You
        <img src="images/${playerMove}-emoji.png" class="move-icon">
        <img src="images/${computerMove}-emoji.png" class="move-icon">
        Computer`;//here we satrted from the //beginning since if we mantain the tab some sppace is coming in the output window so
      }
      

      function updateScoreElement(){
        document.querySelector('.js-score').innerHTML = `wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
      }
      
      //console.log(randomNumber);
      function pickComputerMove(){
        const randomNumber = Math.random();
        // this code is for computer random number generation and assigning the rock, paper, 
        // and scissor based on respective ranges.
        //console.log(randomNumber);
        let computerMove = '';
        if (randomNumber >= 0 && randomNumber < 1/3){
          computerMove = 'rock';
        }else if(randomNumber >= 1/3 && randomNumber < 2/3){
          computerMove = 'paper';
        }else if (randomNumber >= 2/3 && randomNumber < 1){
          computerMove = 'scissors';
        }
        return computerMove;
      }