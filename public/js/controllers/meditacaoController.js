myApp.controller('meditacaoController', ['$scope', '$rootScope', "$interval", function ($scope, $rootScope, $interval) {
    $rootScope.$emit('tabChange', 1);
    
    var tips = [];
    tips.push({ text: "a melhorar a concentração", number: 0});
    tips.push({ text: "a diminuir o stress", number: 1});
    tips.push({ text: "blaj blah blah", number: 2});
    var i = 0;
    $scope.meditation = {tips: tips, number: 0};
    
    var func = function() {
        i = (i + 1) % tips.length;
        $scope.meditation.number = i;
    }
    
    $interval(func, 5000);
    
    
        var modal = $('.modal-backdrop');
    
    if (modal) {
        modal.remove();
    }
}]);