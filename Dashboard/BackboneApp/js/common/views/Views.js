<!--Copyright © 2014 WonderBiz Technologies Pvt. ltd.  -->

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
        this.rowViews = {};
        container = $('<div/>')
        this.model.each(function (model, index, data) {

            var values = new Backbone.Collection(model.get('Value'));

            var containerBox = $("<div class=\"col-lg-6\" />").append("<div class=\"table-responsive\"/>");

            if (index == 0) {
                containerBox.find('.table-responsive').append("<h3> General Details </h3><table class=\"table table-striped table-condensed\"/> ");
            }
            if (index == 1) {
                containerBox.find('.table-responsive').append("<h3> Details By Country </h3><table class=\"table table-striped table-condensed\"/>");
            }
            if (index == 2) {
                containerBox.find('.table-responsive').append("<h3> Details By Organization </h3><table class=\"table table-striped table-condensed\"/>");
            }
            if (index == 3) {
                containerBox.find('.table-responsive').append("<h3> Details By Nature of Business </h3><table class=\"table table-striped table-condensed\"/>");
            }
            if (index == 4) {
                containerBox.find('.table-responsive').append("<h3> Details By Product Interest </h3><table class=\"table table-striped table-condensed\"/>");
            }
            if (index == 5) {
                containerBox.find('.table-responsive').append("<h3> Details By Source </h3><table class=\"table table-striped table-condensed\"/>");
            }
            if (index == 6) {
                containerBox.find('.table-responsive').append("<h3>Details By Decision </h3><table class=\"table table-striped table-condensed\"/>");
            }

            //            containerBox.find('.table').append("<thead> <tr> <th>Key </th><th> Value</th></tr></thead>");

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
        this.template = _.template(" <td> <%=Key%></td><td align=\"right\" ><a href=\"dashboard.htm#general/" + this.options.filter + "\"> <%=Value%> </a></td>");
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});

/*rowview to include in tableview of country section in admin dashboard*/
var CountryTableRowView = Backbone.View.extend({
    template: _.template("<td> <%=CountryName%> </td> <td><a href=\"dashboard.htm#country/<%=Country_id%>\"> <%=Count%> </a> </td>"),
    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});

