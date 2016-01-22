myApp.controller('mainController', ['$scope', '$rootScope', function($scope, $rootScope) {
    $rootScope.$emit('tabChange', 0);
    
    var modal = $('.modal-backdrop');
    
    $scope.videoUrl = 'https://www.youtube.com/watch?v=IPrOlrYHsoQ';

    $scope.$on('youtube.player.playing', function ($event, player) {
         $('.carousel').carousel('pause');
        console.log("playing");
    });
    $scope.$on('youtube.player.paused', function ($event, player) {
        // play it again
         $('.carousel').carousel('cycle');
    });
    $scope.$on('youtube.player.ended', function ($event, player) {
        // play it again
         $('.carousel').carousel('cycle');
    });


    $scope.changeClick = function() {
        $('.carousel').carousel('cycle');
    }
    
    if (modal) {
        modal.remove();
    }
}]);