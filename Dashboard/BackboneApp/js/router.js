<!--Copyright © 2014 WonderBiz Technologies Pvt. ltd.  -->

/*This js is responsible to route URLs and call relevant methods to render data on UI */

/* Globally defined URL of Web-Service */
var ServiceURL = 'http://medicalfair.wonderbizglobal.com/Services/MDIndiaService.svc/json/';

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
        $('#containerTable').html("");
        $('#containerChart').html("");
        $('#containerChart').css('display', 'none');
        $('#container').css('display', 'block');
          $('#containerTable').css('display', 'block');
          $('#chartTableToggle').css('display', 'none');
        this.selectPill('li.dashboard_tab');
         GeneralWiseUsersChart();
        var UTableView = new ComUserTableView({
            filter: 'general/' + id,
            tableHeader: 'Users Details',
            el: $('#containerTable'),
            model: uData
        });
        uData.fetch();
       

    },


    RegSecWiseUsers: function (id) {
        var uData = new RegSecUserDataCollection([], { id: id });
//        $('#container').html("");
         $('#containerTable').html("");
         $('#containerChart').html("");
        $('#containerChart').css('display', 'none');
             $('#container').css('display', 'block');
               $('#containerTable').css('display', 'block');
        var UTableView = new ComUserTableView({
            filter: 'regsec/' + id,
             tableHeader: 'Users Details',
            el: $('#containerTable'),
            model: uData
        });
        uData.fetch();
    },
    /*Method to retrive detailed Country-wise data */
    CountryWiseUsers: function (id) {
        var uData = new CountryUserDataCollection([], { id: id });

        $('#containerTable').html("");
         $('#containerChart').html("");
        $('#containerChart').css('display', 'none');
             $('#container').css('display', 'block');
               $('#containerTable').css('display', 'block');
        this.selectPill('li.country_tab');
        

        var UTableView = new ComUserTableView({
            filter: 'country/' + id,
            tableHeader: 'User Details',
            classificationCode: 'pie',
            el: $('#containerTable'),
            model: uData
        });
        uData.fetch();
    },

    /*Method to retrive Admin home details */

    list: function () {
        var mydata = new DataCollection();
        $('#container').html("");
        $('#containerTable').html("");
        $('#containerChart').html("");
        $('#containerChart').css('display', 'block');
        $('#container').css('display', 'none');
        $('#containerTable').css('display', 'none');
          $('#chartTableToggle').css('display', 'block');
        this.selectPill('li.dashboard_tab');

         DashboardChartViewer();
        var tableView = new TableView({
            el: $('#containerTable'),
            model: mydata// DataCollection()
        });



        mydata.fetch();
       

    },

    Country: function () {
        var cData = new CountryDataCollection();
         $('#container').html("");
        $('#containerChart').html("");
         $('#containerTable').html("");
        $('#containerChart').css('display', 'none');
         $('#container').css('display', 'block');
           $('#containerTable').css('display', 'block');
          $('#chartTableToggle').css('display', 'none');
        this.selectPill('li.country_tab');

          if(window.ConSavedModel.length>0)
        {
           cData.add(window.ConSavedModel.models);
        }
        else{
                cData.fetch();
        }    


        var CTableView = new ComTableView({
            tableHeader: 'Details By Country',
            chartHeader: 'Country',
            classificationCode: 'pie',
            el: $('#containerTable'),
            model: cData
        });
   
    },
    Organisation: function () {

        var rData = new OrganisationDataCollection([], { id: 2 });
               
        $('#containerTable').html("");
       $('#container').html("");
        $('#containerChart').html("");
        $('#containerChart').css('display', 'none');
         $('#container').css('display', 'block');
         $('#containerTable').css('display', 'block');
           $('#chartTableToggle').css('display', 'none');
        this.selectPill('li.org_tab');

          if(window.OrgSavedModel.length>0)
        {
           rData.add(window.OrgSavedModel.models);
        }
        else{
                rData.fetch();
        }    

        var CTableView = new ComTableView({
            tableHeader: 'Details By Organisation',
            chartHeader: 'Work Organization',
            classificationCode: 'bar',
            el: $('#containerTable'),
            model: rData
        });
      
          

      
    },
    Business: function () {
        var rData = new BusinessDataCollection([], { id: 3 });
         $('#container').html("");
            $('#containerTable').html("");
        $('#containerChart').html("");
        $('#containerChart').css('display', 'none');
         $('#container').css('display', 'block');
         $('#containerTable').css('display', 'block');
           $('#chartTableToggle').css('display', 'none');
        this.selectPill('li.business_tab');

          if(window.BusSavedModel.length>0)
        {
           rData.add(window.BusSavedModel.models);
        }
        else{
                rData.fetch();
        }    

        var CTableView = new ComTableView({
            tableHeader: 'Details by nature of Business',
            chartHeader: 'Profession',
            classificationCode: 'bar',
            el: $('#containerTable'),
            model: rData
        });
       


    },
    Products: function () {
        var rData = new ProductsDataCollection([], { id: 4 });
         $('#container').html("");
            $('#containerTable').html("");
        $('#containerChart').html("");
        $('#containerChart').css('display', 'none');
         $('#container').css('display', 'block');
         $('#containerTable').css('display', 'block');
           $('#chartTableToggle').css('display', 'none');
        this.selectPill('li.products_tab');

          if(window.ProSavedModel.length>0)
        {
           rData.add(window.ProSavedModel.models);
        }
        else{
                rData.fetch();
        }    

        var CTableView = new ComTableView({
            tableHeader: 'Details By Product Interest',
            chartHeader: 'Product Interest',
            classificationCode: 'bar',
            el: $('#containerTable'),
            model: rData
        });
      

    },

   

    Source: function () {
        var rData = new SourceDataCollection([], { id: 5 });
        $('#container').html("");
            $('#containerTable').html("");
        $('#containerChart').html("");
        $('#containerChart').css('display', 'none');
         $('#container').css('display', 'block');
         $('#containerTable').css('display', 'block');
           $('#chartTableToggle').css('display', 'none');
        this.selectPill('li.source_tab');

          if(window.SrcSavedModel.length>0)
        {
           rData.add(window.SrcSavedModel.models);
        }
        else{
                rData.fetch();
        }    

        var CTableView = new ComTableView({
            tableHeader: 'Details By Source',
            chartHeader: 'Source',
            classificationCode: 'pie',
            el: $('#containerTable'),
            model: rData
        });
       

    },


    Decission: function () {
        var rData = new DecissionDataCollection([], { id: 8 });
         $('#container').html("");
            $('#containerTable').html("");
        $('#containerChart').html("");
        $('#containerChart').css('display', 'none');
         $('#container').css('display', 'block');
         $('#containerTable').css('display', 'block');
           $('#chartTableToggle').css('display', 'none');
        this.selectPill('li.decission_tab');

          if(window.DecSavedModel.length>0)
        {
           rData.add(window.DecSavedModel.models);
        }
        else{
                rData.fetch();
        }    

        var CTableView = new ComTableView({
            tableHeader: 'Details By Decision',
            chartHeader: 'Decision',
            classificationCode: 'pie',
            el: $('#containerTable'),
            model: rData
        });
       

    }

});

 /*Method to retrive GeneralUser chart data */
