'use strict';

/**
 * @ngdoc function
 * @name resumeV3App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the resumeV3App
 */
angular.module('resumeV3App')
    .controller('MainCtrl', function($scope, $location) 
    {
    	// Attempt at applying active classes on click, TODO: get functional
    	// Need to change $location based on click too.
    	$scope.isActive = function viewLocation()
    	{
    		return viewLocation === $location.path();
    	};
    });
