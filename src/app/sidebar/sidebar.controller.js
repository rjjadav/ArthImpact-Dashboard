(function(){
'use strict';

angular.module('app.sidebar')
.controller('SidebarController',SidebarController);

SidebarController.$inject = ['$state'];

function SidebarController($state){
	var sidebar = this;
	sidebar.toggleMenu = toggleMenu;
	sidebar.toggleChildMenu = toggleChildMenu;

	sidebar.$state = $state;
	sidebar.menu = [
		{
			name: 'Home',
			iconClass: 'fa fa-home',
			active : true,
			childMenu: [
				{
					name: 'Company',
					childMenu: undefined,
					url : 'app.home_company'
				},
				{
					name: 'Partners',
					active: false,
					childMenu: [
						{
							name: 'Itzcash',
							url : "app.home_partners",
							params: {partner : 'Itzcash'}
						},
						{
							name: 'Goodmoney',
							url : "app.home_partners",
							params: {partner : 'goodMoney'}
						},
						{
							name: 'mSwipe',
							url : "app.home_partners",
							params: {partner : 'mSwipe'}
						},
					]
				}
			] 
		},
		{
			name: 'Clients',
			iconClass: 'fa fa-edit',
			active : false,
			childMenu: [
				{
					name: 'Applicants',
					childMenu: undefined,
					url : 'app.clients_applicants'
				},
				{
					name: 'Borrowers',
					childMenu: undefined,
					url : 'app.home_company'
				},
				{
					name: 'Interactions',
					childMenu: undefined,
					url : 'app.home_company'
				},
				{
					name: 'SMS campaigns',
					childMenu: undefined,
					url : 'app.home_company'
				},
			] 
		},
		{
			name: 'Products',
			iconClass: 'fa fa-desktop',
			active : false,
			childMenu: [
				{
					name: 'Product List',
					childMenu: undefined,
					url : 'app.home_company'
				},
				{
					name: 'Decision Rules',
					childMenu: undefined,
					url : 'app.home_company'
				},
			] 
		},
		{
			name: 'Reports',
			iconClass: 'fa fa-table',
			active : false,
			childMenu: [
				{
					name: 'Outstanding loans',
					childMenu: undefined,
					url : 'app.home_company'
				},
				{
					name: 'Loan applications',
					childMenu: undefined,
					url : 'app.home_company'
				},
				{
					name: 'Transactions',
					childMenu: undefined,
					url : 'app.home_company'
				},
				{
					name: 'Delinquencies',
					childMenu: undefined,
					url : 'app.home_company'
				},
			] 
		},
		{
			name: 'Accounting',
			iconClass: 'fa fa-bar-chart-o',
			active : false,
			childMenu: [
				{
					name: 'View chart of accounts',
					childMenu: undefined,
					url : 'app.home_company'
				},
				{
					name: 'Create loan provisioning criteria',
					childMenu: undefined,
					url : 'app.home_company'
				},
				{
					name: 'Export Tally inputs',
					childMenu: undefined,
					url : 'app.home_company'
				},
			] 
		},
		{
			name: 'Admin',
			iconClass: 'fa fa-clone',
			active : false,
			childMenu: [
				{
					name: 'View audit log',
					childMenu: undefined,
					url : 'app.home_company'
				},
				{
					name: 'User management',
					childMenu: undefined,
					url : 'app.home_company'
				},
			] 
		},

	];

	function toggleMenu(index){
		console.log(index);
		angular.forEach(sidebar.menu, function(obj, i){
			if(i == index){
				if(obj.active){
					obj.active = false;
				}else{
					obj.active = true;
				}
			}else{
				obj.active = false;
			}
		})
	}

	function toggleChildMenu(obj, index, parentIndex){
		if(obj.active){
			obj.active = false;
		}else{
			obj.active = true;
		}
	}
}

})();