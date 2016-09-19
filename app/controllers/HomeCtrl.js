'use strict'

app.controller('HomeCtrl', function($scope, $location, ProjectFact) {

	ProjectFact.getProjects()
	.then((projectObj) => {
		console.log("projectObj", projectObj)
		$scope.projects = projectObj
		console.log("projects", $scope.projects)
	})	
})