function GeneralWiseUsersChart() {

    var chartData = new GeneralUserDataChart();
    $('#containerChart').html("");

    var UTableView = new ComUserTableChartView({
        chartHeader: 'User Registration Analysis',
        el: $('#container'),
        model: chartData
        
    });

    chartData.fetch();
}

function DashboardChartViewer(){

var _this = this;
$('#containerChart').html("");

var orgData = new  OrganisationDataCollection([], { id: 2 } );
var BusData = new BusinessDataCollection([], { id: 3 });
var ProData = new ProductsDataCollection([], { id: 4 });
var ConData = new CountryDataCollection();
var SrcData = new SourceDataCollection([], { id: 5 });
var DecData = new DecissionDataCollection([], { id: 8 });

    if(!this.OrgSavedModel)
    {
        this.OrgSavedModel = new Backbone.Collection;
        orgData.fetch({
        success: function(model,resp){
        _this.OrgSavedModel.add(model.models);
    }
    });
    }
    else if (this.OrgSavedModel.models.length>0)
    {
        orgData.add(this.OrgSavedModel.models);
    }

    if(!this.BusSavedModel)
    {
        this.BusSavedModel = new Backbone.Collection;
        BusData.fetch({
        success: function(model,resp){
        _this.BusSavedModel.add(model.models);
    }});
    }
    else if (this.BusSavedModel.models.length>0)
    {
        BusData.add(this.BusSavedModel.models);
    }

    if(!this.ProSavedModel)
    {
        this.ProSavedModel = new Backbone.Collection;
        ProData.fetch({
        success: function(model,resp){
        _this.ProSavedModel.add(model.models);
    }});
    }
    else if (this.ProSavedModel.models.length>0)
    {
        ProData.add(this.ProSavedModel.models);
    }

    if(!this.SrcSavedModel)
    {
        this.SrcSavedModel = new Backbone.Collection;
        SrcData.fetch({
        success: function(model,resp){
        _this.SrcSavedModel.add(model.models);
    }});
    }
    else if (this.SrcSavedModel.models.length>0)
    {
        SrcData.add(this.SrcSavedModel.models);
    }

    if(!this.DecSavedModel)
    {
        this.DecSavedModel = new Backbone.Collection;
        DecData.fetch({
        success: function(model,resp){
        _this.DecSavedModel.add(model.models);
    }});
    }
    else if (this.DecSavedModel.models.length>0)
    {
        DecData.add(this.DecSavedModel.models);
    }
         
    if(!this.ConSavedModel)
    {
        this.ConSavedModel = new Backbone.Collection;
        ConData.fetch({
        success: function(model,resp){
        _this.ConSavedModel.add(model.models);
    }});
    }
    else if (this.ConSavedModel.models.length>0)
    {
        ConData.add(this.ConSavedModel.models);
    }


var OChartView = new DashboardChartView({
el: $('#containerChart'),
model: orgData,
tableHeader:'',
classificationCode: 'bar',
chartHeader: 'Work Organization'

});  

var BChartView = new DashboardChartView({
el: $('#containerChart'),
model: BusData,
tableHeader:'',
classificationCode: 'bar',
chartHeader: 'Business'

});

var BChartView = new DashboardChartView({
el: $('#containerChart'),
model: ProData,
tableHeader:'',
classificationCode: 'bar',
chartHeader: 'Product'

});    

var BChartView = new DashboardChartView({
el: $('#containerChart'),
model: ConData,
tableHeader:'',
classificationCode: 'pie',
chartHeader: 'Country'

});  

var BChartView = new DashboardChartView({
el: $('#containerChart'),
model: SrcData,
tableHeader:'',
classificationCode: 'pie',
chartHeader: 'Source'

});  

var BChartView = new DashboardChartView({
el: $('#containerChart'),
model: DecData,
tableHeader:'',
classificationCode: 'pie',
chartHeader: 'Decision'

});
    
      
    

    }

