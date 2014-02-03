<!--Copyright © 2014 WonderBiz Technologies Pvt. ltd.  -->

var navigatorPath= null;

 var chartHeaderName="";
/* this Table view will render admin home page data.*/
var TableView = Backbone.View.extend({
    initialize: function () {
        var _this = this;
        this.$el.append("<center><span class='loading'><img src=\"assets/images/loadingImage.gif\" alt=\"Loading...\ class=\"img-responsive\" style=\"margin: 0 auto;\"></span></center>");
        this.model.on('reset', function () {
            _this.$el.find(".loading").remove();
            _this.render();
        });

    },
    render: function () {
        var indexRow = 0;
        var self = this;
         var currentTabUrl = "Dashboard";
         navigatorPath="<u><a href="+window.location.href+">  <span class=\"glyphicon glyphicon-arrow-left\" style=\"font-size:1.5em\"></span></a></u>";
        $.cookie("navigatorVal", navigatorPath);
        this.rowViews = {};
        container = $('<div/>')
        this.model.each(function (model, index, data) {

            var values = new Backbone.Collection(model.get('Value'));

               var containerBox = $("<div class=\"col-lg-6\"  />").append("<div  class=\"panel panel-default\" id=\"accordion2\" style=\"height:250px;margin-bottom:20px;\" />");


            containerBox.find('.panel').append("<div class=\"panel-heading\"/>");


            if (index == 0) {
               containerBox.find('.panel-heading').append("<h4>General Details </h4> <a class=\"minimize\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseOne\">  </a> ");
               containerBox.find('.panel').append(" <div id=\"collapseOne\" class=\"accordion-body collapse in\" style=\"height: 0px;\"/>");
               containerBox.find('.accordion-body').append("<div class=\"accordion-inner\"/>");
                containerBox.find('.accordion-inner').append("<table class=\"table table-striped table-condensed\"/>");
            }
            if (index == 1) {
                 containerBox.find('.panel-heading').append("<h4> Details By Country</h4> <a class=\"minimize\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapse2\"></a> ");
               containerBox.find('.panel').append(" <div id=\"collapse2\" class=\"accordion-body collapse in\" style=\"height: 0px;\"/>");
               containerBox.find('.accordion-body').append("<div class=\"accordion-inner\"/>");
                containerBox.find('.accordion-inner').append("<table class=\"table table-striped table-condensed\"/>");
            }
            if (index == 2) {
                containerBox.find('.panel-heading').append("<h4> Details By Organization </h4><a class=\"minimize\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapse3\"></a> ");
               containerBox.find('.panel').append(" <div id=\"collapse3\" class=\"accordion-body collapse in\" style=\"height: 0px;\"/>");
               containerBox.find('.accordion-body').append("<div class=\"accordion-inner\"/>");
                containerBox.find('.accordion-inner').append("<table class=\"table table-striped table-condensed\"/>");
            }
            if (index == 3) {
                 containerBox.find('.panel-heading').append("<h4> Details By Nature of Business </h4><a class=\"minimize\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapse4\"></a> ");
               containerBox.find('.panel').append(" <div id=\"collapse4\" class=\"accordion-body collapse  in\" style=\"height: 0px;\"/>");
               containerBox.find('.accordion-body').append("<div class=\"accordion-inner\"/>");
                containerBox.find('.accordion-inner').append("<table class=\"table table-striped table-condensed\"/>");
            }
            if (index == 4) {
                  containerBox.find('.panel-heading').append("<h4> Details By Product Interest </h4><a class=\"minimize\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapse5\"> </a> ");
               containerBox.find('.panel').append(" <div id=\"collapse5\" class=\"accordion-body collapse in\" style=\"height: 0px;\"/>");
               containerBox.find('.accordion-body').append("<div class=\"accordion-inner\"/>");
                containerBox.find('.accordion-inner').append("<table class=\"table table-striped table-condensed\"/>");
            }
            if (index == 5) {
                 containerBox.find('.panel-heading').append("<h4> Details By Source </h4><a class=\"minimize\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapse6\"> </a> ");
               containerBox.find('.panel').append(" <div id=\"collapse6\" class=\"accordion-body collapse in\" style=\"height: 0px;\"/>");
               containerBox.find('.accordion-body').append("<div class=\"accordion-inner\"/>");
                containerBox.find('.accordion-inner').append("<table class=\"table table-striped table-condensed\"/>");
            }
            if (index == 6) {
                  containerBox.find('.panel-heading').append("<h4> Details By Decision </h4><a class=\"minimize\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapse7\"></a> ");
               containerBox.find('.panel').append(" <div id=\"collapse7\" class=\"accordion-body collapse in\" style=\"height: 0px;\"/>");
               containerBox.find('.accordion-body').append("<div class=\"accordion-inner\"/>");
                containerBox.find('.accordion-inner').append("<table class=\"table table-striped table-condensed\"/>");
            }

         
            if (index == 0) {
                values.each(function (row) {
                    indexRow++;

                    if (indexRow == 1) {
                        var rowView = new TableRowViewForGeneral({
                            filter: 'All',
                            tagName: 'tr',
                            model: row
                  
                        });
                    }
                    else if (indexRow == 2) {
                        var rowView = new TableRowViewForGeneral({
                            filter: 'Today',
                            tagName: 'tr',
                            model: row
                     
                        });
                    }
                    else if (indexRow == 3) {
                        var rowView = new TableRowViewForGeneral({
                            filter: 'Week',
                            tagName: 'tr',
                            model: row

                        });
                    }

                  
                    containerBox.find('.table').append(rowView.render().$el);


                    container.append(containerBox);
                });
            }
            else {
                values.each(function (row) {
                    indexRow++;
                    var rowView = new TableRowView({
                        tagName: 'tr',
                        model: row

                    });
                    containerBox.find('.table').append(rowView.render().$el);


                    container.append(containerBox);
                });
            }




            if (index == 1) {
                containerBox.find('table').append("<tr><td> &nbsp; </td><td align=\"right\"> <a href=\"dashboard.htm#country\"> More </a></td> </tr>");
            }
            if (index == 2) {
                containerBox.find('table').append("<tr><td> &nbsp; </td><td align=\"right\"> <a href=\"dashboard.htm#organisation\"> More </a></td> </tr>");
            }
            if (index == 3) {
                containerBox.find('table').append("<tr><td> &nbsp; </td><td align=\"right\"> <a href=\"dashboard.htm#business\"> More </a></td> </tr>");
            }
            if (index == 4) {
                containerBox.find('table').append("<tr><td> &nbsp; </td><td align=\"right\"> <a href=\"dashboard.htm#products\"> More </a></td> </tr>");
            }
            if (index == 5) {
                containerBox.find('table').append("<tr><td> &nbsp; </td><td align=\"right\"> <a href=\"dashboard.htm#source\"> More </a></td> </tr>");
            }
            if (index == 6) {
                containerBox.find('table').append("<tr><td> &nbsp; </td><td align=\"right\"> <a href=\"dashboard.htm#decission\"> More </a></td> </tr>");
            }


        });
        this.$el.append(container.children());
          sort();
    }

});

