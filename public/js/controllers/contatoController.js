myApp.controller('contatoController', ['$scope', '$rootScope' ,'$http', '$window', function($scope, $rootScope, $http, $window) {
    $rootScope.$emit('tabChange', 3);
    
    var modal = $('.modal-backdrop');
    
    if (modal) {
        modal.remove();
    }
    
    $scope.errors = [];
    $scope.msgs = [];
    
    $scope.sendEmail = function() {
        $scope.errors.splice(0, $scope.errors.length); // remove all error messages
        $scope.msgs.splice(0, $scope.msgs.length);
         $http.post('/assets/php/insert.php', {'uname': $scope.nome, 'text': $scope.text, 'email': $scope.email}
                        ).success(function(data, status, headers, config) {
                            if (!data.msg && data.msg != '')
                            {
                                $scope.msgs.push(data.msg);
                                $scope.nome = '';
                                $scope.text = '';
                                $scope.email = '';
                                $window.alert("Email enviado com sucesso");
                            }
                            else
                            {
                                $scope.errors.push(data.error);
                                $window.alert("Ocorreu um erro durante o envio, por favor tente novamente");
                            }
                        }).error(function(data, status) { // called asynchronously if an error occurs
    // or server returns response with an error status.
                            $scope.errors.push(status);
                            $window.alert("Ocorreu um erro durante o envio, por favor tente novamente");
                        });
    };
}]);