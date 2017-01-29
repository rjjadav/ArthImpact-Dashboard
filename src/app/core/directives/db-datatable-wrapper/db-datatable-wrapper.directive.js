// (function(){

// 'use strict';

// angular.module('app.core')
// .directive('dbDatatebleWrapper',dbDatatebleWrapper);

// dbDatatebleWrapper.$inject = ['$timeout','$compile'];

// function dbDatatebleWrapper($timeout, $compile){
// 	return {
// 		restrict: 'E',
// 		transclude: true,
// 		template: '<ng-transclude></ng-transclude>',
// 		link: link
// 	};

// 	function link(scope, element){
// 		$timeout(function () {
// 			// Compiling so that angular knows the button has a directive
// 			$compile(element.find('.db-datatable-custom-element'))(scope);
// 		}, 0, false);
// 	}
// }

// })();