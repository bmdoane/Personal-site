'use strict'

app.factory('ProjectFact', function($q, $http) {

	const getProjects = function () {
		let projects = []
		return $q(function(resolve, reject) {
			$http.get('./data/project.json')
			.success(function(projectObj) {
				let projectData = projectObj
				console.log('PD', projectData)
				Object.keys(projectData).forEach((key) => {
					console.log("key", key)
					Object.keys(projectData[key]).forEach((subkey) => {
						projectData[key][subkey].type = key
						projectData[key][subkey].key = subkey
						projects.push(projectData[key][subkey])						
					})
				})
				resolve(projects)
			})
			.error((error) => {
				reject(error)
			})	
		})
	}

	return { getProjects }

})