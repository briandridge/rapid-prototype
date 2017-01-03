angular.module('Proto')
	.controller('SquareController', squareController);

squareController.$inject = ['SquareFactory', '$http'];

function squareController (SquareFactory, $http) {
	var self = this;
	self.all = [];
	self.querySquares = querySquares;

	function querySquares() {
		self.all = SquareFactory.query({});
		console.log(self.all);
	}

	querySquares();

}
