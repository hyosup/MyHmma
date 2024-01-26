// sap.ui.define([
//     "sap/ui/core/mvc/Controller"
// ],
//     /**
//      * @param {typeof sap.ui.core.mvc.Controller} Controller
//      */
//     function (Controller) {
//         "use strict";

//         return Controller.extend("com.crud.zsapcrud.controller.View1", {
//             onInit: function () {

//             }
//         });
//     });

sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, MessageBox) {
        "use strict";
        return Controller.extend("com.crud.zsapcrud.controller.View1", {

            onInit: function () {
            },
            onSelect:function(oEvent)
            {
                var sPath = oEvent.oSource._aSelectedPaths
                sPath = sPath[0].split("/")
                sPath = sPath[1]
                var myForm = this.getView().byId("cMyform")
                myForm.bindElement("/"+sPath)
                this.oPath = sPath
            },
            oCreateEmpPopup:function(){
                if(!this.oFragment)
                {
                    this.oFragment = new sap.ui.xmlfragment("com.crud.zsapcrud.fragment.CreateForm",this)
                    this.getView().addDependent(this.oFragment)
                    this.oFragment.open()
                }
                else{
                this.oFragment.open()
                }
            },
            oCloseButton:function(){
                this.oFragment.close()
                this.oFragment.destroy(true)
                this.oFragment = null
              },
            oUpdateEmpPopup:function(){
                if(!this.oReadEmpFragment)
                {
                  this.oReadEmpFragment =  new sap.ui.xmlfragment("com.crud.zsapcrud.fragment.ReadFrom",this)
                  var myForm = sap.ui.getCore().byId("cFragmentMyform")
                  myForm.bindElement("/"+this.oPath)
                  this.getView().addDependent(this.oReadEmpFragment)
                  this.oReadEmpFragment.open()
                }
                else{
                    this.oReadEmpFragment.open()
                }
               },
            oCloseReadButton:function()
            {
                this.oReadEmpFragment.close()
                this.oReadEmpFragment.destroy(true)
                this.oReadEmpFragment = null
            },
            oCreateEmp:function() // FOR CREATING NEW RECORD ************
            {
                
                var UserName = sap.ui.getCore().byId('_IDGenInput2').getValue()
                var UserSalary = sap.ui.getCore().byId('_IDGenInput3').getValue()
                var UserId=sap.ui.getCore().byId('_IDGenInput1').getValue()
                var UserAge=sap.ui.getCore().byId('_IDGenInput4').getValue()
                var UserCity=sap.ui.getCore().byId('_IDGenInput5').getValue()
                  var oAddEmpData={}  
                  oAddEmpData.Name=UserName
                  oAddEmpData.Salary=UserSalary
                  oAddEmpData.Id=UserId
                  oAddEmpData.Age=UserAge
                  oAddEmpData.City=UserCity
                  this.getView().getModel().create("/yuserdataSet",oAddEmpData,{
                    method:"POST",    
                    success:function (data){
                        MessageToast.show("Employee Created Successfully");
                    },
                    error: function (data){
                        MessageToast.show(data);
                    },
                    });
            },
            oUpdateEmp:function() // FOR UPDATING RECORD *************
            {
                var UserName = sap.ui.getCore().byId('_IDGenInput2').getValue()
                var UserSalary =  sap.ui.getCore().byId('_IDGenInput4').getValue()
                var UserId=sap.ui.getCore().byId('_IDGenInput1').getValue()
                var oAddEmpData={}  
                oAddEmpData.Name=UserName
                oAddEmpData.Salary=UserSalary
                this.getView().getModel().update("/yuserdataSet('" + UserId + "')",
                oAddEmpData,{
                method:"PATCH",    
                success:function (data){
                    MessageToast.show("Employee update Successfully with number");
                },
                error: function (data){
                    MessageToast.show(data);
                }
                });
            },
            oDeleteEmp:function() // FOR DELETING RECORD **************
            {
            this.oPath
            this.getOwnerComponent().getModel().remove("/yuserdataSet('" + this.oPath.split("'")[1] + "')", {
                   method: "DELETE",
                   success: function (data) {
                   MessageToast.show("Customer deleted Successfully");
                   },
                   error: function (Error) {
                   sap.m.MessageToast.show(Error);
                   }
                   });  
            },
            oSearchEmpPopup:function(){
                if(!this.SearchEmp)
                {
                    this.SearchEmp = new sap.ui.xmlfragment("com.crud.zsapcrud.fragment.SearchEmp",this)
                    this.getView().addDependent(this.SearchEmp)
                    this.SearchEmp.open()
                }
                else{
                this.SearchEmp.open()
                }
            },
            oReadEmp1:function() // FOR READING A SINGLE RECORD BY USING ID OF EMPLOYEE
            {
                var SearchInp = sap.ui.getCore().byId("_IDGenInput1").getValue()
                this.getOwnerComponent().getModel().read("/yuserdataSet('" + SearchInp + "')", {
                    method: "GET",
                    success: function (data) {
                   MessageBox.success("ID :- "+data.Id+" "+"Name :- "+data.Name+" "+"Salary :- "+data.Salary);
                    },
                    error: function (Error) {
                    sap.m.MessageToast.show(Error);
                    }
                    });
            },
            oCloseSearchButton:function()
            {
                this.SearchEmp.close()
                this.SearchEmp.destroy(true)
                this.SearchEmp = null
            }
        });
    });