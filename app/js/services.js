var restservices = angular.module('myApp.view1.rest', ['ngResource']);

restservices.factory('User',['$resource',
	function($resource) {
		return $resource("http://localhost:8080/BackendDITproj/webresources/user/:id", {},{
			query: {method:'GET', params:{id:'users'}, isArray:true}
		});
	});
