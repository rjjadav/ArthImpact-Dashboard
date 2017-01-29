(function(){

'use strict';

angular.module('app.core')
.directive('dbFlotChart',dbFlotChart);

dbFlotChart.$inject = [];

function dbFlotChart(){
	return {
        scope: {
		  data: '='
		},
        link: function(scope, elem) {
            var d1 = scope.data;
            var options = {
		      series: {
		        curvedLines: {
		          apply: true,
		          active: true,
		          monotonicFit: true
		        }
		      },
		      colors: ["#26B99A"],
		      grid: {
		        borderWidth: {
		          top: 0,
		          right: 0,
		          bottom: 1,
		          left: 1
		        },
		        borderColor: {
		          bottom: "#7F8790",
		          left: "#7F8790"
		        }
		      }
		    };
			$.plot(elem, [{
				label: "Registrations",
				data: d1,
				lines: {
					fillColor: "rgba(150, 202, 89, 0.12)"
				}, //#96CA59 rgba(150, 202, 89, 0.42)
				points: {
					fillColor: "#fff"
				}
			}], options);
            elem.show();
        }
    };
}
})();