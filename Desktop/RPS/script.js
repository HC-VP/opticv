



//Show choices options once play button is clicked 

document.getElementById('play').addEventListener('click', function() {

  console.log('Play button clicked');
  document.getElementById('play').style.display = 'none';
  document.getElementById('rock').style.display = 'block';
  document.getElementById('paper').style.display = 'block';
  document.getElementById('scissors').style.display = 'block';
  console.log('Choices should be visible');
    
    
});





//Get computer choice

function getComputerChoice() 
{ const choices = ['rock', 'paper', 'scissors']; 
  const randomIndex = Math.floor(Math.random() * choices.length); 
    return choices[randomIndex]; 
} 

// Function to determine the winner //

function determineWinner(playerChoice, computerChoice) 

    { if (playerChoice === computerChoice) 
        { return "It's a tie!"; }
      if ((playerChoice === 'rock' && computerChoice === 'scissors') || (playerChoice === 'paper' && computerChoice === 'rock') || (playerChoice === 'scissors' && computerChoice === 'paper') ) 
        { return "You win!"; } 
      else 
        { return "You lose!"; } 
    } 
        
        
// Function to play the game //
        
function playGame(playerChoice) 
    { const computerChoice = getComputerChoice();
      const result = determineWinner(playerChoice, computerChoice); 

      document.getElementById('result').textContent = `You chose ${playerChoice}. The computer chose ${computerChoice}. ${result}`; 
    } 
    
// Adding event listeners to the buttons //

document.getElementById('rock').addEventListener('click', function()
{ playGame('rock');

}); 

document.getElementById('paper').addEventListener('click', function() 
{ playGame('paper'); 

}); 

document.getElementById('scissors').addEventListener('click', function()
{ playGame('scissors'); 

});

