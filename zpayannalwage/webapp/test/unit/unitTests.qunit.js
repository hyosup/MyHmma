/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comhmmausamyhmmamypay/zpayannalwage/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
