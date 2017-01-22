colorBlocks.factory('DataFactory', [function() {
  console.log("data factory running");
  var colors = ['red', 'blue', 'magenta', 'green', 'pink'];
  var colorsArray = ["black", "turquoise", "Azure", "brown", "purple"];
  function shuffle(array){
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;

}



  // public api
  // ******************************** APIs ************************************//
  var publicApi = {
      // update color
      colors: colors,
      colorsArray: colorsArray,
      addColor: function(color) {
        colors.push(color);
      },
      removeColor: function(index) {
        colors.splice(index, 1);
      },
      changeColor: function(index, color) {
        colors[index] = color;
      }
  };
  return publicApi;
}]);
