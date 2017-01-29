(function(){

'use strict';

angular.module('app.core')
.directive('dbDatatableCustomElement',dbDatatableCustomElement)
.directive('dbDatatebleWrapper',dbDatatebleWrapper);

dbDatatableCustomElement.$inject = ['$timeout','$compile'];
function dbDatatableCustomElement($timeout, $compile){
	return {
		restrict: 'C', // Notice the C for "class" restriction
		template: '<button>Button</button>'
	};
}


dbDatatebleWrapper.$inject = ['$timeout','$compile'];
function dbDatatebleWrapper($timeout, $compile){
	return {
		restrict: 'E',
		transclude: true,
		template: '<ng-transclude></ng-transclude>',
		link: link
	};

	function link(scope, element){
		$timeout(function () {
			// Compiling so that angular knows the button has a directive
			$compile(element.find('.db-datatable-custom-element'))(scope);
		}, 0, false);
	}
}

})();