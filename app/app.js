'use strict'

const app = angular.module('Tour-Connects', ['ngRoute', 'ngAnimate'])

app.config(function($routeProvider) {

	$routeProvider.
	when('/', {
		templateUrl: 'partials/login.html',
		controller: 'LoginCtrl'
	}).
	otherwise('/');

});