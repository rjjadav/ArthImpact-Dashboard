(function(){

'use strict';

angular.module('app.core')
.directive('dbSparklineBar',dbSparklineBar);

dbSparklineBar.$inject = [];

function dbSparklineBar(){
	return {
		scope: {
		  data: '='
		},
		link: function(scope, element) {
			console.log("sparkline :::", scope.data);
			element.sparkline(scope.data, {
				// type: 'bar',
				// barColor: 'green',
				// width: 300,
				// height: '50',
				// barWidth: 8,
				// barSpacing: 3,
				// colorMap: ["green", "yellow", "red"],
				// chartRangeMin: 0
				type: 'bar',
				height: '40',
				barWidth: 9,
				colorMap: {
					'7': '#a1a1a1'
				},
				barSpacing: 2,
				barColor: '#26B99A'
			});
		}
	}
}

})();