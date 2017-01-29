(function(){
'use strict';

angular.module('app.home',
	[
		'app.home.company',
		'app.home.partners',
	]
)
.config(config);

config.$inject = [];

function config(){
}
})();