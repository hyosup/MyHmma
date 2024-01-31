sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/core/Fragment"
    ],
    function(BaseController,Fragment) {
      "use strict";
      
      return BaseController.extend("com.hmmausa.myhmma.mypay.zpaystate.controller.App", {
        // pSummaryHTMLDialog:null,

        onInit: function() {

          // let ggg=  this.getView().byId("idHTMLCon1111111").setContent('<div class="content">Main View</div>'); // Main View 잘 바뀜
          // this.loadFragment({id : "fr1", name: "com.hmmausa.myhmma.mypay.zpaystate.view.fragment.PaySummaryHTMLDialog",controller: this});//Fragment loading
          
        },


        onAfterRendering: function() {
          //  this.getView().byId("idHTMLContent");
          //  this.pSummaryHTMLDialog.close();
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

        onPressWindow: function (oEvent) {
          this.getView().getModel()
          const oViewModel = this.getView().getModel();
				  const aConresnList = oViewModel.getProperty("/Currency"); // 사유 전체목록
          //alert(aConresnList)
          
          // https://ttowa.tistory.com/entry/CSS-%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%82%B4-%ED%8A%B9%EC%A0%95-%EC%98%81%EC%97%AD%EB%A7%8C-print%ED%94%84%EB%A6%B0%ED%8A%B8-%ED%95%98%EA%B8%B0
          // https://code-study.tistory.com/43
          // 출처: https://ttowa.tistory.com/entry/CSS-페이지-내-특정-영역만-print프린트-하기 [Front-end 개발:티스토리]
          let htmlTagCss = '<style>'+
            '@media print {  table tr { -webkit-print-color-adjust:exact;}}'+
            '@media print { button, #sec_2{display:none} }'+            
            '</style>';

          let htmlTagScript = '<script>'+
            'function onPrint(){ window.print(); window.close(); }'+
            '</script>';
         
          let htmlTagButton = 
          '<button type="button" style="float: right;" onclick="onPrint()")">Print</button> <br>';

          let htmlTag = 
          '<table width="100%" style="border:1px solid black; border-collapse:collapse">'+
            '<tr>'+
            '   <td rowspan="3" style="border:1px solid black; text-align:center;" bgcolor="#ECFCEB" >Hyundai Motor <br>Manufacturing Alabam<br>700 Hyundai Boulevard<br>Montgomery, AL 36105<br></td>'+
            '   <td width="20%" style="border:1px solid black;" bgcolor="#F5F5F5">Check#</td>'+
            '   <td width="20%" style="border:1px solid black;" bgcolor="">'+aConresnList+'</td>'+
            ' </tr>'+
            ' <tr>'+
            '   <td style="border:1px solid black;" bgcolor="#F5F5F5" >Check Date</td>'+
            '   <td style="border:1px solid black;" class="uoBGPrint" >'+oViewModel.getProperty("/T12")+'</td>'+
            ' </tr>'+
            ' <tr >'+
            '   <td style="border:1px solid black;" bgcolor="#F5F5F5">Pay Period</td>'+
            '   <td style="border:1px solid black;">10/27/2024~11/27/2024</td>'+
            ' </tr>'+
            '</table>';
            let htmlTagP = '<p>';

            let htmlTag2 = 
            '<table width="100%" style="border:1px solid black; border-collapse:collapse">'+
              '<tr >'+
              '   <td width="40%" rowspan="3" style="border:1px solid black;" bgcolor="#E8F3F8" >Mr. Christoper Dean<br>James Dean <br>Prattville 36067</td>'+
              '   <td style="border:1px solid black;" bgcolor="#F5F5F5">Employee#</td>'+
              '   <td colspan="3" style="border:1px solid black;"></td>'+
              ' </tr>'+
              ' <tr>'+
              '   <td width="15%" style="border:1px solid black;  bgcolor="#F5F5F5"">FED</td>'+
              '   <td width="15%" style="border:1px solid black;">33</td>'+
              '   <td width="15%" style="border:1px solid black;  bgcolor="#F5F5F5"">FED</td>'+
              '   <td width="15%" style="border:1px solid black;">33</td>'+
              ' </tr>'+
              ' <tr >'+
              '   <td style="border:1px solid black;"  bgcolor="#F5F5F5">AL</td>'+
              '   <td style="border:1px solid black;">55</td>'+
              '   <td style="border:1px solid black;"  bgcolor="#F5F5F5">FED</td>'+
              '   <td style="border:1px solid black;">33</td>'+
              ' </tr>'+
              '</table>';

             let htmlTag3 = 
              '<table width="100%" style="border:1px solid black; border-collapse:collapse">'+
                '<tr>'+
                '   <td style="border:1px solid black;" bgcolor="#E8F3F8"></td>'+
                '   <td style="border:1px solid black;" bgcolor="#E8F3F8">GROSS</td>'+
                '   <td style="border:1px solid black;" bgcolor="#E8F3F8">PRE-TAX</td>'+
                '   <td style="border:1px solid black;" bgcolor="#E8F3F8">NON-TAX</td>'+
                '   <td style="border:1px solid black;" bgcolor="#E8F3F8">TAXABLE</td>'+
                '   <td style="border:1px solid black;" bgcolor="#E8F3F8">TAXES</td>'+
                '   <td style="border:1px solid black;" bgcolor="#E8F3F8">POST-TAX</td>'+
                '   <td style="border:1px solid black;" bgcolor="#E8F3F8">NET PAY</td>'+
                ' </tr>'+
                ' <tr>'+
                '   <td style="border:1px solid black;" bgcolor="#F5F5F5" >CURR</td>'+
                '   <td style="border:1px solid black;"></td>'+
                '   <td style="border:1px solid black;"></td>'+
                '   <td style="border:1px solid black;">0.00</td>'+
                '   <td style="border:1px solid black;" bgcolor="#FFFCD7">123.00</td>'+
                '   <td style="border:1px solid black;"></td>'+
                '   <td style="border:1px solid black;"></td>'+
                '   <td style="border:1px solid black;">123</td>'+
                ' </tr>'+
                ' <tr>'+
                '   <td style="border:1px solid black;" bgcolor="#F5F5F5" >YTD</td>'+
                '   <td style="border:1px solid black;"></td>'+
                '   <td style="border:1px solid black;"></td>'+
                '   <td style="border:1px solid black;">0.00</td>'+
                '   <td style="border:1px solid black;" bgcolor="#FFFCD7">123.00</td>'+
                '   <td style="border:1px solid black;"></td>'+
                '   <td style="border:1px solid black;"></td>'+
                '   <td style="border:1px solid black;">123</td>'+
                ' </tr>'+
                '</tbody>'+
                '</table>';
          
              let htmlTag4 = 
              '<table width="100%" style="border:1px solid black; border-collapse:collapse">'+
                '<tr>'+
                '   <td style="border:1px solid black;" bgcolor="#E8F3F8"></td>'+
                '   <td style="border:1px solid black; text-align:center;" bgcolor="#E8F3F8">Current Amount</td>'+
                '   <td style="border:1px solid black; text-align:center;" bgcolor="#E8F3F8">YEAR TO Date Amount</td>'+
                ' </tr>'+
                ' <tr>'+
                '   <td style="border:1px solid black;" bgcolor="#F5F5F5" >401(k) Wages</td>'+
                '   <td style="border:1px solid black;"></td>'+
                '   <td style="border:1px solid black;"></td>'+
                ' </tr>'+
                '</tbody>'+
                '</table>';

              let htmlTag5 = 
                '<table width="100%" style="border:none; border-collapse:collapse">'+
                  '<tr>'+
                  '   <td style="vertical-align: top;"  >'+
                        '<table width="100%" style="border:1px solid black; border-collapse:collapse">'+
                          '<tr>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#E8F3F8">EARINGS</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#E8F3F8">RATE</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#E8F3F8">HOURS</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#E8F3F8">CURRENT</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#E8F3F8">YTD</td>'+
                          ' </tr>'+
                          ' <tr>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >SP2-10</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >1.10</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >63.50</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >989.40</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >989.40</td>'+
                          ' </tr>'+
                          ' <tr>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >SP2-15</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >1.10</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >63.50</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >989.40</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >989.40</td>'+
                          ' </tr>'+
                          ' <tr>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >SP2-20</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >1.10</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >63.50</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >989.40</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >989.40</td>'+
                          ' </tr>'+
                          ' <tr>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >RegHrsWK</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >1.10</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >63.50</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >989.40</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >989.40</td>'+
                          ' </tr>'+
                          ' <tr>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >PersDay</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >1.10</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >63.50</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >989.40</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >989.40</td>'+
                          ' </tr>'+
                          ' <tr>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >Vacation</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >1.10</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >63.50</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >989.40</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >989.40</td>'+
                          ' </tr>'+
                          ' <tr>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >Holiday</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >1.10</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >63.50</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >989.40</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >989.40</td>'+
                          ' </tr>'+
                          ' <tr>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >Holiday2</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >1.10</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >63.50</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >989.40</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >989.40</td>'+
                          ' </tr>'+
                          ' <tr>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >Holiday3</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >1.10</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >63.50</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >989.40</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >989.40</td>'+
                          ' </tr>'+
                          ' <tr>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >Holiday4</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >1.10</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >63.50</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >989.40</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >989.40</td>'+
                          ' </tr>'+
                          ' <tr>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >Holiday5</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >1.10</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >63.50</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >989.40</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >989.40</td>'+
                          ' </tr>'+
                          ' <tr>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >Holiday6</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >1.10</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >63.50</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >989.40</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >989.40</td>'+
                          ' </tr>'+
                          '</tbody>'+
                        '</table>'+
                  '   </td>'+
                  '   <td style="vertical-align: top;"  >'+
                        '<table width="100%" style="border:1px solid black; border-collapse:collapse">'+
                          '<tr>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#E8F3F8">TAXES</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#E8F3F8"></td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#E8F3F8">CURRENT</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#E8F3F8">YTD</td>'+
                          ' </tr>'+
                          ' <tr>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" ></td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >FED</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" ></td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" ></td>'+
                          ' </tr>'+
                          ' <tr>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >W/H EE</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" ></td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" ></td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" ></td>'+
                          ' </tr>'+
                          ' <tr>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >SocSecEE</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" ></td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" ></td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" ></td>'+
                          ' </tr>'+
                          ' <tr>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >MedcarEE</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" ></td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" ></td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" ></td>'+
                          ' </tr>'+
                          ' <tr>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >State</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >AL</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" ></td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" ></td>'+
                          ' </tr>'+
                          ' <tr>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >W/H EE</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" ></td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" ></td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" ></td>'+
                          ' </tr>'+
                          ' <tr>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" >TOTAL</td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" ></td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" ></td>'+
                          '   <td style="border:1px solid black; text-align:center;" bgcolor="#F5F5F5" ></td>'+
                          ' </tr>'+
                          '</tbody>'+
                        '</table>'+
                  '   </td>'+
                  ' </tr>'+
              
                  '</tbody>'+
                  '</table>';

            



          var sTargetContent = htmlTagCss+htmlTagButton+htmlTagP+htmlTag+htmlTagP+htmlTag2+htmlTagP+htmlTag3+htmlTagP+htmlTag4+htmlTagP+htmlTag5;
              
          //var w = window.open();
          // 사이즈 지정해서 열기, 그냥 열면 탭으로 열림.
          // https://ssd0908.tistory.com/entry/JavaScript-windowopen-%EC%83%88%EC%B0%BD%EC%9C%BC%EB%A1%9C-%EC%97%B4%EA%B8%B0-%EC%82%AC%EC%9A%A9%EB%B2%95
          var w = window.open("", "_blank", "width=1000, height=800");

          var printOne = sTargetContent; // 프린트 될 섹션
          w.document.write('<html><head><title>Pay Slip</title><style>'+htmlTagCss+'</style>'+htmlTagScript+'</head><body >' + printOne + '</body></html>');
          w.document.close();
          //w.window.print();
        },

        onPressPaySummaryHTML: async function (oEvent) {
         
          // var fragmentId = this.getView().createId("fr1");
          // var tab = this.getView().byId("fr1", "idHTMLContent");

          if (!this.pSummaryHTMLDialog) {
            const oView = this.getView();

            
            this.pSummaryHTMLDialog = await Fragment.load({
              //id: oView.getId(), 
              id : "fr1",// 아이디 지정.
              name: "com.hmmausa.myhmma.mypay.zpaystate.view.fragment.PaySummaryHTMLDialog",
              controller: this
            });
            oView.addDependent(this.pSummaryHTMLDialog);
          }

          this.pSummaryHTMLDialog.open();

          let htmlTagCss = '<style>'+
            '.uoBGPrint { bgcolor : "#ECFCEB" }    '+
            '</style>';
         
          let htmlTag = 
          '<table width="100%" style="border:1px solid black; border-collapse:collapse">'+
            '<thead style="border:1px solid black;">'+
            '<tr>'+
            '   <td rowspan="3" style="border:1px solid black; text-align:center;" bgcolor="#ECFCEB" >Hyundai Motor <br>Manufacturing Alabam<br>700 Hyundai Boulevard<br>Montgomery, AL 36105<br></td>'+
            '   <td width="20%" style="border:1px solid black;" bgcolor="#F5F5F5">Check#</td>'+
            '   <td width="20%" style="border:1px solid black;" bgcolor="">001C</td>'+
            ' </tr>'+
            ' <tr>'+
            '   <td style="border:1px solid black;" bgcolor="#F5F5F5">Check Date</td>'+
            '   <td style="border:1px solid black;">11/27/2024</td>'+
            ' </tr>'+
            ' <tr >'+
            '   <td style="border:1px solid black;" bgcolor="#F5F5F5">Pay Period</td>'+
            '   <td style="border:1px solid black;">10/27/2024~11/27/2024</td>'+
            ' </tr>'+
            '</thead>'+
            '</table>';
            let htmlTagP = '<p>';

            let htmlTag2 = 
            '<table width="100%" style="border:1px solid black; border-collapse:collapse">'+
              '<thead style="border:1px solid black;">'+
              '<tr >'+
              '   <td width="40%" rowspan="3" style="border:1px solid black;" bgcolor="#E8F3F8" >Mr. Christoper Dean<br>James Dean <br>Prattville 36067</td>'+
              '   <td style="border:1px solid black;" class="uoBGPrint">Employee#</td>'+
              '   <td colspan="3"  style="border:1px solid black;"></td>'+
              ' </tr>'+
              ' <tr>'+
              '   <td width="15%" style="border:1px solid black;">FED</td>'+
              '   <td width="15%" style="border:1px solid black;">33</td>'+
              '   <td width="15%" style="border:1px solid black;">FED</td>'+
              '   <td width="15%" style="border:1px solid black;">33</td>'+
              ' </tr>'+
              ' <tr >'+
              '   <td style="border:1px solid black;">AL</td>'+
              '   <td style="border:1px solid black;">55</td>'+
              '   <td style="border:1px solid black;">FED</td>'+
              '   <td style="border:1px solid black;">33</td>'+
              ' </tr>'+
              '</thead>'+
              '</table>';

          //************ */ 4 ways to get controls inside a Fragment
          // https://community.sap.com/t5/technology-blogs-by-members/4-ways-to-get-controls-inside-a-fragment/ba-p/13468170
          sap.ui.getCore().byId("fr1--idHTMLContentTable").setContent('<div>'+htmlTag+htmlTagP+htmlTag2+'</div>')

        },

        onPressPaySummaryHTML111: async function (oEvent) {
         
          //let idHTMLContent = this.byId(sap.ui.core.Fragment.createId("fr1", "idHTMLContent"));// HTML Content
          //let idHTMLContent = sap.ui.core.Fragment.createId("fr1", "idHTMLContent");// HTML Content
          
          // Fragment에 Contens가 안바뀌네요.~~~??????????물어봐야됨. --> sap.ui.getCore().byId 활용함.
          var fragmentId = this.getView().createId("fr1");
          var tab = Fragment.byId(fragmentId, "idHTMLContent");
          tab.setContent('&lt;div class=&quot;content&quot;&gt;&lt;h4&gt;LoIpsum ...&lt;/a&gt;&lt;/div&gt;');

          if (!this.pSummaryHTMLDialog) {
            const oView = this.getView();

            
            this.pSummaryHTMLDialog = await Fragment.load({
              //id: oView.getId(),
              id : "fr1",
              name: "com.hmmausa.myhmma.mypay.zpaystate.view.fragment.PaySummaryHTMLDialog",
              controller: this,
            });
            oView.addDependent(this.pSummaryHTMLDialog);
          }

          this.pSummaryHTMLDialog.open();

        },


        onPrint: function(){
          // 프린트 이후 이벤트가 발생안됨.
          // var oTarget =  sap.ui.getCore().byId("fr1--idHTMLContentTable");

          //  var $domTarget = oTarget.$()[0],
          //       sTargetContent = $domTarget.innerHTML,
          //       sOriginalContent = document.body.innerHTML;
                
          //   document.body.innerHTML = sTargetContent;
          //   window.print();
          //   document.body.innerHTML = sOriginalContent;

          // 출처: https://fimtrus.tistory.com/entry/Web-windowprint-로-원하는-영역-인쇄하기 [Lv.Max 를 꿈꾸는 개발자 블로그:티스토리]
          // var popupWindow = window.open("", "_blank" );

          // popupWindow.document.write( "<head>"); //head 제대로 쓰니까..티스토리 에러가...
          // popupWindow.document.write( $('head').html() );
          // popupWindow.document.write( '</head>' ); 


          //  var oTarget =  sap.ui.getCore().byId("fr1--idHTMLContentTable");

          //  var $domTarget = oTarget.$()[0],
          //       sTargetContent = $domTarget.innerHTML,
          //       sOriginalContent = document.body.innerHTML;
                
          //   document.body.innerHTML = sTargetContent;
          // var $table = sTargetContent;

          //   popupWindow.document.write( '<body>' );
          //   popupWindow.document.write( '' );
          //   popupWindow.document.write( sTargetContent );
          //   popupWindow.document.write( '</body>' );
           
          //   popupWindow.print();

          // https://blog.naver.com/kwhong11/221693154726
           var oTarget =  sap.ui.getCore().byId("fr1--idHTMLContentTable");

           var $domTarget = oTarget.$()[0],
                sTargetContent = $domTarget.innerHTML,
                sOriginalContent = document.body.innerHTML;
                
           var w = window.open();
            var printOne = sTargetContent; // 프린트 될 섹션
            w.document.write('<html><head><style></style></head><body>' + printOne) + '</body></html>';
            w.document.close();
            w.window.print();
          
          // var oTarget =  sap.ui.getCore().byId("fr1--idHTMLContentTable");
          // var $domTarget = oTarget.$()[0],
          //       sTargetContent = $domTarget.innerHTML,
                


          // newWin= window.open();
          // newWin.document.open();
          // newWin.document.write(sTargetContent);
          // newWin.document.close();
          // setTimeout(function(){
          //   newWin.print();
          //   newWin.onfocus=function(){ newWin.close();}
          // },500);
         
        },

        onPdfPrintSAPUI5: async function(){
          const oOptions = {};
          const element1 = this.getView().byId("SAPUI5content").getDomRef();
          await html2pdf().set(oOptions).from(element1).save();
      },
        

        onPdfPrint: async function(){
            //this.getView().getModel("settings").setProperty("/visible", false);
        
            // const oOptions = {
            //     margin: [0.3,0,0.5,0],
            //     filename:     'testing-pdf-print-nathan.pdf',
            //     image:        { type: 'jpeg', quality: 0.98 },
            //     html2canvas:  { scale: 1 },
            //     jsPDF:        { unit: 'in', format: 'letter', orientation: 'l' },
            //     pagebreak: { avoid: 'tr' }
            // };
            
            const oOptions = {};

            // const oOptions = {
            //     margin: [0.3,0,0.5,0],
            //     filename:     'testing-pdf-print-nathan.pdf',
            //     image:        { type: 'jpeg', quality: 1.98 }
            // };
        
            //const element1 = this.getView().byId("SAPUI5contentB").getDomRef();
            const element1 = sap.ui.getCore().byId("fr1--idHTMLContentTable").getDomRef();
            
        
            await html2pdf().set(oOptions).from(element1).save();
        
            //this.getView().getModel("settings").setProperty("/visible", true);
        },


        /**
         * Summary 내역 팝업을-닫기 Button 이벤트핸들러
         *
        */
        onPressCloseDialog: function () {
          this.pSummaryDialog.close();
        },
        onPressHTMLCloseDialog: function () {
          this.pSummaryHTMLDialog.close();
        }
      });
    }
  );

  //   출처: https://mine-it-record.tistory.com/383 [나만의 기록들:티스토리]
  // if (window.matchMedia) {
  //   var mediaQueryList = window.matchMedia('print');
  //   mediaQueryList.addListener(function(mql) {
  //       if (mql.matches) {
  //            console.log('프린트 이전에 호출됩니다.');
  //       } else {
  //            console.log('프린트 이후에 호출됩니다.');
  //       }
  //   });
  // }
  