myApp.controller('mainController', ['$scope', '$rootScope', function($scope, $rootScope) {
    $rootScope.$emit('tabChange', 0);
}]);