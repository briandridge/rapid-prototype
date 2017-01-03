angular.module('Proto')
	.directive('square', makeSquare);

function makeSquare() {
	console.log("makeSquare ok?");
	var directive = {
		restrict: 'E',
		replace: true,
		templateUrl: 'templates/index.html',
		scope: {
			question: "@"
		}
	};
	return directive;
}