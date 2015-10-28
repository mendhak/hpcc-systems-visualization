(function(e,t){typeof define=="function"&&define.amd?define(["d3","../common/HTMLWidget","amcharts.xy","require"],t):e.amchart_CommonXY=t(e.d3,e.common_HTMLWidget,e.AmCharts,e.require)})(this,function(e,t,n,r){function i(){t.call(this),this._tag="div",this._chart={}}return i.prototype=Object.create(t.prototype),i.prototype.constructor=i,i.prototype._class+=" amchart_CommonXY",i.prototype.publish("fontSize",null,"number","Font Size",null,{tags:["Basic","Shared"]}),i.prototype.publish("fontFamily",null,"string","Font Name",null,{tags:["Basic","Shared"]}),i.prototype.publish("fontColor",null,"html-color","Font Color",null,{tags:["Basic","Shared"]}),i.prototype.publish("lineWidth",0,"number","Line Thickness",null,{min:0,max:10,step:1,inputType:"range",tags:["Basic","Shared"]}),i.prototype.publish("lineColor",null,"html-color","Color of the data/content lines",null,{tags:["Basic","Shared"]}),i.prototype.publish("lineOpacity",0,"number","Line Opacity",null,{min:0,max:1,step:.001,inputType:"range",tags:["Basic","Shared"]}),i.prototype.publish("dashedLineStyle",0,"number","",null,{tags:["Advanced","Shared"]}),i.prototype.publish("yAxisTitle","","string","Y-Axis Title",null,{tags:["Basic","Shared"]}),i.prototype.publish("xAxisTitle","","string","X-Axis Title",null,{tags:["Basic","Shared"]}),i.prototype.publish("xAxisBaselineColor",null,"html-color","Axis color",null,{tags:["Basic","Shared"]}),i.prototype.publish("yAxisBaselineColor",null,"html-color","Axis color",null,{tags:["Basic","Shared"]}),i.prototype.publish("xAxisFontColor",null,"html-color","Horizontal axis text style (Color)",null,{tags:["Basic","Shared"]}),i.prototype.publish("yAxisFontColor",null,"html-color","Vertical axis text style (Color)",null,{tags:["Basic","Shared"]}),i.prototype.publish("xAxisTitleFontSize",null,"number","Vertical axis titletext style (Font Size)",null,{tags:["Basic","Shared"]}),i.prototype.publish("yAxisTitleFontSize",null,"number","Vertical axis titletext style (Font Size)",null,{tags:["Intermediate","Shared"]}),i.prototype.publish("xAxisTitleFontColor",null,"html-color","Color of axis value labels. Will use chart's color if not set.",null,{tags:["Basic","Shared"]}),i.prototype.publish("yAxisTitleFontColor",null,"html-color","Color of axis value labels. Will use chart's color if not set.",null,{tags:["Basic","Shared"]}),i.prototype.publish("xAxisLabelRotation",null,"number","X-Axis Label Rotation",null,{min:0,max:90,step:.1,inputType:"range",tags:["Intermediate","Shared"]}),i.prototype.publish("axisLineWidth",1,"number","Thickness of axis",null,{tags:["Intermediate","Shared"]}),i.prototype.publish("axisAlpha",1,"number","Axis opacity",null,{tags:["Intermediate"]}),i.prototype.publish("showScrollbar",!1,"boolean","Chart Scrollbar",null,{tags:["Intermediate"]}),i.prototype.publish("bulletSize",8,"number","Bullet Size",null,{tags:["Intermediate"]}),i.prototype.publish("bulletType","round","set","Bullet Type",["none","round","square","triangleUp","triangleDown","triangleLeft","triangleRight","bubble","diamond"],{tags:["Intermediate"]}),i.prototype.publish("marginLeft",50,"number","Margin (Left)",null,{tags:["Intermediate"]}),i.prototype.publish("marginRight",10,"number","Margin (Right)",null,{tags:["Intermediate"]}),i.prototype.publish("marginTop",20,"number","Margin (Top)",null,{tags:["Intermediate"]}),i.prototype.publish("marginBottom",50,"number","Margin (Bottom)",null,{tags:["Intermediate"]}),i.prototype.publish("dataDateFormat",null,"string","",null,{tags:["Private"]}),i.prototype.publish("xAxisAutoGridCount",!0,"boolean","Specifies whether number of gridCount is specified automatically, acoarding to the axis size",null,{tags:["Advanced"]}),i.prototype.publish("yAxisAutoGridCount",!0,"boolean","Specifies whether number of gridCount is specified automatically, acoarding to the axis size",null,{tags:["Advanced"]}),i.prototype.publish("xAxisGridPosition","middle","set","Specifies if a grid line is placed on the center of a cell or on the beginning of a cell",["start","middle"],{tags:["Advanced"]}),i.prototype.publish("yAxisGridPosition","middle","set","Specifies if a grid line is placed on the center of a cell or on the beginning of a cell",["start","middle"],{tags:["Advanced"]}),i.prototype.publish("xAxisFillAlpha",0,"number","Fill opacity. Every second space between grid lines can be filled with color. Set fillAlpha to a value greater than 0 to see the fills.",null,{tags:["Intermediate"]}),i.prototype.publish("yAxisFillAlpha",0,"number","Fill opacity. Every second space between grid lines can be filled with color. Set fillAlpha to a value greater than 0 to see the fills.",null,{tags:["Intermediate"]}),i.prototype.publish("xAxisFillColor",null,"html-color","Fill color. Every second space between grid lines can be filled with color. Set fillAlpha to a value greater than 0 to see the fills.",null,{tags:["Intermediate"]}),i.prototype.publish("yAxisFillColor",null,"html-color","Fill color. Every second space between grid lines can be filled with color. Set fillAlpha to a value greater than 0 to see the fills.",null,{tags:["Intermediate"]}),i.prototype.publish("xAxisGridAlpha",.2,"number","Grid alpha.",null,{tags:["Intermediate"]}),i.prototype.publish("yAxisGridAlpha",.2,"number","Grid alpha.",null,{tags:["Intermediate"]}),i.prototype.publish("xAxisDashLength",0,"number","Length of a dash. 0 means line is not dashed.",null,{tags:["Advanced"]}),i.prototype.publish("yAxisDashLength",0,"number","Length of a dash. 0 means line is not dashed.",null,{tags:["Advanced"]}),i.prototype.publish("yAxisTitleOffset",null,"number","",null,{tags:["Intermediate"]}),i.prototype.publish("useClonedPalette",!1,"boolean","Enable or disable using a cloned palette",null,{tags:["Intermediate","Shared"]}),i.prototype.updateChartOptions=function(){var e=this;return this._chart.theme="none",this._chart.type="xy",this._chart.color=this.fontColor(),this._chart.fontSize=this.fontSize(),this._chart.fontFamily=this.fontFamily(),this.marginLeft()&&(this._chart.marginLeft=this.marginLeft()),this.marginRight()&&(this._chart.marginRight=this.marginRight()),this.marginTop()&&(this._chart.marginTop=this.marginTop()),this.marginBottom()&&(this._chart.marginBottom=this.marginBottom()),this._chart.dataDateFormat=this.dataDateFormat(),this._chart.valueAxes[0].position="bottom",this._chart.valueAxes[0].axisAlpha=this.axisAlpha(),this._chart.valueAxes[0].title=this.xAxisTitle(),this._chart.valueAxes[0].axisThickness=this.axisLineWidth(),this._chart.valueAxes[0].axisColor=this.xAxisBaselineColor(),this._chart.valueAxes[0].color=this.xAxisFontColor(),this._chart.valueAxes[0].titleFontSize=this.xAxisTitleFontSize(),this._chart.valueAxes[0].titleColor=this.xAxisTitleFontColor(),this._chart.valueAxes[0].labelRotation=this.xAxisLabelRotation(),this._chart.valueAxes[0].autoGridCount=this.xAxisAutoGridCount(),this._chart.valueAxes[0].gridPosition=this.xAxisGridPosition(),this._chart.valueAxes[0].fillAlpha=this.xAxisFillAlpha(),this._chart.valueAxes[0].fillColor=this.xAxisFillColor(),this._chart.valueAxes[0].gridAlpha=this.xAxisGridAlpha(),this._chart.valueAxes[0].dashLength=this.xAxisDashLength(),this._chart.valueAxes[1].position="left",this._chart.valueAxes[1].axisAlpha=this.axisAlpha(),this._chart.valueAxes[1].title=this.yAxisTitle(),this._chart.valueAxes[1].axisThickness=this.axisLineWidth(),this._chart.valueAxes[1].axisColor=this.yAxisBaselineColor(),this._chart.valueAxes[1].color=this.yAxisFontColor(),this._chart.valueAxes[1].titleFontSize=this.yAxisTitleFontSize(),this._chart.valueAxes[1].titleColor=this.yAxisTitleFontColor(),this._chart.valueAxes[1].autoGridCount=this.yAxisAutoGridCount(),this._chart.valueAxes[1].gridPosition=this.yAxisGridPosition(),this._chart.valueAxes[1].fillAlpha=this.yAxisFillAlpha(),this._chart.valueAxes[1].fillColor=this.yAxisFillColor(),this._chart.valueAxes[1].gridAlpha=this.yAxisGridAlpha(),this._chart.valueAxes[1].dashLength=this.yAxisDashLength(),this._chart.valueAxes[1].axisTitleOffset=this.yAxisTitleOffset(),this._chart.dataProvider=this.formatData(this._data),this._chart.dataProvider.forEach(function(t,n){e._chart.dataProvider[n].color=e._palette(t[e._columns[2]]),e._chart.dataProvider[n].linecolor=e.lineColor()!==null?e.lineColor():e._palette(t[e._columns[2]])}),this._chart.colors=[],this.showScrollbar()?this._chart.chartScrollbar.enabled=!0:this._chart.chartScrollbar.enabled=!1,this._chart},i.prototype.buildGraphObj=function(e,t){var n=this,r={};return r.balloonText=n.tooltipTemplate(),r.lineAlpha=n.lineOpacity(),r.lineThickness=n.lineWidth(),r.bullet=n.bulletType(),r.bulletSize=n.bulletSize(),r.dashLength=n.dashedLineStyle(),r.lineAlpha=n.lineOpacity(),r.lineColor=n.lineColor(),r.lineThickness=n.lineWidth(),r.type=e,r.colorField="color",r.lineColorField="linecolor",r.xField=n._columns[1],r.yField=n._columns[2],r},i.prototype.formatData=function(e){var t=this,n=[];return e.forEach(function(e){var r={};t._columns.forEach(function(t,n){r[t]=e[n]}),n.push(r)}),n},i.prototype.columns=function(e){if(!arguments.length)return this._columns;var n=this,r=t.prototype.columns.apply(this,arguments);return arguments.length?(this._categoryField=e[0],this._valueField=[],e.slice(1,e.length).forEach(function(e){n._valueField.push(e)}),this._columns=e,this):r},i.prototype.enter=function(e,i){t.prototype.enter.apply(this,arguments);var s=this,o={theme:"none",type:"xy",automargins:!1,chartScrollbar:{},valueAxes:[{position:"bottom",title:" "},{position:"left",title:" "}],graphs:[{}],dataProvider:[{}],responsive:{enabled:!0}};typeof define=="function"&&define.amd&&(o.pathToImages=r.toUrl("amchartsImg")),this._chart=n.makeChart(e,o),this._chart.addListener("clickGraphItem",function(e){s.click(s.rowToObj(s._data[e.index]),s._columns[e.target.columnIndex+1])})},i.prototype.update=function(e,n){t.prototype.update.apply(this,arguments),e.style.width=this.size().width+"px",e.style.height=this.size().height+"px",this._palette=this._palette.switch(this.paletteID()),this.useClonedPalette()&&(this._palette=this._palette.cloneNotExists(this.paletteID()+"_"+this.id()))},i});