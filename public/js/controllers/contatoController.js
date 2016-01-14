myApp.controller('contatoController', ['$scope', '$rootScope', function($scope, $rootScope) {
    $rootScope.$emit('tabChange', 3);
    
    var modal = $('.modal-backdrop');
    
    if (modal) {
        modal.remove();
    }
}]);