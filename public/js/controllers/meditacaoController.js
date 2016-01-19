myApp.controller('meditacaoController', ['$scope', '$rootScope', "$interval", "$http", function ($scope, $rootScope, $interval, $http) {
    $rootScope.$emit('tabChange', 1);
       
    
    
    
    var modal = $('.modal-backdrop');
        
    var i = 0;
    $(".shinybox").shinybox();
    
    if (modal) {
        modal.remove();
    }
    $http.get("/assets/palestrante.json").then(function(response){
            $scope.palestrantes = response.data;
            $scope.palestrantes.forEach(function(palestrante) {
                if (!palestrante.image) {
                    palestrante.image = "/assets/images/palestrantes/" + palestrante.name.replace(" ", "") + ".jpg";
                }
            });
            var func = function() {
                $scope.palestrante = {};
                $scope.palestrante.image = $scope.palestrantes[i].image; 
                $scope.palestrante.name = $scope.palestrantes[i].name; 
                $scope.palestrante.tema = $scope.palestrantes[i].tema; 
                i = (i + 1) % $scope.palestrantes.length;
            }
            func();
            $interval(func, 5000);
       });
}]);