/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/model/json/JSONModel",
        "sap/ui/Device",
        "com/hmmausa/myhmma/mypay/zpaystate/model/models"
    ],
    function (UIComponent, JSONModel, Device, models) {
        "use strict";

        return UIComponent.extend("com.hmmausa.myhmma.mypay.zpaystate.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                //this.getRouter().initialize();

                // set the device model
                // this.setModel(models.createDeviceModel(), "device");

                // set data model
				var oData = {
					Begda: new Date(),
					Currency: 'USD',
					T11 : '001C',
					T12 : '11/27/2024',
					T13 : '10/27/2024~11/27/2024',
					sample: {
						//Begda: new Date(),
						Endda: new Date('2023-09-20'),
						listInfo: { rowCount: 2 },
						list: [
							{Datum: new Date('2023-06-22 15:46:00:000'),
								CheckVal: '',
								TypeVal: 'Payroll deduction',
								LocationVal: 'Office(for payroll deduction)',
								AmountVal: '52.36'},
							{Datum: new Date('2023-06-22 15:04:00:000'),
								CheckVal: '262',
								TypeVal: 'Sale',
								LocationVal: 'GA',
								AmountVal: '52.36'},
						],
						Badge: '1234567',
						ChargesN: '1',
						ChargesT: '52.36',
						PaymentsN: '1',
						PaymentsT: '-52.36',
						DatumS: new Date('2022-10-03'),
						DatumE: new Date('2023-09-20'),
						Balance: '104.72',
					}				
				};
				var oModel = new JSONModel(oData);
				this.setModel(oModel);
            }
        });
    }
);