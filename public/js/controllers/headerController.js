myApp.controller('headerController', ['$scope', '$rootScope', function($scope, $rootScope) {
    var unbind = $rootScope.$on('tabChange', function(evt, tab){
        $scope.currentTab = tab;
    });

    $scope.$on('$destroy', unbind);
    
    $scope.collapse = function () {
            $('.navbar-collapse.in').collapse('hide');
    }
}]);