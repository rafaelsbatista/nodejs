myApp.controller('mainController', ['$scope', '$rootScope', function($scope, $rootScope) {
    $rootScope.$emit('tabChange', 0);
    
    var modal = $('.modal-backdrop');
    
    if (modal) {
        modal.remove();
    }
}]);