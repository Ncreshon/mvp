angular.module('mvpApp').controller('searchCtrl', ['$http', '$scope', function ($http, $scope) {
  $scope.text = 'nachos';
  $scope.submit = function () {
    console.log(this.text)
    $http({
      method: 'GET',
      url: 'http://localhost:3000/search',
      headers:  { search: this.text },
      params:  { search: this.text },

    }).then((response) => {
      console.log(response + 'hey')
    }, (response) => {
      console.log(response)
    });
  };


  
}]);

