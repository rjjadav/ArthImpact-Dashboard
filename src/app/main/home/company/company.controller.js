(function(){
'use strict';

angular.module('app.home.company')
.controller('CompanyController', CompanyController);

CompanyController.$inject = [];

function CompanyController(){
	var company = this;
	company.data = [2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 5, 6, 7, 5, 4, 3, 5, 6];
	company.d1 = [
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

	company.data1 = [
		[gd(2012, 1, 1), 17],
		[gd(2012, 1, 2), 74],
		[gd(2012, 1, 3), 6],
		[gd(2012, 1, 4), 39],
		[gd(2012, 1, 5), 20],
		[gd(2012, 1, 6), 85],
		[gd(2012, 1, 7), 7]
	];

	company.data2 = [
		[gd(2012, 1, 1), 82],
		[gd(2012, 1, 2), 23],
		[gd(2012, 1, 3), 66],
		[gd(2012, 1, 4), 9],
		[gd(2012, 1, 5), 119],
		[gd(2012, 1, 6), 6],
		[gd(2012, 1, 7), 9]
	];

	function gd(year, month, day) {
		return new Date(year, month - 1, day).getTime();
	}
}
})();