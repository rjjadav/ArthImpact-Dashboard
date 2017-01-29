(function(){
'use strict';

angular.module('app.home.company',[])
.config(config);

config.$inject = ['$stateProvider'];

function config($stateProvider){
	$stateProvider
	.state('app.home_company',{
		url: '/',
		views: {
			'content@app' 	: {
				templateUrl : 'app/main/home/company/company.html',
				controller 	: 'CompanyController',
				controllerAs: 'company'
			}
		}
	})
}
})();