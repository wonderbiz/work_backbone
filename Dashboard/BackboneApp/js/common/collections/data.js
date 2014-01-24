<!--Copyright © 2014 WonderBiz Technologies Pvt. ltd.  -->

/* This section is defined for initializing collections with Service-url and model parameters */

var DataCollection = Backbone.Collection.extend({
    model: DashboardDataModel,
    url: ServiceURL + "GetAdminDashBoardDetails"
});

var CountryDataCollection = Backbone.Collection.extend({
    model: CountryDataModel,
    url: ServiceURL + "GetAllCountriesStats"
});

var OrganisationDataCollection = Backbone.Collection.extend({
    initialize: function (models, options) {
        this.url = ServiceURL + "GetDetailRegSecStats/" + options.id;
    },
    model: RegSecDataModel
});

var BusinessDataCollection = Backbone.Collection.extend({
    initialize: function (models, options) {
        this.url = ServiceURL + "GetDetailRegSecStats/" + options.id;
    },
    model: RegSecDataModel
});

var ProductsDataCollection = Backbone.Collection.extend({
    initialize: function (models, options) {
        this.url = ServiceURL + "GetDetailRegSecStats/" + options.id;
    },
    model: RegSecDataModel
});

var SourceDataCollection = Backbone.Collection.extend({
    initialize: function (models, options) {
        this.url = ServiceURL + "GetDetailRegSecStats/" + options.id;
    },
    model: RegSecDataModel
});

var DecissionDataCollection = Backbone.Collection.extend({
    initialize: function (models, options) {
        this.url = ServiceURL + "GetDetailRegSecStats/" + options.id;
    },
    model: RegSecDataModel
});

var CountryUserDataCollection = Backbone.Collection.extend({
    initialize: function (models, options) {
        this.url = ServiceURL + "GetUsersByCountry/" + options.id;
    },
    model: CountryUserDataModel
});

var RegSecUserDataCollection = Backbone.Collection.extend({
    initialize: function (models, options) {
        this.url = ServiceURL + "GetUsersBySectionDetail/" + options.id;
    },
    model: RegSecUserModel
});

var GeneralUserDataCollection = Backbone.Collection.extend({
    initialize: function (models, options) {
        this.url = ServiceURL + "GetUsersByGeneral/" + options.id;
    },
    model: GeneralUserDataModel
});

var GeneralUserDataChart = Backbone.Collection.extend({
    model: GeneralUserChartDataModel,
    url: ServiceURL + "GetUserRegCountByDate"

});