colorBlocks.controller('SettingsController', ['DataFactory', function(DataFactory) {
  console.log("settings controller running");

  // vm = view model
  var vm = this;
  vm.colors = DataFactory.colors;
  vm.newColor = '';
  vm.colorToAdd = DataFactory.colorsArray;

  vm.addColor = function(color) {
    console.log("Added color");
    DataFactory.addColor(color);
  };

  vm.removeColor = function(index){
    console.log("Removed Color");
    DataFactory.removeColor(index);
  };

  vm.changeColor = function(index, color) {
    console.log("Changed Color");
    DataFactory.changeColor(index, color);
  };

}]);
