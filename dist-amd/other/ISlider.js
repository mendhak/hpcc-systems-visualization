(function(e,t){typeof define=="function"&&define.amd?define([],t):e.other_ISlider=t()})(this,function(){function e(){}return e.prototype._range={low:0,high:100},e.prototype._step=1,e.prototype._allowRange=!1,e.prototype.click=function(e){console.log("click:  "+e)},e.prototype.newSelection=function(e,t){console.log("newSelection:  "+e+", "+t)},e});