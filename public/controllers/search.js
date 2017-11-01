const mvpApp = angular.module('mvpApp');

mvpApp.factory('Search', ($http) => {
  
  return  {
    getFood: (food) => {
      return $http({
        method: "GET",
        url: "http://localhost:3000/search",
        headers: { search: food }
      }).then(({ data: {recipes}}) => recipes);
      
  
  }, 
}
  
});

mvpApp.controller('searchCtrl', function ($http, $scope, Search) {
  $scope.text = 'nachos';
  $scope.recipes = [];
  $scope.submit = function () {
    Search.getFood($scope.text).then((recipes) => {
      $scope.recipes = recipes
      console.log($scope.recipes)
    })
    
  };

});