/*rowview to include in tableview for admin dashboard*/
var TableRowView = Backbone.View.extend({

    template: _.template(" <td> <%=Key%></td><td align=\"right\" > <%=Value%></td>"),

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});

/*rowview to include in tableview of general section in admin dashboard*/
var TableRowViewForGeneral = Backbone.View.extend({
    initialize: function (options) {
        this.template = _.template(" <td> <%=Key%></td><td align=\"right\" ><a href=\"dashboard.htm#general/" + this.options.filter + "\" onclick=\"GeneralTableHeaderName('<%=Key%>')\";> <%=Value%> </a></td>");
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});

/*rowview to include in tableview of country section in admin dashboard*/
var CountryTableRowView = Backbone.View.extend({

    template: _.template("<td><a href=\"dashboard.htm#country/<%=id%>\" onclick=\"HeaderName('<%=name%>','<%=id%>')\";><div style=\"width:100%;height:100%;\"> <%=name%>  </div> </a> </td> <td><%=y%>  </td>"),
    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});



/*rowview to include in tableview of other sections in admin dashboard*/
var RegSecTableRowView = Backbone.View.extend({

    template: _.template("<td><a href=\"dashboard.htm#regsec/<%=id%>\" onclick=\"HeaderName('<%=name%>','<%=id%>');\"><div style=\"width:100%;height:100%;\"> <%=name%>   </div> </a> </td> <td> <%=y%> </td>"),
    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});

function HeaderName(strName,id)
{

 $.cookie("TableHeaderSubName", chartHeaderName+"- "+strName);

 return false;
}
function GeneralTableHeaderName(strName)
{
    
 $.cookie("TableHeaderSubName", "General- "+strName.substring(0,strName.length-2));

 return false;
}

/*rowview to include in Common User TableView */
var UserTableRowView = Backbone.View.extend({
    template: _.template("<td> <%=User_FName%> <%=User_LName%> </td> <td> <%=User_Oranization%> </td><td> <%=NatureOfBusiness%> </td>"),
    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
    
        return this;
    }
});

