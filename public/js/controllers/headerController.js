myApp.controller('headerController', ['$scope', '$rootScope', function($scope, $rootScope) {
    var unbind = $rootScope.$on('tabChange', function(evt, tab){
        $scope.currentTab = tab;
    });

    $scope.$on('$destroy', unbind);
    
    $scope.collapse = function () {
        $('.navbar-collapse.in').collapse('hide');
        if ($('.mobile-fixed-top').hasClass("display-none-mobile")) {
            $('.mobile-fixed-top').removeClass("display-none-mobile");
        }
    }
    
    $scope.mobileCollapse = function() {
        if ($('.mobile-fixed-top').hasClass("display-none-mobile")) {
            $('.mobile-fixed-top').removeClass("display-none-mobile");
        } else {
            $('.mobile-fixed-top').addClass("display-none-mobile");
        }
    }
}]);