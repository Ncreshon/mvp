angular.module('mvpApp').controller('searchCtrl', ['$http', '$scope', function ($http, $scope) {
  $scope.text = 'nachos';
  $scope.reciepes = '';
  $scope.submit = function () {
    console.log(this.text)
    $http({
      method: 'GET',
      url: 'http://localhost:3000/search',
      headers:  { search: this.text },
      params:  { search: this.text },

    }).then(function successCallback(reciepes) {
      $scope.reciepes = reciepes.data.recipes;
    }, function errorCallback(reciepes) {
      console.error(reciepes);
    });
  };

}]);

