(function(e,t){typeof define=="function"&&define.amd?define(["d3","./Common2D"],t):e.google_Pie=t(e.d3,e.google_Common2D)})(this,function(e,t){function n(){t.call(this),this._chartType="PieChart"}function r(e){var t=[];for(var n=0;n<e;n++)t.push({});return t}return n.prototype=Object.create(t.prototype),n.prototype.constructor=n,n.prototype._class+=" google_Pie",n.prototype.publish("is3D",!1,"boolean","Enable 3D",null,{tags:["Basic","Shared"]}),n.prototype.publish("pieHole",0,"number","Pie Hole Size",null,{min:0,max:.9,step:.1,tags:["Intermediate"]}),n.prototype.publish("pieStartAngle",0,"number","Pie Start Angle",null,{tags:["Advanced"]}),n.prototype.publish("pieSliceText","percentage","set","The Content of The Text Displayed On The Slice",["none","label","value","percentage"],{tags:["Basic"]}),n.prototype.publish("pieSliceFontColor",null,"html-color","Specifies The Slice Text Style (Color)",null,{tags:["Basic"]}),n.prototype.publish("pieSliceFontFamily",null,"string","Specifies The Slice Text Style (Font Name)",null,{tags:["Basic"]}),n.prototype.publish("pieSliceFontSize",null,"number","Specifies The Slice Text Style (Font Size)",null,{tags:["Basic"]}),n.prototype.publish("pieSliceBorderColor",null,"html-color","The Color of The Slice Borders",null,{tags:["Intermediate"]}),n.prototype.publish("pieResidueSliceColor",null,"html-color","Color For The Combination Slice That Holds All Slices Below SliceVisibilityThreshold",null,{tags:["Advanced"]}),n.prototype.publish("pieResidueSliceLabel","Other","string","A Label For The combination Slice That Holds All Slices Below SliceVisibilityThreshold",null,{tags:["Advanced"]}),n.prototype.publish("sliceVisibilityThreshold",1/720,"number","The slice relative part, below which a slice will not show individually.",null,{tags:["Advanced"]}),n.prototype.publish("slicesOffset",[],"array","Per Slice Offset",null,{tags:["Advanced"]}),n.prototype.publish("slicesTextStyle",[],"array","Per Slice",null,{tags:["Private"]}),n.prototype.publish("slicesColor",[],"array","Per Slice Color",null,{tags:["Private"]}),n.prototype.getChartOptions=function(){var e=t.prototype.getChartOptions.apply(this,arguments);return e.colors=this._data.map(function(e){return this._palette(e[0])},this),e.is3D=this.is3D(),e.pieHole=this.pieHole(),e.pieStartAngle=this.pieStartAngle(),e.pieSliceText=this.pieSliceText(),e.pieSliceTextStyle={color:this.pieSliceFontColor(),fontName:this.pieSliceFontFamily(),fontSize:this.pieSliceFontSize()},e.pieSliceBorderColor=this.pieSliceBorderColor(),e.pieResidueSliceColor=this.pieResidueSliceColor(),e.pieResidueSliceLabel=this.pieResidueSliceLabel(),e.sliceVisibilityThreshold=this.sliceVisibilityThreshold(),e.slices=r(this.getNumSlices()),this.slicesColor().forEach(function(t,n){typeof e.slices[n]=="undefined"&&(e.slices[n]={}),e.slices[n].color=t}),this.slicesOffset().forEach(function(t,n){typeof e.slices[n]=="undefined"&&(e.slices[n]={}),e.slices[n].offset=t}),this.slicesTextStyle().forEach(function(t,n){typeof e.slices[n]=="undefined"&&(e.slices[n]={}),e.slices[n].textStyle=t}),e},n.prototype.getNumSlices=function(){return this.data().length},n.prototype.enter=function(e,n){t.prototype.enter.apply(this,arguments)},n.prototype.update=function(e,n){t.prototype.update.apply(this,arguments)},n});