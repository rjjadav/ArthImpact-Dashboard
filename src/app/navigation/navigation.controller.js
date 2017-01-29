(function(){
'use strict';

angular.module('app.navigation')
.controller('NavigationController',NavigationController);

NavigationController.$inject = ['$rootScope'];

function NavigationController($rootScope){
	var nav = this;
	$rootScope.menuToggle = false;

	nav.toggleMenu = toggleMenu;

	function toggleMenu(){
		if($rootScope.menuToggle){
			$rootScope.menuToggle = false;
		}else{
			$rootScope.menuToggle = true;
		}
	}
}

})();