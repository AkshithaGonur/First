sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.cg.Exercise.controller.View1", {
		onInit: function () {

		},
		handleSubmit:function(){
			sap.m.MessageToast("Submit button pressed");
		}
	});
});