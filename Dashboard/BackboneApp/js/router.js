<!--Copyright © 2014 WonderBiz Technologies Pvt. ltd.  -->

/*This js is responsible to route URLs and call relevant methods to render data on UI */

/* Globally defined URL of Web-Service */
var ServiceURL = 'http://tmedicalfair.wonderbizglobal.com/Services/MDIndiaService.svc/json/';

var ApplicationRouter = Backbone.Router.extend({
    routes: {
        "": "list",
        "country": "Country",
        "organisation": "Organisation",
        "business": "Business",
        "products": "Products",
        "source": "Source",
        "decission": "Decission",
        "country/:id": "CountryWiseUsers",
        "regsec/:id": "RegSecWiseUsers",
        "general/:id": "GeneralWiseUsers"

    },

    deselectPills: function () {
        //deselect all navigation pills
        $('ul.nav li').removeClass('active');

    },
    selectPill: function (tab_name) {
        //deselect all navigation pills
        this.deselectPills();
        //select passed navigation pill by selector
        $(tab_name).addClass('active');

        $(".navbar-header > .navbar-toggle").addClass("collapsed");
        $(".navbar > .navbar-collapse").removeClass("in").addClass("collapse");
    },

    /*Method to retrive Weekly, Monthly general User details */
    GeneralWiseUsers: function (id) {
        var uData = new GeneralUserDataCollection([], { id: id });
        $('#container').html("");
        $('#containerChart').css('display', 'none');
        this.selectPill('li.dashboard_tab');

        var UTableView = new ComUserTableView({
            filter: 'general/' + id,
            tableHeader: 'Users Details',
            el: $('#container'),
            model: uData
        });
        uData.fetch();
        GeneralWiseUsersChart();

    },


    RegSecWiseUsers: function (id) {
        var uData = new RegSecUserDataCollection([], { id: id });
        $('#container').html("");
        $('#containerChart').css('display', 'block');

        var UTableView = new ComUserTableView({
            filter: 'regsec/' + id,
            tableHeader: 'User Detail',
            el: $('#container'),
            model: uData
        });
        uData.fetch();
    },
    /*Method to retrive detailed Country-wise data */
    CountryWiseUsers: function (id) {
        var uData = new CountryUserDataCollection([], { id: id });
        $('#container').html("");

        $('#containerChart').css('display', 'none');
        this.selectPill('li.country_tab');
        

        var UTableView = new ComUserTableView({
            filter: 'country/' + id,
            tableHeader: 'Details By Country',
            classificationCode: 'pie',
            el: $('#container'),
            model: uData
        });
        uData.fetch();
    },

    /*Method to retrive Admin home details */

    list: function () {
        var mydata = new DataCollection();
        $('#container').html("");

        this.selectPill('li.dashboard_tab');
        $('#containerChart').css('display', 'none');
        var tableView = new TableView({
            el: $('#container'),
            model: mydata// DataCollection()
        });
        mydata.fetch();

    },

    Country: function () {
        var cData = new CountryDataCollection();
        $('#container').html("");

        $('#containerChart').css('display', 'none');
        this.selectPill('li.country_tab');


        var CTableView = new ComTableView({
            tableHeader: 'Details By Country',
            chartHeader: 'Country',
            classificationCode: 'pie',
            el: $('#container'),
            model: cData
        });
        cData.fetch();
    },
    Organisation: function () {
        var _this = this;
        var rData = new OrganisationDataCollection([], { id: 2 });
        if(!this.savedModel)
        {
            this.savedModel = new Backbone.Collection;
        }
              
        $('#container').html("");
        $('#containerChart').css('display', 'none');
        this.selectPill('li.org_tab');

        
      
        if(this.savedModel.length == 0)
        {       
            rData.fetch({
                success: function(model,resp){
                    _this.savedModel.add(model.models);
                }
            });
        }
        else
        {
            rData.add(this.savedModel.models);
        }

        var CTableView = new ComTableView({
            tableHeader: 'Details By Organisation',
            chartHeader: 'Work Organization',
            classificationCode: 'bar',
            el: $('#container'),
            model: rData
        });
      
    },
    Business: function () {
        var rData = new BusinessDataCollection([], { id: 3 });
        $('#container').html("");
        $('#containerChart').css('display', 'none');
        this.selectPill('li.business_tab');

        var CTableView = new ComTableView({
            tableHeader: 'Details by nature of Business',
            chartHeader: 'Profession',
            classificationCode: 'bar',
            el: $('#container'),
            model: rData
        });
        rData.fetch();


    },
    Products: function () {
        var rData = new ProductsDataCollection([], { id: 4 });
        $('#container').html("");
        $('#containerChart').css('display', 'none');
        this.selectPill('li.products_tab');

        var CTableView = new ComTableView({
            tableHeader: 'Details By Product Interest',
            chartHeader: 'Product Interest',
            classificationCode: 'bar',
            el: $('#container'),
            model: rData
        });
        rData.fetch();


    },

   

    Source: function () {
        var rData = new SourceDataCollection([], { id: 5 });
        $('#container').html("");
        $('#containerChart').css('display', 'none');
        this.selectPill('li.source_tab');

        var CTableView = new ComTableView({
            tableHeader: 'Details By Source',
            chartHeader: 'Source',
            classificationCode: 'pie',
            el: $('#container'),
            model: rData
        });
        rData.fetch();


    },


    Decission: function () {
        var rData = new DecissionDataCollection([], { id: 8 });
        $('#container').html("");
        $('#containerChart').css('display', 'none');
        this.selectPill('li.decission_tab');

        var CTableView = new ComTableView({
            tableHeader: 'Details By Decision',
            chartHeader: 'Decision',
            classificationCode: 'pie',
            el: $('#container'),
            model: rData
        });
        rData.fetch();


    }

});

 /*Method to retrive GeneralUser chart data */
function GeneralWiseUsersChart() {

    var chartData = new GeneralUserDataChart();
    $('#containerChart').html("");

    var UTableView = new ComUserTableChartView({
        chartHeader: 'User Registration Analysis',
        el: $('#containerChart'),
        model: chartData

    });

    chartData.fetch();
}

