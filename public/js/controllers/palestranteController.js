myApp.controller('palestrantesController', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {
       $rootScope.$emit('tabChange', 3);
       $http.get("/assets/palestrante.json").then(function(response){
            $scope.palestrantes = response.data;
            $scope.palestrantes.forEach(function(palestrante) {
                if (!palestrante.image) {
                    palestrante.image = "/assets/images/palestrantes/" + palestrante.name.replace(" ", "") + ".jpg";
                }
            });
       });
       
           var modal = $('.modal-backdrop');
    
    if (modal) {
        modal.remove();
    }
}]);