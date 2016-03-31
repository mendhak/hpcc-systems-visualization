(function(e,t){typeof define=="function"&&define.amd?define(["d3","topojson","../common/SVGWidget","./Utility","css!./Layered"],t):e.map_Layered=t(e.d3,e.topojson,e.common_SVGWidget,e.map_Utility)})(this,function(e,t,n,r){function o(){n.call(this),this._drawStartPos="origin",this._layers=[],this.projection("mercator")}var i=.25,s=2048/Math.PI;return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.prototype._class+=" map_Layered",o.prototype.publish("projection",null,"set","Map projection type",["albersUsa","albersUsaPr","azimuthalEqualArea","azimuthalEquidistant","conicEqualArea","conicConformal","conicEquidistant","equirectangular","gnomonic","mercator","orthographic","stereographic","transverseMercator"]),o.prototype.publish("centerLat",0,"number","Center Latitude",null,{tags:["Basic"]}),o.prototype.publish("centerLong",0,"number","Center Longtitude",null,{tags:["Basic"]}),o.prototype.publish("zoom",1,"number","Zoom Level",null,{tags:["Basic"]}),o.prototype.projection_orig=o.prototype.projection,o.prototype.projection=function(t){var n=o.prototype.projection_orig.apply(this,arguments);if(arguments.length){this._d3GeoProjection=e.geo[t]().scale(s).translate([0,0]);switch(t){case"orthographic":this._d3GeoProjection.clipAngle(90).rotate([0,0])}this._d3GeoPath=e.geo.path().projection(this._d3GeoProjection),this._zoomToFitOnNextRender=!0}return n},o.prototype.layers=function(e){return arguments.length?(this._layers=e,this):this._layers},o.prototype.size=function(e){var t=n.prototype.size.apply(this,arguments);return arguments.length&&(delete this._prevCenterLat,delete this._prevCenterLong),t},o.prototype.enter=function(t,r){n.prototype.enter.apply(this,arguments);var s=this;this._zoom=e.behavior.zoom().scaleExtent([.25*i,131072*i]).on("zoomstart",function(e){s._zoomstart_translate=s._zoom.translate(),s._zoomstart_scale=s._zoom.scale()}).on("zoom",function(){if(e.event&&e.event.sourceEvent&&e.event.sourceEvent.ctrlKey&&e.event.sourceEvent.type==="mousemove"){s.render();return}s.zoomed();var t=s.width()/2,n=s.height()/2,r=s.invert(t,n);s.centerLong(r[0]),s.centerLat(r[1]),s.zoom(s._zoom.scale()/i),s._prevCenterLong=s.centerLong(),s._prevCenterLat=s.centerLat(),s._prevZoom=s.zoom()}).on("zoomend",function(){}),this._zoomGrab=r.append("rect").attr("class","background"),this._layersTarget=r.append("g"),r.call(this._zoom)},o.prototype.update=function(t,r){n.prototype.update.apply(this,arguments);if(this._prevCenterLat!==this.centerLat()||this._prevCenterLong!==this.centerLong()||this._prevZoom!==this.zoom()){var o=e.geo[this.projection()]().scale(this.zoom()*i*s).translate([this.width()/2,this.height()/2]),u=o([this.centerLong(),this.centerLat()])||[this.width()/2,this.height()/2];this._zoom.scale(this.zoom()*i).translate([this.width()-u[0],this.height()-u[1]]),this._prevCenterLat=this.centerLat(),this._prevCenterLong=this.centerLong(),this._prevZoom=this.zoom()}this._zoomGrab.attr("width",this.width()).attr("height",this.height());var a=this._layersTarget.selectAll(".layerContainer").data(this.layers().filter(function(e){return e.visible()}),function(e){return e.id()}),f=this;a.enter().append("g").attr("class","layerContainer").each(function(t){t._svgElement=e.select(this),t._domElement=f._parentOverlay.append("div"),t.layerEnter(f,t._svgElement,t._domElement)}),a.each(function(e){e.layerUpdate(f)}),a.exit().each(function(e){e.layerExit(f),e._domElement.remove()}).remove(),a.order(),this.zoomed()},o.prototype.exit=function(e,t){n.prototype.enter.apply(this,arguments)},o.prototype.zoomed=function(){var e=this._layersTarget.selectAll(".layerContainer"),t=this;e.each(function(e){e.layerZoomed(t)})},o.prototype.render=function(e){var t=n.prototype.render.apply(this,arguments);return this._renderCount&&this._zoomToFitOnNextRender&&(this._zoomToFitOnNextRender=!1,this.zoomToFit()),t},o.prototype.project=function(e,t){e>=90?e=89:e<=-90&&(e=-89);var n=this._d3GeoProjection([t,e]);return n&&(n[0]*=this._zoom.scale(),n[1]*=this._zoom.scale(),n[0]+=this._zoom.translate()[0],n[1]+=this._zoom.translate()[1]),n},o.prototype.invert=function(e,t){return e-=this._zoom.translate()[0],t-=this._zoom.translate()[1],e/=this._zoom.scale(),t/=this._zoom.scale(),this._d3GeoProjection.invert([e,t])},o.prototype.zoomToFit=function(e){e=e||.95;var t=this._layersTarget.node().getBBox();if(t.width&&t.height){var n=this._zoom.translate(),r=t.x+t.width/2,i=t.y+t.height/2;n[0]-=r-this.width()/2,n[1]-=i-this.height()/2,this._zoom.translate(n);var s=this._zoom.scale(),o=s*Math.min(this.width()/t.width,this.height()/t.height);this._zoom.scale(o).event(this._layersTarget)}},o});