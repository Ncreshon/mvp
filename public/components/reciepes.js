angular.module('mvpApp')

.component('reciepesList', {

  templateUrl: './templates/reciepes.html',
  bindings: {
    recipes:'<',
    favorite:'<',
    triedit: '<',
  }
});

  
  