(function(){

'use strict';

angular.module('app.home.partners',[])
.config(config);

config.$inject = ['$stateProvider'];

function config($stateProvider){
	$stateProvider
	.state('app.home_partners',{
		url: '/partners/:partner',
		views: {
			'content@app': {
				templateUrl: 'app/main/home/partners/partners.html',
				controller: 'PartnersController',
				controllerAs: 'partners'
			}
		}
	})
}

})();