/*tableview to render data of users */
var ComUserTableView = Backbone.View.extend({
    initialize: function (options) {

        var _this = this;

        this.$el.append(
        "<center><span class='loading'><img src=\"assets/images/loadingImage.gif\" alt=\"Loading...\" class=\"img-responsive\" style=\"margin: 0 auto;\"></span></center>");
        this.model.on('reset', function () {
            _this.$el.constructor(".loading").remove(); 
            _this.render();
        });
    },
    render: function () {

      
        var indexRow = 0;
        //var count = 0;

          navigatorPath=$.cookie('navigatorVal');

        var self = this;
        this.rowViews = {}; 
        container = $('<div/>');
       $('#containerChart').css('display', 'block');
          $('#chartTableToggle').css('display', 'none');
        var containerBox = $("<div class=\"col-lg-12\">").append("<align=\"right\"><div id =\"div-wrap\" class=\"DivWrap\" style=\"margin-top:20px\" /> ");
        containerBox.find('.DivWrap').append("<a href = #id =\"b1\" onclick = clickme('" + this.options.filter + "'); ><span class=\"glyphicon glyphicon-download-alt\"></span>  Export to Excel </a></right><div id=\"nevTab\" align=\"right\">"+navigatorPath+"</div>");
        containerBox.find('.DivWrap').append("<div class=\"table-responsive \" id =\"tableWrap\"/>");

        containerBox.find('.table-responsive').append("<h3> " + this.options.tableHeader+", "+$.cookie('TableHeaderSubName')+"</h3> <table id=\"tableContent\" class=\"table table-striped table-condensed display\" />");
        containerBox.find('.table').append("<thead> <tr> <th>Name </th><th> Company</th><th> Nature of Business</th></tr></thead>");

        this.model.each(function (model, index, data) {
            var UrowView = new UserTableRowView({
                tagName: 'tr',
                model: model    

            })
            containerBox.find('.table').append(UrowView.render().$el);

            container.append(containerBox);

            indexRow++;
            
        });
        

        this.$el.append(container.children());

        if (indexRow <= 10) {
            $('#tableContent').dataTable({
             "bJQueryUI": true,
                "bLengthChange": true,
                "bPaginate": false,
                "bDestroy": true
            });
        }
        else {
            $('#tableContent').dataTable({
             
                "bLengthChange": true,
                "bPaginate": true,
                "bLengthChange": true,
                  "bJQueryUI": true,
		
                "bInfo": true,
                "bDestroy": true
            });
        }

    }
});
var count = 0;
var DashboardChartView = Backbone.View.extend({

   initialize: function (options) {

        var _this = this;

        this.$el.append("<center> <span class='loading'><img src=\"assets/images/loadingImage.gif\" alt=\"Loading...\" class=\"img-responsive\" style=\"margin: 0 auto;\"></span></center>");
        this.model.on('reset', function () {
            _this.$el.constructor(".loading").remove();
            _this.render();
        });
        if(this.model.length)
        {
              _this.$el.constructor(".loading").remove();
            _this.render();
        }

    },
     render: function () {
        
        if(this.options.classificationCode=='TimeArea')
        {
             url=null;
            var divName = "charts"+count;
            this.$el.append('<div id='+divName+' class=\"col-lg-12\ " style="\margin-top: 30px\";></div>');
            count++;
            drawOrgChart(this.model,this.options.chartHeader,this.options.classificationCode,divName,url);
        }
        else
        {
            var url = null;
            var divName = "charts"+count;
            this.$el.append('<div id='+divName+' class=\"col-lg-6\" style="\margin-top: 30px\";></div>');
            count++;
            if (this.options.classificationCode=="pie")
            {
                if(this.options.chartHeader=="Country")
                {
                    url="#country/"; 
                }
                else
                {
                    url="#regsec/"; 
                }
            }
            drawOrgChart(this.model,this.options.chartHeader,this.options.classificationCode,divName,url);
        }
    }
});

