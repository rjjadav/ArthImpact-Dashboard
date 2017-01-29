(function(){

'use strict';

angular.module('app.core')
.directive('dbSparklineLine',dbSparklineLine);

dbSparklineLine.$inject = [];

function dbSparklineLine(){
	return {
		scope: {
		  data: '='
		},
		link: function(scope, element) {
			console.log("sparkline :::", scope.data);
			element.sparkline(scope.data, {
				type: 'line',
				width: '200',
				height: '40',
				lineColor: '#26B99A',
				fillColor: 'rgba(223, 223, 223, 0.57)',
				lineWidth: 2,
				spotColor: '#26B99A',
				minSpotColor: '#26B99A'
			});
		}
	}
}

})();