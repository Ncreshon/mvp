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
  $scope.hey = 'hey you';
  $scope.favorite = ()=> {
    console.log('hey')
  };
  $scope.triedit = () => {
    console.log('yep')
  }
  $scope.recipes = [{"publisher":"The Pioneer Woman","f2f_url":"http://food2fork.com/view/fbc599","title":"Loaded Nachos","source_url":"http://thepioneerwoman.com/cooking/2013/05/loaded-nachos/","recipe_id":"fbc599","image_url":"http://static.food2fork.com/nachos294e.jpg","social_rank":99.99999957866746,"publisher_url":"http://thepioneerwoman.com"}];
  $scope.submit = function () {
    Search.getFood($scope.text).then((recipes) => {
      $scope.recipes = recipes
      console.log($scope.recipes)
    })
    
  };

});