var series = [];
var seriesOne = {};
seriesOne.name = "Registrations"; 
seriesOne.data = [];
 seriesOne.type = "area";
var dataPoint = {};
/*TableView to render charts of users */
var ComUserTableChartView = Backbone.View.extend({
     
    initialize: function (options) {
        
        var _this = this;
        this.series = [];
        this.seriesOne = {};
            this.seriesOne.name = "Registrations"; 
            this.seriesOne.data = [];
            this.seriesOne.type = "area";

        
        this.model.on('reset', function () {
            _this.$el.constructor(".loading").remove();
            _this.render();
        });
        if(this.model.length)
        {
            _this.$el.constructor(".loading").remove();
            _this.render();
        }
    },
    render: function () {
        var indexRow = 0;
       

        var self = this;
        this.rowViews = {};
        
        var _this = this;
        this.model.each(function (model, index, data) {
            var dataPoint = {};
           dataPoint.x = new Date(data[index].attributes.Key);
            dataPoint.y = data[index].attributes.Value;    
           
            _this.seriesOne.data.push(dataPoint);
            
        });
         this.series.push(_this.seriesOne);
           
           var divName = "charts"+count;
       this.$el.append('<div id='+divName+' class=\"col-lg-12\" style="\margin-top: 30px\";></div>');
        count++;

         TimeDateChartPainter(divName,this.options.chartHeader,this.series); 
        //        alert(template(this.model.toJSON()));
        
            
       
    }
});


var data = [];
/*TableView to render charts and data of users */
var ComTableView = Backbone.View.extend({
    
    initialize: function (options) {
      
        var _this = this;

        this.$el.append("<center> <span class='loading'><img src=\"assets/images/loadingImage.gif\" alt=\"Loading...\" class=\"img-responsive\" style=\"margin: 0 auto;\"></span></center>");
        this.model.on('reset', function () {
            _this.$el.constructor(".loading").remove();
            _this.render();
        });
        if(this.model.length)
        {
            _this.$el.constructor(".loading").remove();
            _this.render();
        }
    },
    
   
    render: function () {
    
        var dataArrayCount = [];
        var dataArrayName = [];
        var series = [];
        var dataVariable = [];
        var indexRow = 0;
        var self = this;
        var modelData;
        var url = null;
        var currentTabUrl = window.location.hash
         navigatorPath="<u><a href="+window.location.href+">  <span class=\"glyphicon glyphicon-arrow-left\" style=\"font-size:1.5em\"></span> </a></u>";
        $.cookie("navigatorVal", navigatorPath);
        this.rowViews = {};
        container = $('<div/>');
       
        var containerBox = $("<div class=\"col-lg-12\" />").append("<div class=\"table-responsive\" />");
        containerBox.find('.table-responsive').append("<h3> " + this.options.tableHeader +" </h3> <table id=\"tableContent\" class=\"table table-striped table-condensed display\"/>");
        containerBox.find('.table').append("<thead> <tr><th> </th><th> </th></tr></thead>");
        if (this.options.tableHeader == 'Details By Country') {
            this.model.each(function (model, index, data) {
                var CrowView = new CountryTableRowView({
                    tagName: 'tr',
                    model: model,
                    modelData:model
                })

                containerBox.find('.table').append(CrowView.render().$el);
                container.append(containerBox);
              
                indexRow++;
            });
            url="#country/";
            
            
            
            $('#tableContent').dataTable({
             
                "bLengthChange": true,
                "bPaginate": true,
                "bFilter": false,
                 "bJQueryUI": true,
                "bInfo": true,
                "bAutoWidth": false,
                "aoColumnDefs": [
            { 'bSortable': false, 'aTargets': [0]}],
            "aaSorting": [[1, "desc"]],
                "bDestroy": true

            });
        
            
             var divName = "charts"+count;
              $('#container').append('<div id='+divName+' style="\margin-top: 50px\";></div>');
             count++;
      
            drawOrgChart(this.model,this.options.chartHeader,this.options.classificationCode,divName,url);
            
        }
        else {

        

            this.model.each(function (model, index, data) {
                var CrowView = new RegSecTableRowView({
                    tagName: 'tr',
                    model: model
                })
               
                containerBox.find('.table').append(CrowView.render().$el);
                container.append(containerBox);
               
                indexRow++;
            });
            url="#regsec/";
                var divName = "charts"+count;
             $('#container').append('<div id='+divName+'  style="\margin-top: 30px\";></div>');
                count++;
   
            drawOrgChart(this.model,this.options.chartHeader,this.options.classificationCode,divName,url)
        }

      this.$el.append(container.children());

        
             $('#tableContent').dataTable({
              "bLengthChange": true,
                "bPaginate": true,
                "bFilter": false,
                 "bJQueryUI": true,
                "bInfo": true,
                "bAutoWidth": false,
                "aoColumnDefs": [
            { 'bSortable': false, 'aTargets': [0]}],
            "aaSorting": [[1, "desc"]],
                "bDestroy": true

            });
            
        
      
      

    }
            
    
    
});
 var dataArrayName = [];