/*rowview to include in tableview of other sections in admin dashboard*/
var RegSecTableRowView = Backbone.View.extend({
    template: _.template("<td> <%=Description%> </td> <td><a href=\"dashboard.htm#regsec/<%=SectionDetailId%>\"> <%=Count%> </a> </td>"),
    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});

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

        this.$el.append("<center><span class='loading'><img src=\"assets/images/loadingImage.gif\" alt=\"Loading...\" class=\"img-responsive\" style=\"margin: 0 auto;\"></span></center>");
        this.model.on('reset', function () {
            _this.$el.constructor(".loading").remove(); 
            _this.render();
        });
    },
    render: function () {
        var indexRow = 0;
        var count = 0;


        var self = this;
        this.rowViews = {};
        container = $('<div/>');
       $('#containerChart').css('display', 'block');
        var containerBox = $("<div class=\"col-lg-6\" />").append("<align=\"right\"><div id =\"div-wrap\" class=\"DivWrap\" /> ");
        containerBox.find('.DivWrap').append("<a href = #id =\"b1\" onclick = clickme('" + this.options.filter + "'); ><span class=\"glyphicon glyphicon-import\"></span>  Export to Excel </a></right>");
        containerBox.find('.DivWrap').append("<div class=\"table-responsive\" id =\"tableWrap\"/>");

        containerBox.find('.table-responsive').append("<h3> " + this.options.tableHeader + " </h3> <table id=\"tableContent\" class=\"table table-striped table-condensed display\" />");
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
        //        alert(template(this.model.toJSON()));

        this.$el.append(container.children());

        if (indexRow <= 10) {
            $('#tableContent').dataTable({

                "bLengthChange": true,
                "bPaginate": false
            });
        }
        else {
            $('#tableContent').dataTable({
                "bLengthChange": true,
                "bPaginate": true
            });
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
    },
    render: function () {
        var indexRow = 0;
        var count = 0;


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
         TimeDateChartPainter(this.options.chartHeader,this.series); 
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
    },
    render: function () {
        var dataArrayCount = [];
        var dataArrayName = [];
        var series = [];
        var dataVariable = [];
        var indexRow = 0;
        var self = this;
        this.rowViews = {};
        container = $('<div/>');
        $('#containerChart').css('display', 'block');
        var containerBox = $("<div class=\"col-lg-6\" />").append("<div class=\"table-responsive\"/>");
        containerBox.find('.table-responsive').append("<h3> " + this.options.tableHeader + " </h3> <table id=\"tableContent\" class=\"table table-striped table-condensed display\"/>");
        containerBox.find('.table').append("<thead> <tr><th> </th><th> </th></tr></thead>");
        if (this.options.tableHeader == 'Details By Country') {
            this.model.each(function (model, index, data) {
                var CrowView = new CountryTableRowView({
                    tagName: 'tr',
                    model: model

                })
                dataArrayCount[index] = data[index].attributes.Count,
                dataArrayName[index] = data[index].attributes.CountryName,
                containerBox.find('.table').append(CrowView.render().$el);
                container.append(containerBox);

                this.data[index] = data[index];
                 indexRow++;
            });
            
            if (indexRow <= 10) {
            $('#tableContent').dataTable({

                "bLengthChange": true,
                "bPaginate": false,
                 "bFilter": false,
                "aoColumnDefs": [
            { 'bSortable': false, 'aTargets': [0]}],
            "aaSorting": [[1, "desc"]]

            });
        }
        else {
            $('#tableContent').dataTable({
                "bLengthChange": true,
                "bPaginate": true,
                "bFilter": false,
                "bJQueryUI": false,
                "bInfo": true,
                "bAutoWidth": false,
                "aoColumnDefs": [
            { 'bSortable': false, 'aTargets': [0]}],
            "aaSorting": [[1, "desc"]]
            
            });
            }
            series = generateData(dataArrayCount, dataArrayName);
            pieChartPainter( this.options.chartHeader);
            
        }
        else {
            this.model.each(function (model, index, data) {
                var CrowView = new RegSecTableRowView({
                    tagName: 'tr',
                    model: model
                })
                dataArrayCount[index] = data[index].attributes.Count,
                dataArrayName[index] = data[index].attributes.Description,
                containerBox.find('.table').append(CrowView.render().$el);
                container.append(containerBox);
                this.data[index] = data[index];
                indexRow++;
            });
        }

        this.$el.append(container.children());

        if (indexRow <= 10) {
            $('#tableContent').dataTable({

                "bLengthChange": true,
                "bPaginate": false,
                 "bFilter": false,
                "aoColumnDefs": [
            { 'bSortable': false, 'aTargets': [0]}],
            "aaSorting": [[1, "desc"]]

            });
            
        }
        else {
        var dataCountSet = [];
            $('#tableContent').dataTable({
                "bLengthChange": true,
                "bPaginate": true,
                "bFilter": false,
                "bJQueryUI": false,
                "bInfo": true,
                "bAutoWidth": false,
                "aoColumnDefs": [
            { 'bSortable': false, 'aTargets': [0]}],
            "aaSorting": [[1, "desc"]]
            
            });
           

        }
    
        if(this.options.classificationCode == 'pie'){
            series = generateData(dataArrayCount, dataArrayName);
            pieChartPainter( this.options.chartHeader);
              
        }
         else{
            if(indexRow>10)
            {
               for(var k=0;k<7;k++)
                {
                    dataCountSet[k] = dataArrayCount[k];
                }
                series = generateData(dataCountSet, dataArrayName);  
            }
            else
            {
                series = generateData(dataArrayCount, dataArrayName);  
                
            }
            barChartPainter(this.options.chartHeader,series);    
        }
          
    }
            
    
    
});

var barChartPainter = function(chartHeader,series)
{
     $('#containerChart').highcharts({

                /* **** For Column Or Bar Chart Chart **** */
             chart: {
                type: 'column',               // Give respective "type" of chart 
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
                        text: 'Registration Countries(Name)'
                    }
                },

                legend: {
                    labelFormatter: function() {
                        return this.name.slice(0, 20)+'...'
                    }
                 
                },  
                 plotOptions: {
            pie: {
                allowPointSelect: true, 
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    color: '#000000',
                    connectorColor: '#000000',
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
    
          series: series     // For Bar Chart 

            });
}

var pieChartPainter = function(chartHeader) {
    $('#containerChart').highcharts({
                  
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
                data:  $.parseJSON(JSON.stringify(chartData, null, " "))
            }]

        });
};

var TimeDateChartPainter = function(chartHeader,seriesData) {
    $('#containerChart').highcharts({
                chart: {
                    zoomType: 'x',
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