angular.module('searchService', [])



.factory('Search', function($http) {


	var searchFactory = {};


	searchFactory.search = function(searchtype, searchparam) {

		return $http({
			url:'http://netflixroulette.net/api/api.php?'+searchtype+'='+searchparam,
			method:'GET'
		})
		.success(function(response){
			return response;
		})
	}


	return searchFactory;

});