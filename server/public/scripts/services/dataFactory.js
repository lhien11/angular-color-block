colorBlocks.factory('DataFactory', [function() {
  console.log("data factory running");
  var colors = ['red', 'blue', 'magenta', 'green', 'pink'];
  var colorsArray = ["AntiqueWhite", "Aqua", "Aquamarine", "Azure", "brown", "purple"];

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
