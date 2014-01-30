$(function(){

	var ApplicationRouter = Backbone.Router.extend({

		//map url routes to contained methods
		routes: {
			"": "organisation",
            "country": "country",
            "organisation": "organisation",
            "business": "business",
		},

		deselectPills: function(){
			//deselect all navigation pills
			$('ul.nav li').removeClass('active');
		},

		selectPill: function(pill){
			//deselect all navigation pills
			this.deselectPills();
			//select passed navigation pill by selector
			$(pill).addClass('active');
		},

		hidePages: function(){
			//hide all pages with 'pages' class
			
            $('div.pages').hide();
             $('div.row').hide();
		},

		showPage: function(page){
			//hide all pages
			this.hidePages();
			//show passed page by selector
			$(page).show();
		},

		country: function() {
			this.showPage('div#country-page');
			this.selectPill('li.country_tab');
		},

		organisation: function() {
			this.showPage('div#org-page');
			this.selectPill('li.org_tab');
		},

		business: function() {
			this.showPage('div#business-page');
			this.selectPill('li.business-tab');
		}

	});

	var ApplicationView = Backbone.View.extend({

		//bind view to body element (all views should be bound to DOM elements)
		el: $('body'),

		//observe navigation click events and map to contained methods
		events: {
			'click ul.nav li.country_tab a': 'displayCountry',
			'click ul.nav li.org_tab a': 'displayOrg',
			'click ul.nav li.business-tab a': 'displayBusiness'
		},

		//called on instantiation
		initialize: function(){
			//set dependency on ApplicationRouter
			this.router = new ApplicationRouter();

			//call to begin monitoring uri and route changes
			Backbone.history.start();
		},

		displayCountry: function(){
			//update url and pass true to execute route method
			this.router.navigate("country", true);
		},

		displayOrg: function(){
			//update url and pass true to execute route method
			this.router.navigate("organisation", true);
		},

		displayBusiness: function(){
			//update url and pass true to execute route method
			this.router.navigate("business", true);
		}

	});

	//load application
	new ApplicationView();

});

