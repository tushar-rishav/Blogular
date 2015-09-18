angular.module('app.controllers', [
	'app.directives',
	'ui.bootstrap'
])
	.controller('blogController', ['$scope', '$http', function($scope, $http){
		$scope.currentPage = 1;
		$scope.numPerPage = 4;
		$scope.maxSize = 4;
		$scope.filteredPosts=[];
		var post = [];
		$http.get('data/blog_detail.json').success(function(data){
			$scope.posts = data;
			post = data;
			console.log($scope.posts);
		}).error(function(){alert("Error!");});
	  console.log(post);	// undefined. WHY?

	  $scope.setPage = function (pageNo) {
			    $scope.currentPage = pageNo;
	  };
	  $scope.pageChanged = function() {
			    console.log('Page changed to: ' + $scope.currentPage);
	  };

	  $scope.$watch('currentPage + numPerPage', function() {

	    var begin = (($scope.currentPage - 1) * $scope.numPerPage);
	    end = begin + $scope.numPerPage;

	    // $scope.posts is not available here. WHY??
	    
	    // CHANGE THE BELOW CODE ONCE POST IS AVAILABLE IN THIS SCOPE	
	    $scope.filteredPosts = [];//$scope.posts.slice(begin, end);
	    console.log($scope.filteredPosts);
	  });


	}])
	.controller('overviewController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
		$http.get('data/blog_detail.json').success(function(data){
			$scope.post = data[$routeParams.id];
		});
	}]);