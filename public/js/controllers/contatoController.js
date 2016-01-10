myApp.controller('contatoController', ['$scope', '$rootScope', function($scope, $rootScope) {
    $rootScope.$emit('tabChange', 3);
}]);