(function() {
'use strict';

angular
	.module('dashboard')
	.config(routerConfig);

/** @ngInject */
function routerConfig($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('app',{
		abstract : true,
		views : {
			'main@': {
				templateUrl: 'app/core/layout/main-layout.html',
				controller: 'MainController',
				controllerAs: 'main'
			},
			'navigation@app': {
				templateUrl: 'app/navigation/navigation.html',
				controller: 'NavigationController',
				controllerAs: 'nav'
			},
			'sidebar@app': {
				templateUrl: 'app/sidebar/sidebar.html',
				controller: 'SidebarController',
				controllerAs: 'sidebar'
			}
		}
	})
	// .state('home', {
	// 	url: '/',
	// 	templateUrl: 'app/main/main.html',
	// 	controller: 'MainController',
	// 	controllerAs: 'main'
	// });

	$urlRouterProvider.otherwise('/');
}

})();
