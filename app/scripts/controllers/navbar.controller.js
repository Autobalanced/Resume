'use strict';

/**
 * @ngdoc function
 * @name resumeV3App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the resumeV3App
 */
angular.module('resumeV3App')
    .controller('NavCtrl', function($scope, $location, ScrollService)
    {
        // Attempt at applying active classes on click, TODO: get functional
        // Need to change $location based on click too.
        $scope.scrollToLink = function(id)
        {
            $location.hash(id);

            ScrollService.scrollTo(id);
        };

        $scope.isActive = function(tab)
        {
        	return tab === $location.hash();
        };
    });
