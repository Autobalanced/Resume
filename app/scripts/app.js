'use strict';

/**
 * @ngdoc overview
 * @name resumeV3App
 * @description
 * # resumeV3App
 *
 * Main module of the application.
 */
angular
    .module('resumeV3App', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function($routeProvider)
    {
        $routeProvider
            .when('/',
            {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about',
            {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            });
            // .otherwise(
            // {
            //     redirectTo: '/'
            // });
    });
