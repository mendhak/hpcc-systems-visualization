"use strict";
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery","kendo.all.min","../common/CanvasWidget", "../api/INDChart"], factory);
    } else {
        root.kendo_Bar = factory();
    }
}(this, function ($, kendo, CanvasWidget, INDChart) {


    function Bar() {
        CanvasWidget.call(this);
        INDChart.call(this);

        this._tag = "div";

    }
    Bar.prototype = Object.create(CanvasWidget.prototype);
    Bar.prototype.constructor = Bar;
    Bar.prototype._class += " kendo_Bar";
    Bar.prototype.implements(INDChart.prototype);

    Bar.prototype.publish("max", 100, "number", "Maximum",null,{tags:["Basic"]});

    function createKendoChart(context, domNode){

        var kendoCategories = [];
        var kendoSeries = [];
        context.data().forEach(function(ele, ind, arr){
            kendoCategories.push(ele[0]);

        });

        context.columns().forEach(function(ele, ind, arr){
            if(ind > 0){

                var correspondingData = [];
                context.data().forEach(function(dEle, dInd, dArr){
                    correspondingData.push(dEle[ind]);
                });
                kendoSeries.push({name:arr[ind], data:correspondingData});
            }
        });


        var kendoChartOptions = {
            renderAs: "canvas",
            height: "100%",
            legend: {
                visible: false
            },
            seriesDefaults: {
                type: "bar"
            },
            series:kendoSeries,

            valueAxis: {
                max: context.max(),
                line: {
                    visible: false
                },
                minorGridLines: {
                    visible: true
                },
                labels: {
                    rotation: "auto"
                }
            },
            categoryAxis: {
                categories: kendoCategories,
                majorGridLines: {
                    visible: false
                }
            },
            tooltip: {
                visible: true,
                template: "#= series.name #: #= value #"
            }
        };

        $(domNode).kendoChart(kendoChartOptions);
    }



    Bar.prototype.update = function (domNode, element) {

        createKendoChart(this, domNode);
        CanvasWidget.prototype.update.apply(this, arguments);
    };

    Bar.prototype.enter = function (domNode, element) {
        createKendoChart(this, domNode);
        CanvasWidget.prototype.enter.apply(this, arguments);
    };

    Bar.prototype.exit = function (domNode, element){

        kendo.destroy($(domNode));
        CanvasWidget.prototype.exit.apply(this, arguments);
    };

    return Bar;
}));
