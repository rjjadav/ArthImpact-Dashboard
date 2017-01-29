(function(){

'use strict';

angular.module('app.home.partners')
.controller('PartnersController', PartnersController);

PartnersController.$inject = [];

function PartnersController(){
	var partners = this;
	partners.data = [2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 5, 6, 7, 5, 4, 3, 5, 6];
	partners.d1 = [
		[0, 1],
		[1, 9],
		[2, 6],
		[3, 10],
		[4, 5],
		[5, 17],
		[6, 6],
		[7, 10],
		[8, 7],
		[9, 11],
		[10, 35],
		[11, 9],
		[12, 12],
		[13, 5],
		[14, 3],
		[15, 4],
		[16, 9]
	];
}

})();