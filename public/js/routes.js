// ROUTES
myApp.config(function ($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'views/main.ejs',
        controller: 'mainController'
    })
    .when('/principal', {
        templateUrl: 'views/main.ejs',
        controller: 'mainController'
    })
    .when('/meditacao', {
        templateUrl: 'views/meditacao.ejs',
        controller: 'meditacaoController'
    })    
    .when('/palestrantes', {
        templateUrl: 'views/palestrantes.ejs',
        controller: 'palestrantesController'
    })
    .when('/contato', {
        templateUrl: 'views/contato.ejs',
        controller: 'contatoController'
    })
    .when('/carousel-main', {
        templateUrl: 'views/main.ejs',
        controller: 'mainController'
    })
});