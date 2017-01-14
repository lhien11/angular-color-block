colorBlocks.controller('GameController', ['DataFactory', function(DataFactory) {

console.log('game controller running');

var self = this;
//self.colors = ['red', 'blue', 'magenta', 'green', 'pink'];  move this to the factory
self.colors = DataFactory.colors;

// start game
init();

// resets game to the starting state
function init() {
  self.messageText = "";
  self.currentColor = self.colors[randomNumber(0, self.colors.length - 1)];
  self.colorPrompt = 'Can you find the ' + self.currentColor + ' block?';
}

// click handler for guessing colors
self.handleInput = function(clickedColor) {
  if(clickedColor === self.currentColor) {
    alert('You got it!\n\nNow try another!');
    init();
  } else {
    self.messageText = 'Oh no! You guessed wrong!';
  }
};

//UTILITY FUNCTIONS
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
}]);
