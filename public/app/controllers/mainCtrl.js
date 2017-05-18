angular.module('mainCtrl', [])


.controller('MainController', function($rootScope, $location, $routeParams, Search, $scope) {

	var vm = this;
	vm.searchresults = '';

	$scope.totalDisplayed = 2;
	$scope.loadMore = function () {
		$scope.totalDisplayed += 2; 
		$scope.remainItems -= 2;
	};


	vm.search = function(){
		console.log(vm.searchtype, vm.searchparam);
		Search.search(vm.searchtype, vm.searchparam).success(function(data){
			console.log(data)
			if(vm.searchtype == 'title'){
				$scope.remainItems = 1;
				vm.searchresults = [data];
			}
			else{
				$scope.remainItems = data.length;
				vm.searchresults = data;
			}
			vm.searchparam='';
			console.log('-----------------------------',vm.searchresults)
		})
	}

	vm.searchDirector = function(director){
		Search.search('director', director).success(function(data){
			console.log(data)
			$scope.remainItems = data.length;
			vm.searchresults = data;
			console.log('-----------------------------',vm.searchresults)
		})
	}

	vm.searchActor = function(actor){
		Search.search('actor', actor).success(function(data){
			console.log(data)
			$scope.remainItems = data.length;
			vm.searchresults = data;
			console.log('-----------------------------',vm.searchresults)
		})
	}

	$scope.sort = function(keyname){
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }

});