'use strict'

const app = angular.module('BrianDoane', ['ngRoute', 'ngAnimate'])

app.config(function($routeProvider) {

	$routeProvider.
	when('/home', {
		templateUrl: 'partials/home.html',
		controller: 'HomeCtrl'
	}).
	otherwise('/home');

});