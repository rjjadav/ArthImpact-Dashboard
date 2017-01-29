(function(){

'use strict';

angular.module('app.clients')
.controller('ApplicantsController', ApplicantsController);

ApplicantsController.$inject = ['DTOptionsBuilder','DTColumnBuilder'];

function ApplicantsController(DTOptionsBuilder,DTColumnBuilder){
	var applicants = this;

	applicants.data = [
		{
			"name": "Airi Satou",
			"position": "Accountant",
			"office": "Tokyo",
			"age": "33",
			"startDate": "2008/11/28",
			"salary": "162700"
		},
		{
			"name": "Angellica Ramos",
			"position": "Chief Executive Officer (CEO)",
			"office": "London",
			"age": "47",
			"startDate": "2009/10/09",
			"salary": "1200000"
		},
		{
			"name": "Ashton Cox",
			"position": "Hunior Technical Author",
			"office": "San Fransisco",
			"age": "66",
			"startDate": "2009/01/12",
			"salary": "86000"
		},
		{
			"name": "Bradley Greer",
			"position": "Software Engineer",
			"office": "London",
			"age": "41",
			"startDate": "2012/10/13",
			"salary": "132000"
		},
		{
			"name": "Brenden Wagner",
			"position": "Software Engineer",
			"office": "San Fransisco",
			"age": "28",
			"startDate": "2011/06/07",
			"salary": "206850"
		},
		{
			"name": "Brielle Williamson",
			"position": "Integration Specialist",
			"office": "New York",
			"age": "61",
			"startDate": "2012/12/02",
			"salary": "372000"
		},
		{
			"name": "Bruno Nash",
			"position": "Software Engineer",
			"office": "London",
			"age": "38",
			"startDate": "2011/05/03",
			"salary": "163500"
		},]

	// applicants.dtOptions = {
	// 	dom 		: '<"db-datatable-custom-element">frtip',
	// 	hasBootstrap: true,
	// 	hasTableTools: true,
	// 	// pagingType 	: 'simple',
	// 	autoWidth 	: false,
	// 	responsive 	: true
	// };
	applicants.dtOptions = DTOptionsBuilder.fromSource('https://gist.githubusercontent.com/rjjadav/1bce900312acb27ca994ed28fa23c1c7/raw/02002e72f26c0e3ae41a9e23e743f952161b48b7/data.json')
		.withDOM('Bfrtip')
		.withBootstrap()
		// .withPaginationType('simple_numbers') //full_numbers
		// Active Buttons extension
		.withButtons(
			[{
                  extend: "copy",
                  className: "btn-sm"
                }, {
                  extend: "csv",
                  className: "btn-sm"
                }, {
                  extend: "excel",
                  className: "btn-sm"
                }, {
                  extend: "pdf",
                  className: "btn-sm"
                }, {
                  extend: "print",
                  className: "btn-sm"
                }]
		// 	[
		// 	'columnsToggle',
		// 	'colvis',
		// 	'copy',
		// 	'print',
		// 	'excel',
		// 	{
		// 		text: 'Some button',
		// 		// key: '1',
		// 		action: function (e, dt, node, config) {
		// 			alert('Button activated');
		// 		}
		// 	}
		// ]
		);
		
		applicants.dtColumns = [
			DTColumnBuilder.newColumn('name').withTitle('Name'),
			DTColumnBuilder.newColumn('position').withTitle('Position'),
			DTColumnBuilder.newColumn('office').withTitle('Office'),
			DTColumnBuilder.newColumn('age').withTitle('Age'),
			DTColumnBuilder.newColumn('startDate').withTitle('Start Date'),
			DTColumnBuilder.newColumn('salary').withTitle('Salary'),
		];
}

})();