function drawOrgChart(model,chartName,chartType,divName,urlPath)
{
  var indexRow = 0;
  var dataArrayCount = [];
         dataArrayName = [];
         dataArrayIds = [];
        var series = [];
        var dataCountSet =[];
        var modelData=[];

        if(chartType=='TimeArea'){
         
         var self = this;
        this.rowViews = {};
        
        var _this = this;
       model.each(function (model, index, data) {
            var dataPoint = {};
           dataPoint.x = new Date(data[index].attributes.Key);
            dataPoint.y = data[index].attributes.Value;    
           
            _this.seriesOne.data.push(dataPoint);
            
        });
         this.series.push(_this.seriesOne);
         TimeDateChartPainter(divName,chartName,this.series); 
         }else{

           model.each(function (model, index, data) {
                if(index<=7){
                dataArrayCount[index] = data[index].attributes.y,
                dataArrayName[index] = data[index].attributes.name.slice(0, 5)+'...',
                dataArrayIds[index] = data[index].attributes.id
                modelData[index] = data[index];
                 indexRow++;
                 }
                });

             if(chartType == 'pie'){
            series = generateData(dataArrayCount, dataArrayName);
            pieChartPainter(modelData,chartName,divName,urlPath);
               chartHeaderName=chartName;
        }
         else{
            if(indexRow>10)
            {
               for(var k=0;k<7;k++)
                {
                    dataCountSet[k] = dataArrayCount[k];
                }
               // series = generateData(dataCountSet, dataArrayName);  
            }
            else
            {
                //series = generateData(dataArrayCount, dataArrayName);  
                
            
            }
             chartHeaderName=chartName;
            barChartPainter(modelData,chartName,series,divName);   
            }
        }
              
    
}



