angular
  .module('myApp',[])
  .controller('myController',myController);

function myController(){
  var vm=this;
  vm.color1Value = 6;
}
