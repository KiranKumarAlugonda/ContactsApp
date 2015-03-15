angular.module('ContactsApp',['ngRoute'])
.config(function($routeProvider,$locationProvider){   
    $routeProvider
        .when('/contactsApp',{
          controller : 'ListController',
          templateUrl: 'views/list.html'
        });
   $locationProvider.html5Mode(true);//to make it to work on browsers which do not support html5
});