var barChartPainter = function(model,chartHeader,series,divName)
{

    $('#'+divName).highcharts({

                /* **** For Column Or Bar Chart Chart **** */
             chart: {
                type: 'column'             // Give respective "type" of chart 
//                margin: [ 0, 50, 0, 50]   
            },  
       title: {
               text: chartHeader + ' wise Analysis',
               x: -30 //center
           },
      subtitle: {
                text: 'Registration',
                x: -30
            },
                yAxis: {

                    title: {
                        text: 'Total Registration(Number)'
                    },

                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
          /* **** For Pie & Bar Chart Chart **** */
             
                xAxis: {
                    title: {
                        text: chartHeader+' Catagories'
                    },
                         labels: {
                     rotation: -45,
                    align: 'right',
                    
                    
                    style: {
                        
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                },
                      
                    categories: dataArrayName }        ,                   
                    

                  plotOptions: {
              
                    column: {
                       grouping: false,
                    colorByPoint: true,
                    allowPointSelect: true,
                cursor: 'pointer',

                dataLabels: {
                    enabled: false,
                     inside: true
              }
              } ,
               pie: {
                allowPointSelect: true, 
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    color: '#000000',
                    connectorColor: '#000000',
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }               
            }},
             legend: {
                    labelFormatter: function() {
                        return this.name.slice(0, 20)+'...'
                    },
                       enabled:false
                 
                },
      series: 
      [{
           
            name: 'Total Registration ',  
            data:  $.parseJSON(JSON.stringify(model, null, " ")),
           
            point:
            {
                events:
                {
                    click: function (e) {
                    console.log(e.point);
                    
                     $.cookie("TableHeaderSubName",chartHeader+"- "+e.point.name);
                        window.location = "dashboard.htm#regsec/"+e.point.id;
                        //                      alert(e.point.y);
                        
                        e.preventDefault();
                    }
                }
            }   
        }]
});

}

var variableSlice = false;
var tempSlice = null;
var pieChartPainter = function(model,chartHeader,divName,urlPath) {
    $('#'+divName).highcharts({
                  
                /* **** For Pie Chart Chart **** */
                chart: {
                    type: 'pie',
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },

                title: {
                    text: chartHeader + ' wise Analysis',
                    x: -30 //center
                },
                subtitle: {
                    text: 'Registration',
                    x: -30
                },
               tooltip: {
        	    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
  plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
              },
              showInLegend: true

            }
        },
          
           /* **** For Pie Chart **** */
                    series: [{
           
                name: 'Total Registration ',  
                data:  $.parseJSON(JSON.stringify(model, null, " ")),

                 point:{
              events:{
               
                  click: function (e) {
               
                  if(variableSlice)
                  {
                        tempSlice.slice();
                  }
                  chartHeaderName=chartHeader;
                   $.cookie("TableHeaderSubName",chartHeader+"- "+e.point.name);
                  window.location = "dashboard.htm"+urlPath+e.point.id;
                  e.point.slice();      
                  tempSlice = e.point;            
                 variableSlice = true;
             console.log(e.point);
                         e.preventDefault();
                  }
              
              }
              
          }   
           
            }]

        });
};

var TimeDateChartPainter = function(divName,chartHeader,seriesData) {
    $('#'+ divName).highcharts({
                chart: {
                    zoomType: 'x',
                     type: 'column',
                    spacingRight: 20
                },
                title: {
                    text: chartHeader   
                },
                
                xAxis: {
                    type: 'datetime',
                    maxZoom: 14 * 24 * 3600000, // fourteen days
                    title: {
                        text: null
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Total Registration(Number)'
                    }
                },
                legend: {
                enabled: false
            },

                plotOptions: {
                    area: {
                        fillColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                            stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                        },
                        lineWidth: 1,
                        marker: {
                            enabled: false
                        },
                        shadow: false,
                        states: {
                            hover: {
                                lineWidth: 1
                            }
                        },
                        threshold: null
                    }
                },
                series: seriesData,
             
            });
    
}



/*convert json data response to chart data series*/
function generateData(totalCount, countryName) {
    var len = totalCount.length;

    var series = [];
    var ps = [];
   
    for (var i = 0; i < len; i++) {
        ps[i] = {
            y: totalCount[i],
            n: countryName[i]
        };
    }
    countryName = [];
    for (var k = 0; k < len; k++) {
        var p = ps[k],
                    sIndex = $.inArray(p.n, countryName);

        if (sIndex < 0) {
            sIndex = countryName.push(p.n) - 1;
           
            series.push({
                name: p.n,
                data: []
            });
            
        }
        series[sIndex].data.push(p);
    }
    chartData = $.map(series, function (obj, i) {

        return [[obj.name, totalCount[i]]];

    });
    return series;
}

/*to generate xls report*/
function clickme(filter) {  

    var url = ServiceURL+'GetExcelReport/' + filter;
    location.href = url;
    return false;
}

