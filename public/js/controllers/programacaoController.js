myApp.controller("programacaoController", ["$scope", "$rootScope", "$http", function($scope, $rootScope, $http){
    $rootScope.$emit('tabChange', 2);
    
    var modal = $('.modal-backdrop');
    
    if (modal) {
        modal.remove();
    }
    $http.get("/assets/horario.json").then(function(response){
        $scope.dates = response.data;
    });
}]);