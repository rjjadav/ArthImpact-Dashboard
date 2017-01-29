(function(){

'use strict';

angular.module('app.clients.applicants',[])
.config(config)

config.$inject = ['$stateProvider'];

function config($stateProvider){
	$stateProvider
	.state('app.clients_applicants',{
		url: '/applicants',
		views: {
			'content@app': {
				templateUrl: 	'app/main/clients/applicants/applicants.html',
				controller: 	'ApplicantsController',
				controllerAs: 	'applicants'
			}
		}
	})
}

})();