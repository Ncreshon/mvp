const mvpApp = angular.module('mvpApp');

mvpApp.factory('Search', ($http) => {
  const service = {};
  return service;
});

mvpApp.controller('searchCtrl', ['$http', '$scope', 'Search', function ($http, $scope, Search) {
  $scope.text = 'nachos';
  $scope.submit = function () {
    $http({
      method: 'GET',
      url: 'http://localhost:3000/search',
      headers: { search: this.text },

    }).then(function successCallback({ data }) {
      Search.reciepes = data.recipes;
      console.log(Search.reciepes);
    }, function errorCallback(error) {
      console.error(error);
    });
  };

}]);

