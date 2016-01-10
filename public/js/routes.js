// ROUTES
myApp.config(function ($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'views/main.ejs',
        controller: 'mainController'
    })
    
    .when('/palestrantes', {
        templateUrl: 'views/palestrantes.ejs',
        controller: 'palestrantesController'
    })
    .when('/carousel-main', {
        templateUrl: 'views/main.ejs',
        controller: 'mainController'
    })
    
    
});