console.log("SquareFactory");

angular.module("Proto")
 .factory("SquareFactory", Square);

Square.$inject= ['$resource', '$http'];

function Square($resource, $http) {
	return $resource(
		'http://localhost:3000/:id',
		null,
		{'query': {method: 'GET', isArray: false }}
		);
}