<!--Copyright © 2014 WonderBiz Technologies Pvt. ltd.  -->

/* This section is defined for initializing collections with Service-url and model parameters */

var DataCollection = Backbone.Collection.extend({
    model: Data,
    url: ServiceURL + "GetAdminDashBoardDetails"
});

var CountryDataCollection = Backbone.Collection.extend({
    model: Data,
    url: ServiceURL + "GetAllCountriesStats"
});
var RegSecDataCollection = Backbone.Collection.extend({
    initialize: function (models, options) {
        this.url = ServiceURL + "GetDetailRegSecStats/" + options.id;

    },
    model: Data
});

var CountryUserDataCollection = Backbone.Collection.extend({
    initialize: function (models, options) {
        this.url = ServiceURL + "GetUsersByCountry/" + options.id;
    },
    model: Data
});
var RegSecUserDataCollection = Backbone.Collection.extend({
    initialize: function (models, options) {
        this.url = ServiceURL + "GetUsersBySectionDetail/" + options.id;

    },
    model: Data
});
var GeneralUserDataCollection = Backbone.Collection.extend({
    initialize: function (models, options) {
        this.url = ServiceURL + "GetUsersByGeneral/" + options.id;

    },
    model: Data
});

var GeneralUserDataChart = Backbone.Collection.extend({
    model: Data,
    url: ServiceURL + "GetUserRegCountByDate"

});