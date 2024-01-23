sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageBox",
        "sap/ui/core/Fragment"
    ],
    function(BaseController, MessageBox, Fragment) {
      "use strict";
  
      return BaseController.extend("com.hmmausa.myhmma.mypay.zpaytaxfed.controller.App", {
        onInit: function() {
        },
        /**
         * (Async) 목록-보기 Button 이벤트핸들러
         *	- 상세내역 팝업을 호출
        *
        * @param {sap.ui.base.Event} oEvent
        */
         onPressChg: async function (oEvent) {
          const oViewModel = this.getView().getModel();

          if (!this.pChangeDialog) {
            const oView = this.getView();
            this.pChangeDialog = await Fragment.load({
              id: oView.getId(),
              name: "com.hmmausa.myhmma.mypay.zpaytaxfed.view.fragment.ZpayTaxFedChg",
              controller: this,
            });
            oView.addDependent(this.pChangeDialog);
          }

          this.pChangeDialog.open();
        },

        /**
         * 상세내역 팝업을-닫기 Button 이벤트핸들러
         *
         */
        onPressCloseDialog: function () {
          this.pChangeDialog.close();
        },
      });
    }
  );
  