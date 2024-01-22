sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("com.hmmausa.myhmma.mypay.zpaystate.controller.App", {
        onInit: function() {
        },
        /**
         * (Async) 목록-보기 Button 이벤트핸들러
         *	- Summary 내역 팝업을 호출
        *
        * @param {sap.ui.base.Event} oEvent
        */
         onPressPaySummary: async function (oEvent) {
          const oViewModel = this.getView().getModel();
          // const mSelectedRowData = oEvent.getSource().getParent().getParent().getBindingContext().getObject();

          // oViewModel.setProperty("/detail", { ...mSelectedRowData });
         
          if (!this.pSummaryDialog) {
            const oView = this.getView();
            this.pSummaryDialog = await Fragment.load({
              id: oView.getId(),
              name: "com.hmmausa.myhmma.mypay.zpaystate.view.fragment.PaySummaryDialog",
              controller: this,
            });
            oView.addDependent(this.pSummaryDialog);
          }

          this.pSummaryDialog.open();
        },
        /**
         * Summary 내역 팝업을-닫기 Button 이벤트핸들러
         *
        */
        onPressCloseDialog: function () {
          this.pSummaryDialog.close();
        }    
      });
    }
  );
  