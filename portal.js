
jQuery(function () {

  // $(document).ready(function() {
  //   $('#previewBtn').click(function(){
  //     $(".gjs-pn-btn").eq(5).trigger("click")
  //     $('#header').hide() 

  //     $(document).on("click", ".gjs-off-prv, .fa, .fa-eye-slash", function() {
  //       $('#header').show(); 
  //     });
  //   });
  //   //priview btn
  //     $(".gjs-pn-btn").eq(5).css({   
  //     display:'none' 
  //     });
  //   })
     
    
  // --Popup close--
  //------close icon----------

  $("body").find(".gjs-pn-views-container1").hide();
  $("body")
    .find(".gjs-pn-views-container1")
    .prepend(
      "<div id='settingdSideContainer' class='sideSettingElement'></div>"
    );
  $("body")
    .find(".gjs-pn-views-container1 .gjs-clm-tags")
    .prepend("<div id='closebtn'></div>");
  $("body").find("#closebtn").addClass("closeSettingButton");

  $("body")
    .find("#closebtn")
    .prepend(
      '<div  class="overAllCloseConatiner"><div class="rotate-icon-container"><button onclick="blockPopupEvent()" onmouseenter="changeBgcolor(this)"onmouseleave="normalbgcolr(this)" class="close-btnn" id="closeb" ><svg xmlns="http://www.w3.org/2000/svg" id="icon" width="13" height="13" fill="#rrggbb" style="padding:3px " class="bi bi-x-lg rotate-icon" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" stroke="#64748b" stroke-width="1"/></svg></button></div></div> ');
  $("body").find("#closeiconId").addClass("glyphicon");

  // -----open Popup-------
  $("body")
    .find(".gjs-toolbar")
    .before('<div id="openbtn" onclick="showPopupEvent()"><div>');
  $("body").find("#gjs-tools").addClass("pointerEventNone");

  //---------hide Setting propertys--------------
  $("body").find(".gjs-sm-sector__typography").hide();
  $("body").find(".gjs-sm-sector__countdown").hide();
  $("body").find(".gjs-sm-sector__flex").hide();
  $("body").find(".gjs-sm-sector__dimension").hide();

  //-------add class placeholder--------
  $("#gjs-clm-new").attr(
    "placeholder",
    "Type Class Name And Press ENTER key");

  $("label.fa.fa-align-center.gjs-sm-icon.gjs-radio-item-label").addClass(
    "fa-xl"
  );
  $("label.fa.fa-align-left.gjs-sm-icon.gjs-radio-item-label").addClass(
    "fa-xl"
  );
  $("label.fa.fa-align-right.gjs-sm-icon.gjs-radio-item-label").addClass(
    "fa-xl"
  );
  $("label.fa.fa-align-justify.gjs-sm-icon.gjs-radio-item-label").addClass(
    "fa-xl"
  );
  $("label.fa.fa-times.gjs-sm-icon.gjs-radio-item-label").addClass("fa-xl");
  $("label.fa.fa-underline.gjs-sm-icon.gjs-radio-item-label").addClass(
    "fa-xl"
  );
  $("label.fa.fa-strikethrough.gjs-sm-icon.gjs-radio-item-label").addClass(
    "fa-xl"
  );
  $(".gjs-radio-items").eq(3).css("backgroundColor", "#642e95");
  $(".gjs-radio-items").eq(5).css("backgroundColor", "#642e95");
  $(".gjs-radio-items").eq(4).css("backgroundColor", "#642e95");
  $(".gjs-radio-items").eq(2).css("backgroundColor", "#642e95");
  $(document).ready(function () {
    $(".gjs-sm-property.gjs-sm-integer.gjs-sm-property__label-parent-flex")
      .eq(1)
      .css({
        marginLeft: "1px",
      });
  });
//   // $(document).ready(function() {
//   // $('#previewBtn').click(function() {
//   //   $(".gjs-pn-btn").eq(5).trigger("click")
//   //   $('#header').hide() 

//   // });

//   $(document).on("click", ".gjs-off-prv, .fa, .fa-eye-slash", function() {
//       $('#header').show();
//   });
//  //priview btn
//   $(".gjs-pn-btn").eq(5).css({   
//    display:'block' 
//   });
  
// })
 

  //change undo and redo.redo
  $(".gjs-pn-btn").eq(8).css({
    position: "absolute",
    right: "15px",
    bottom: "8vw",
  });
  $(".gjs-pn-btn").eq(9).css({
    position: "absolute",
    right: "15px",
    bottom: "5vw",
  });

  $(".gjs-pn-btn").eq(7).trigger("click");
  $("#ExportButtonId").hide();
  $(".gjs-mdl-btn-close").trigger("click");


  $(".gjs-pn-btn").eq(4).css({ display: "block" });

  $(document).ready(function () {
    $(".gjs-pn-btn")
      .eq(9)
      .click(function () {
        var currentPos = $(this).attr("data-tooltip-pos");
        var newPos = currentPos === "bottom" ? "left" : "bottom";
        $(this).attr("data-tooltip-pos", newPos);
      });
  });

  $(document).ready(function () {
    $(".gjs-pn-btn")
      .eq(8)
      .click(function () {
        var currentPos = $(this).attr("data-tooltip-pos");
        var newPos = currentPos === "bottom" ? "left" : "bottom";
        $(this).attr("data-tooltip-pos", newPos);
      });
  });

  $(".gjs-pn-btn").eq(9).attr("data-tooltip-pos", "left");
  $(".gjs-pn-btn").eq(8).attr("data-tooltip-pos", "left");

  //---------left side elements split into 2 page (basic and advance)--------------
  // let columnParrent = $("#selectcolumn").parent();
  // let columnGrandParent = columnParrent.parent();
  // columnGrandParent.addClass("selectcolumn");

  // $(document).ready(function () {
  //          $(document).on(
  //     "dragend",
  //     ".gjs-block.gjs-one-bg.gjs-four-color-h.selectcolumn.advanceElements",
  //     function (event) {
  //       alert(true);
  //       addColumn();
  //     }
  //   );
  // });

  let customCodeEle = $("#CustomCode").parent();
  let customCodeParent = $(customCodeEle).parent();

  $(customCodeParent).on("drag", function () {
    var customCodetextarea = document.querySelector("textarea");
    customCodetextarea.classList.add("hideImportTextArea");
  });

  $(".advanceList").each(function () {
    let parentDivAdvance = $(this).parent();
    let grandparentAdvance = parentDivAdvance.parent();
    grandparentAdvance.addClass("advanceElements");
  });

  $(".basicList").each(function () {
    let parentDivBasic = $(this).parent();
    let grandparentBasic = parentDivBasic.parent();
    grandparentBasic.addClass("bacicElaments");
  });

  var FirstElement = $(".gjs-block-category").eq(0);
  var secondElement = $(".gjs-block-category").eq(1);
  secondElement.show();
  var thirdElement = $(".gjs-block-category").eq(2);
  thirdElement.show();

  $("body")
    .find(".gjs-pn-views-container")
    .prepend(
      "<div style='background-color:white;'><div id='elementdSelectFealds' class='selectFelds'>" +
      "<div onclick='openBasicFelds(this)' onmouseenter='changecolortxt(this)' onmouseleave='normalcolrtxt(this)' class='BasicFeldClass' id='tap1'> Basic </div>" +
      "<div onclick='openAddvanceFelds(this)' onmouseenter='changecolortxt(this)' onmouseleave='normalcolrtxt(this)' class='BasicFeldClass' id='tap2'> advance </div>" +
      '<div id="underLineBacisandAddvance" class="underlineIndicator selectleft" style="left:0px; width:8.5vw;" ></div>' +
      "</div>"
    );

  let textOfSelectedTap = " Basic ";
  tap1.style.cursor = "default";
  tap1.style.color = "rgb(0 188 212)";
  window.openBasicFelds = function (x) {
    $("#underLineBacisandAddvance").removeClass("selectRight");
    FirstElement.show();
    secondElement.show();
    thirdElement.show();
    x.style.color = "rgb(0 188 212)";
    tap2.style.color = "rgb(71, 85, 105)";
    textOfSelectedTap = x.textContent;
    tap1.style.cursor = "default";
    tap2.style.cursor = "pointer";
    $(".gjs-block.gjs-one-bg.gjs-four-color-h.bacicElaments").show();
    $(".gjs-block.gjs-one-bg.gjs-four-color-h.advanceElements").hide();
  };

  $(".gjs-block.gjs-one-bg.gjs-four-color-h.advanceElements").hide();

  window.openAddvanceFelds = function (x) {
    // alert($('#column_Import_Form').length)
    $("#underLineBacisandAddvance").addClass("selectRight");
    secondElement.hide();
    thirdElement.hide();
    FirstElement.show();
    x.style.color = "rgb(0 188 212)";
    tap1.style.color = "rgb(71, 85, 105)";
    textOfSelectedTap = x.textContent;
    tap2.style.cursor = "default";
    tap1.style.cursor = "pointer";
    $(".gjs-block.gjs-one-bg.gjs-four-color-h.bacicElaments").hide();
    $(".gjs-block.gjs-one-bg.gjs-four-color-h.advanceElements").show();
  };

  window.changecolortxt = function (x) {
    if (textOfSelectedTap !== x.textContent) {
      x.style.color = "rgb(0 188 212)";
    }
  };
  window.normalcolrtxt = function (x) {
    if (textOfSelectedTap !== x.textContent) {
      x.style.color = "#475569";
    }
  };
  let saveInslectedClassId = $("#saveInslectedClass");
  saveInslectedClassId.addClass("classSaveBtn");

  //----------split into seven icons------------------

  $("body")
    .find("#settingdSideContainer")
    .append(
      "<div>" +
      '<button id="GeneralSettingId"  onclick ="openGeneralSetting(this)" onmouseenter="changeBgcolor(this)"  onmouseleave="normalbgcolr(this)" class="close-btnn  ">' +
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" style="padding:3px" class="bi bi-sliders" viewBox="0 0 16 16">' +
      '<path fill-rule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"/>' +
      "</svg>" +
      "</div>"
    );
  $("body").find("#GeneralSettingId").addClass("addclassForIcn");

  $("body")
    .find("#settingdSideContainer")
    .append(
      "<div>" +
      '<button id="SettingId1" onclick ="openGeneral(this)" onmouseenter="changeBgcolor(this)"onmouseleave="normalbgcolr(this)" class="close-btnn">' +
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" style="padding:3px" class="bi bi-code" viewBox="0 0 16 16">' +
      '<path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z"/>' +
      "</svg>"
    );

  $("body")
    .find("#settingdSideContainer")
    .append(
      "<div>" +
      '<button onmouseenter="changeBgcolor(this)"id="dimensionId2" onclick ="openDimension(this)"onmouseleave="normalbgcolr(this)" class="close-btnn">' +
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" style="padding:3px" class="bi bi-arrows-move"viewBox="0 0 16 16">' +
      '<path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10zM.146 8.354a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L1.707 7.5H5.5a.5.5 0 0 1 0 1H1.707l1.147 1.146a.5.5 0 0 1-.708.708l-2-2zM10 8a.5.5 0 0 1 .5-.5h3.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L14.293 8.5H10.5A.5.5 0 0 1 10 8z"/></svg>'
    );

  $("body")
    .find("#settingdSideContainer")
    .append(
      "<div>" +
      '<button onmouseenter="changeBgcolor(this)"id="decorationsId3" onclick ="openDecorations(this)"onmouseleave="normalbgcolr(this)" class="close-btnn">' +
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  style="padding:3px" class="bi bi-images" viewBox="0 0 16 16">' +
      '<path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>' +
      '<path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z"/></svg>'
    );

  $("body")
    .find("#settingdSideContainer")
    .append(
      "<div>" +
      '<button onmouseenter="changeBgcolor(this)" id="typographyId4" onclick ="opentypography(this)"onmouseleave="normalbgcolr(this)" class="close-btnn">' +
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" style="padding:3px"  viewBox="0 0 16 16">' +
      '<path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/></svg>'
    );

  $("body")
    .find("#settingdSideContainer")
    .append(
      "<div>" +
      '<button onmouseenter="changeBgcolor(this)"id="countdownId5" onclick ="openCountdown(this)"onmouseleave="normalbgcolr(this)" class="close-btnn">' +
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" style="padding:3px" class="bi bi-alarm" viewBox="0 0 16 16">' +
      '<path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"/>' +
      '<path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"/></svg> '
    );

  $("body")
    .find("#settingdSideContainer")
    .append(
      "<div>" +
      '<button onmouseenter="changeBgcolor(this)"id="flexId6" onclick ="openFlex(this)"onmouseleave="normalbgcolr(this)" class="close-btnn">' +
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" style="padding:3px" class="bi bi-shuffle" viewBox="0 0 16 16">' +
      '<path fill-rule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z"/>' +
      '<path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z"/></svg>'
    );
}); //--------------------- jq




function merge() {
  const htmlFileInput = document.getElementById('htmlFileInput');
  const cssFileInput = document.getElementById('cssFileInput');

  console.log('upload files html',htmlFileInput.value,'cssFileInput',cssFileInput.value)
  const htmlFiles = htmlFileInput.files;
  const cssFiles = cssFileInput.files;

  console.log('htmlFiles.length:', htmlFiles.length);
  console.log('cssFiles.length:', cssFiles.length);

  // if (htmlFiles.length === 0 || cssFiles.length === 0) {
  //   alert('Please select both HTML and CSS files.');
  //   return;
  // }
      const cssFileReader = new FileReader();
      cssFileReader.onload = function (event) {
          const cssContent = event.target.result;
          const mergedContent = htmlContent.replace('</head>', `<style>${cssContent}</style></head>`);
          const codeMirrorEditor = CodeMirror(function merge() {
          const htmlFileInput = document.getElementById('htmlFileInput');
          const cssFileInput = document.getElementById('cssFileInput');

          const htmlFiles = htmlFileInput.files;
          const cssFiles = cssFileInput.files;

          if (htmlFiles.length === 0 || cssFiles.length==0 ) {
            alert('Please select HTML and css files.');
            return;
          }

          const htmlFileReader = new FileReader();
          htmlFileReader.onload = function (event) {
              const htmlContent = event.target.result;
              if (cssFiles.length !== 0 )  { 
              const cssFileReader = new FileReader();
              cssFileReader.onload = function (event) {
                  const cssContent = event.target.result;
                  
                  const mergedContent = htmlContent.replace('</head>', `<style>${cssContent}</style></head>`);
                  const codeMirrorInstance = document.querySelector('.CodeMirror').CodeMirror;
                  const mergedCode = mergedContent
                  codeMirrorInstance.setValue(mergedCode);
                  const mergedBlob = new Blob([mergedContent], { type: 'text/html' });            
              };

        cssFileReader.readAsText(cssFiles[0]);
      }else{
        const mergedCode = mergedContent
                  codeMirrorInstance.setValue(mergedCode);
                  const mergedBlob = new Blob([mergedContent], { type: 'text/html' }); 
      }}
    htmlFileReader.readAsText(htmlFiles[0]);
  }
  , {
      mode: 'htmlmixed',
      lineNumbers: true,
    });
      codeMirrorEditor.setValue(mergedContent);
      const mergedBlob = new Blob([mergedContent], { type: 'text/html' })
    };
      cssFileReader.readAsText(cssFiles[0]);
  };

 




$(document).ready(function () {
  $("body").find(".gjs-pn-views-container1").hide();
  let first = true;
  if (first) {
    $(".gjs-mdl-btn-close").text("");
    $("body")
      .find(".gjs-mdl-btn-close")
      .append(
        '<div style="width: 30px;"  class="overAllCloseConatiner"><div class="rotate-icon-container"><button  onmouseenter="changeBgcolor(this)"onmouseleave="normalbgcolr(this)" styie=" opacity:1 !important;" class="close-btnnn"><svg xmlns="http://www.w3.org/2000/svg" id="icon1" width="13" height="13" fill="#rrggbb" style="padding:3px" class="bi bi-x-lg rotate-icon" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" stroke="#64748b" stroke-width="1"/></svg></button></div></div>'
      );
    first = false;
  }
  $(document).ready(function () {
    const getStartedBtn = $('.getStartedBtn');
    const targetElement = $('.scroll-target');

    getStartedBtn.on('click', function () {
      $('html, body').animate({
        scrollTop: targetElement.offset().top
      }, 1000); 
    });
    
  });


  $(".gjs-pn-btn")
    .eq(7)
    .click(function () {
      $("textarea").each(function () {
        $(this).addClass("hideTextArea");
      });
    });
  $(".gjs-toolbar-item .gjs-toolbar-item__custom-code").click(function () {
    
    var textarea1 = document.querySelector("textarea");
    textarea1.classList.add("hideImportTextArea");
  });
  $(".gjs-pn-btn").eq(10).trigger("click");
  $(".gjs-pn-btn")
    .eq(10)
    .click(function () {
      var textarea = document.querySelector("textarea");
      // textarea.classList.add("hideImportTextArea");

      $("body")
        .find("#closebtn")
        .prepend('<h1 class="portalSettingH1Ele">portal settings</h1>');

      // file upload html / css
      const uploadedHtmlFiles = [];
      const uploadedCssFiles = [];

      const htmlFileInput = document.getElementById("htmlFileInput");
      const cssFileInput = document.getElementById("cssFileInput");

      htmlFileInput.addEventListener("change", function () {
        handleFileUpload(
          htmlFileInput,
          uploadedHtmlFiles,
          "htmlMessage",
          "htmlFileList"
        );
      });

      cssFileInput.addEventListener("change", function () {
        handleFileUpload(
          cssFileInput,
          uploadedCssFiles,
          "cssMessage",
          "cssFileList"
        );
      });

      function handleFileUpload(
        fileInput,
        uploadedFiles,
        messageDivId,
        fileListDivId
      ) {
        const messageDiv = document.getElementById(messageDivId);
        const fileListDiv = document.getElementById(fileListDivId);

        if (fileInput.files.length > 0) {
          const files = fileInput.files;

          for (let fileIndex = 0; fileIndex < files.length; fileIndex++) {
            const file = files[fileIndex];
            const extension = file.name.split(".").pop().toLowerCase();

            if (extension === "html" || extension === "css") {
              uploadedFiles.push(file);
            }
          }

          messageDiv.innerHTML = "Files uploaded successfully!";

          updateFileList(fileListDiv, fileListDivId);
        } else {
          messageDiv.innerHTML = "No files selected.";
        }
      }

      function removeFile(index, fileListDivId) {
        const fileListDiv = document.getElementById(fileListDivId);
        if (fileListDivId === "htmlFileList") {
          uploadedHtmlFiles.splice(index, 1);
        } else if (fileListDivId === "cssFileList") {
          uploadedCssFiles.splice(index, 1);
        }

        updateFileList(fileListDiv, fileListDivId);
      }

      function updateFileList(fileListDiv, fileListDivId) {
        fileListDiv.innerHTML = "<strong>Uploaded Files:</strong><ul>";

        const uploadedFiles =
          fileListDivId === "htmlFileList"
            ? uploadedHtmlFiles
            : uploadedCssFiles;

        for (
          let uploadedIndex = 0;
          uploadedIndex < uploadedFiles.length;
          uploadedIndex++
        ) {
          fileListDiv.innerHTML += `<li >${uploadedFiles[uploadedIndex].name}
                </li>`;
              //list clr btn  
                //<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" id="btnnn">
                    //<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                // </svg>
        }

        fileListDiv.innerHTML += "</ul>";

        const buttons = fileListDiv.querySelectorAll("svg.bi-x");
        buttons.forEach((button, index) => {
          button.addEventListener("click", () => {
            removeFile(index, fileListDivId);
          });
        });
      }
    });
    $('.rotate-icon-container').trigger("click")
});



document.addEventListener("DOMContentLoaded", function () {
  const htmlFileInput = document.getElementById("htmlFileInput");
  const cssFileInput = document.getElementById("cssFileInput");
  const htmlMessage = document.getElementById("htmlMessage");
  const cssMessage = document.getElementById("cssMessage");

  htmlFileInput.addEventListener("change", handleHtmlFileUpload);
  cssFileInput.addEventListener("change", handleCssFileUpload);
});

let htmlContent = "";
let cssContent = "";

function handleHtmlFileUpload(event) {
  const htmlFileList = event.target.files;
  if (htmlFileList.length === 0) {
    return;
  }
  const htmlFile = htmlFileList[0];
  const reader = new FileReader();
  reader.onload = function (event) {
    htmlContent = event.target.result;
    document.getElementById(
      "htmlFileList"
    ).innerHTML = `<li>${htmlFile.name}</li>`;
    document.getElementById("htmlMessage").textContent =
      "HTML file uploaded successfully.";
  };
  reader.readAsText(htmlFile);
}

// Function to handle CSS file upload.
function handleCssFileUpload(event) {
  const cssFileList = event.target.files;
  if (cssFileList.length === 0) {
    return;
  }
  const cssFile = cssFileList[0];
  const reader = new FileReader();
  reader.onload = function (event) {
    cssContent = event.target.result;
    document.getElementById(
      "cssFileList"
    ).innerHTML = `<li>${cssFile.name}</li>`;
    document.getElementById("cssMessage").textContent =
      "CSS file uploaded successfully.";
  };
  reader.readAsText(cssFile);
}


function mergeAndDownload() {

  const mergedContent = `${htmlContent}<style>${cssContent}</style>`;

  const blob = new Blob([mergedContent], { type: "text/html" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "merged_file.html";
  link.click();
}

function openGeneralSetting(a) {
  $("#GeneralSettingId").addClass("closeIConOnclickColor");
  $("#SettingId1").removeClass("closeIConOnclickColor");
  $("#dimensionId2").removeClass("closeIConOnclickColor");
  $("body").find("#GeneralSettingId").addClass("addclassForIcn");
  $("body").find("#SettingId1").removeClass("addclassForIcn");
  $("body").find("#dimensionId2").removeClass("addclassForIcn");
  $("body").find(".gjs-sm-sector__dimension").hide();
  $("body").find(".gjs-sm-sector__general").hide();
  $("body").find("#settingDisplyId").show();
  $("body").find(".gjs-sm-sector__typography").hide();
  $("body").find(".gjs-sm-sector__decorations").hide();
  $("body").find(".gjs-sm-sector__countdown").hide();
  $("body").find(".gjs-sm-sector__flex").hide();
  $("#decorationsId3").removeClass("closeIConOnclickColor");
  $("body").find("#decorationsId3").removeClass("addclassForIcn");
  $("#typographyId4").removeClass("closeIConOnclickColor");
  $("body").find("#typographyId4").removeClass("addclassForIcn");
  $("#countdownId5").removeClass("closeIConOnclickColor");
  $("body").find("#countdownId5").removeClass("addclassForIcn");
  $("#flexId6").removeClass("closeIConOnclickColor");
  $("body").find("#flexId6").removeClass("addclassForIcn");
}
let generalFirst = true;
function openGeneral() {
  $("#GeneralSettingId").removeClass("closeIConOnclickColor");
  $("#dimensionId2").removeClass("closeIConOnclickColor");
  $("#SettingId1").addClass("closeIConOnclickColor");
  $("body").find("#GeneralSettingId").removeClass("addclassForIcn");
  $("body").find("#SettingId1").addClass("addclassForIcn");
  $("body").find("#dimensionId2").removeClass("addclassForIcn");
  $("body").find(".gjs-sm-sector__typography").hide();
  $("body").find(".gjs-sm-sector__decorations").hide();
  $("body").find(".gjs-sm-sector__dimension").hide();
  $("body").find(".gjs-sm-sector__general").show();
  $("body").find("#settingDisplyId").hide();
  $("body").find(".gjs-sm-sector__countdown").hide();
  $("body").find(".gjs-sm-sector__flex").hide();
  $("#decorationsId3").removeClass("closeIConOnclickColor");
  $("body").find("#decorationsId3").removeClass("addclassForIcn");
  $("#typographyId4").removeClass("closeIConOnclickColor");
  $("body").find("#typographyId4").removeClass("addclassForIcn");
  $("#countdownId5").removeClass("closeIConOnclickColor");
  $("body").find("#countdownId5").removeClass("addclassForIcn");
  $("#flexId6").removeClass("closeIConOnclickColor");
  $("body").find("#flexId6").removeClass("addclassForIcn");
  if (generalFirst) {
    $(".gjs-sm-sector-title").eq(0).trigger("click");
    generalFirst = false;
  }
}

function openDimension() {
  $("#GeneralSettingId").removeClass("closeIConOnclickColor");
  $("#SettingId1").removeClass("closeIConOnclickColor");
  $("#dimensionId2").addClass("closeIConOnclickColor");
  $("body").find("#GeneralSettingId").removeClass("addclassForIcn");
  $("body").find("#SettingId1").removeClass("addclassForIcn");
  $("body").find("#dimensionId2").addClass("addclassForIcn");
  $("body").find(".gjs-sm-sector__countdown").hide();
  $("body").find(".gjs-sm-sector__flex").hide();
  $("body").find(".gjs-sm-sector__dimension").show();
  $("body").find(".gjs-sm-sector__general").hide();
  $("body").find("#settingDisplyId").hide();
  $("body").find(".gjs-sm-sector__typography").hide();
  $("body").find(".gjs-sm-sector__decorations").hide();
  $("#decorationsId3").removeClass("closeIConOnclickColor");
  $("body").find("#decorationsId3").removeClass("addclassForIcn");
  $("#typographyId4").removeClass("closeIConOnclickColor");
  $("body").find("#typographyId4").removeClass("addclassForIcn");
  $("#countdownId5").removeClass("closeIConOnclickColor");
  $("body").find("#countdownId5").removeClass("addclassForIcn");
  $("#flexId6").removeClass("closeIConOnclickColor");
  $("body").find("#flexId6").removeClass("addclassForIcn");
}

function openDecorations() {
  $("body").find(".gjs-sm-sector__countdown").hide();
  $("body").find(".gjs-sm-sector__flex").hide();
  $("body").find(".gjs-sm-sector__dimension").hide();
  $("body").find(".gjs-sm-sector__general").hide();
  $("body").find("#settingDisplyId").hide();
  $("body").find(".gjs-sm-sector__typography").hide();
  $("body").find(".gjs-sm-sector__decorations").show();
  $("#GeneralSettingId").removeClass("closeIConOnclickColor");
  $("#SettingId1").removeClass("closeIConOnclickColor");
  $("#dimensionId2").removeClass("closeIConOnclickColor");
  $("#decorationsId3").addClass("closeIConOnclickColor");
  $("body").find("#GeneralSettingId").removeClass("addclassForIcn");
  $("body").find("#SettingId1").removeClass("addclassForIcn");
  $("body").find("#dimensionId2").removeClass("addclassForIcn");
  $("body").find("#decorationsId3").addClass("addclassForIcn");
  $("#typographyId4").removeClass("closeIConOnclickColor");
  $("body").find("#typographyId4").removeClass("addclassForIcn");
  $("#countdownId5").removeClass("closeIConOnclickColor");
  $("body").find("#countdownId5").removeClass("addclassForIcn");
  $("#flexId6").removeClass("closeIConOnclickColor");
  $("body").find("#flexId6").removeClass("addclassForIcn");
}

function opentypography() {
  $("body").find(".gjs-sm-sector__countdown").hide();
  $("body").find(".gjs-sm-sector__flex").hide();
  $("body").find(".gjs-sm-sector__dimension").hide();
  $("body").find(".gjs-sm-sector__general").hide();
  $("body").find("#settingDisplyId").hide();
  $("body").find(".gjs-sm-sector__typography").show();
  $("body").find(".gjs-sm-sector__decorations").hide();
  $("#GeneralSettingId").removeClass("closeIConOnclickColor");
  $("#SettingId1").removeClass("closeIConOnclickColor");
  $("#dimensionId2").removeClass("closeIConOnclickColor");
  $("#decorationsId3").removeClass("closeIConOnclickColor");
  $("#typographyId4").addClass("closeIConOnclickColor");
  $("body").find("#GeneralSettingId").removeClass("addclassForIcn");
  $("body").find("#SettingId1").removeClass("addclassForIcn");
  $("body").find("#dimensionId2").removeClass("addclassForIcn");
  $("body").find("#decorationsId3").removeClass("addclassForIcn");
  $("body").find("#typographyId4").addClass("addclassForIcn");
  $("#countdownId5").removeClass("closeIConOnclickColor");
  $("body").find("#countdownId5").removeClass("addclassForIcn");
  $("#flexId6").removeClass("closeIConOnclickColor");
  $("body").find("#flexId6").removeClass("addclassForIcn");
}

function openCountdown() {
  $("body").find(".gjs-sm-sector__countdown").show();
  $("body").find(".gjs-sm-sector__flex").hide();
  $("body").find(".gjs-sm-sector__dimension").hide();
  $("body").find(".gjs-sm-sector__general").hide();
  $("body").find("#settingDisplyId").hide();
  $("body").find(".gjs-sm-sector__typography").hide();
  $("body").find(".gjs-sm-sector__decorations").hide();
  $("#GeneralSettingId").removeClass("closeIConOnclickColor");
  $("#SettingId1").removeClass("closeIConOnclickColor");
  $("#dimensionId2").removeClass("closeIConOnclickColor");
  $("#decorationsId3").removeClass("closeIConOnclickColor");
  $("#typographyId4").removeClass("closeIConOnclickColor");
  $("#countdownId5").addClass("closeIConOnclickColor");
  $("body").find("#GeneralSettingId").removeClass("addclassForIcn");
  $("body").find("#SettingId1").removeClass("addclassForIcn");
  $("body").find("#dimensionId2").removeClass("addclassForIcn");
  $("body").find("#decorationsId3").removeClass("addclassForIcn");
  $("body").find("#typographyId4").removeClass("addclassForIcn");
  $("body").find("#countdownId5").addClass("addclassForIcn");
  $("#flexId6").removeClass("closeIConOnclickColor");
  $("body").find("#flexId6").removeClass("addclassForIcn");
}

function openFlex() {
  $("body").find(".gjs-sm-sector__countdown").hide();
  $("body").find(".gjs-sm-sector__flex").show();
  $("body").find(".gjs-sm-sector__dimension").hide();
  $("body").find(".gjs-sm-sector__general").hide();
  $("body").find("#settingDisplyId").hide();
  $("body").find(".gjs-sm-sector__typography").hide();
  $("body").find(".gjs-sm-sector__decorations").hide();
  $("#GeneralSettingId").removeClass("closeIConOnclickColor");
  $("#SettingId1").removeClass("closeIConOnclickColor");
  $("#dimensionId2").removeClass("closeIConOnclickColor");
  $("#decorationsId3").removeClass("closeIConOnclickColor");
  $("#typographyId4").removeClass("closeIConOnclickColor");
  $("#countdownId5").removeClass("closeIConOnclickColor");
  $("#flexId6").addClass("closeIConOnclickColor");
  $("body").find("#GeneralSettingId").removeClass("addclassForIcn");
  $("body").find("#SettingId1").removeClass("addclassForIcn");
  $("body").find("#dimensionId2").removeClass("addclassForIcn");
  $("body").find("#decorationsId3").removeClass("addclassForIcn");
  $("body").find("#typographyId4").removeClass("addclassForIcn");
  $("body").find("#countdownId5").removeClass("addclassForIcn");
  $("body").find("#flexId6").addClass("addclassForIcn");
}

//colose popup event
$(function () {
  $(document).on("mousedown", function (event) {
    let container = $(".gjs-pn-views-container1");
    let spButtonContainer = $(".sp-container");
    let uploadImgContainer = $(".gjs-mdl-dialog");
    if (
      !container.is(event.target) &&
      container.has(event.target).length === 0 &&
      !spButtonContainer.is(event.target) &&
      spButtonContainer.has(event.target).length === 0 &&
      !uploadImgContainer.is(event.target) &&
      uploadImgContainer.has(event.target).length === 0
    ) {
      container.hide();
    }
  });
});


function closePopup() {
  const popupClose = document.querySelector(
    ".gjs-pn-panel.gjs-pn-views-container1.gjs-one-bg.gjs-two-color"
  );
  popupClose.classList.add("Popupclosed");
}

function changeBgcolor(y) {
  y.style.backgroundColor = "#e2e8f0";
}
function normalbgcolr(y) {
  y.style.backgroundColor = "transparent";
}
function blockPopupEvent() {
  $("body").find(".gjs-pn-views-container1").hide();
  closePopup();
}

let first = true;
let firstFormcall = true
$(document).ready(function() {
  // Use jQuery to find iframe elements with the specified class within the body content
  // const elementsWithClass = $('body iframe.gjs-frame');

  // // Get the length of elements with the specified class
  // const lengthOfElements = elementsWithClass.length;

  // // Show the length in an alert
  // alert(lengthOfElements);
});


function showPopupEvent() {
  let selected = $('.gjs-clm-sel-cmp').text()
  // alert($('.gjs-clm-sel-cmp').text())
  const elementsWithClass1 = $("body").find(".gjs-clm-sel-id");
  let elementText1 = elementsWithClass1.text();
          //  let textWithoutPrefix1 = elementText1.replace('ID: ', '');
  
  if (selected === 'Body' || selected === 'Iframe' || elementText1.startsWith('ID: import_form')|| elementText1.startsWith('#import_form')) {
    $("#gjs-clm-up").addClass("hide-important");
    $('#gjs-clm-tags-field').addClass("hide-important");
    $('.gjs-clm-sels-info').addClass("hide-important");
    $("#settingdSideContainer").addClass("hide-important");
    $(".gjs-trt-trait__wrp.gjs-trt-trait__wrp-id").addClass("hide-important");
    $(".gjs-sm-sectors.gjs-one-bg.gjs-two-color").addClass("settingModifications");
    $(".gjs-pn-views-container1").css("min-width","26vw");
    $("#closebtn").addClass("no-border-bottom");
    
  }
  else {
    $("#gjs-clm-up").removeClass("hide-important");
    $('#gjs-clm-tags-field').removeClass("hide-important");
    $('.gjs-clm-sels-info').removeClass("hide-important");
    $("#settingdSideContainer").removeClass("hide-important");
     $(".gjs-trt-trait__wrp.gjs-trt-trait__wrp-id").removeClass("hide-important");
    $(".gjs-sm-sectors.gjs-one-bg.gjs-two-color").removeClass("settingModifications");
    $(".gjs-pn-views-container1").css("min-width","50vw");
    $("#closebtn").removeClass("no-border-bottom");

  }



  $(".custom-button").addClass("custume-Btn");
  changeText();
  function triggerButtonClick() {
    $(".gjs-pn-btn").eq(14).trigger("click"); 
  }
  triggerButtonClick();

  if (first) {
    $(".gjs-sm-sector-title").trigger("click");


    $("body").find("#settingDisplyId").append('<div id="SelectForm"  style="margin-top: 24px;">'+
    '<div >'+
    '<span style="display: flex;flex-direction: row;color: #64748b;font-weight: bold !important;font-size: 0.75rem;padding-bottom: 5px;"> Select Form'+
    '</span>'+
    '<div class="gjs-sm-clear" style="display: none" data-clear-style=""><svg viewBox="0 0 24 24"><path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path></svg></div>'+
    '</div>'+
    '<div class="gjs-fields" data-sm-fields="">'+
    '<div class="gjs-field gjs-select">'+
    '  <span id="gjs-sm-input-holder"><select><option value="none">none</option></select></span>'+
      '<div class="gjs-sel-arrow">'+
        '<div class="gjs-d-s-arrow"></div>'+
      '</div>'+
    '</div>'+
    '</div>'+
    '</div> <div id="elementToShowId" class="gjs-trt-trait gjs-trt-trait--text">'+
    '<div class="gjs-label-wrp" data-label=""><div class="gjs-label" title="Id">Enter Id To Hide</div></div>'+
    '<div class="gjs-field-wrp gjs-field-wrp--text" data-input="">'+
      '<div class="gjs-field gjs-field-text" data-input=""><input id="elementToHideInput" type="text" placeholder="eg. Text here and press Enter"></div>    </div>  </div>'+
      '<div id="elementToHideId" class="gjs-trt-trait gjs-trt-trait--text">'+
    '<div class="gjs-label-wrp" data-label=""><div class="gjs-label" title="Id">Enter Id To Show</div></div>'+
    '<div class="gjs-field-wrp gjs-field-wrp--text" data-input="">'+
      '<div class="gjs-field gjs-field-text" data-input=""><input id="elementToShowInput" type="text" placeholder="eg. Text here and press Enter"></div>    </div>  </div>'+
      
      
      '<div id="selectPanels"  class="gjs-trt-trait__wrp gjs-trt-trait__wrp-type"><div class="gjs-trt-trait gjs-trt-trait--select">'+
      '<div class="gjs-label-wrp" data-label=""><div class="gjs-label" title="Type">Select Panel To Hide</div></div>'+
      '<div class="gjs-field-wrp gjs-field-wrp--select" data-input="">'+
       ' <div class="gjs-field gjs-field-select">'+
      '<div data-input=""><select id="selectPanel"></select></div>'+
      '<div class="gjs-sel-arrow">'+
      '  <div class="gjs-d-s-arrow"></div>'+
      '</div>'+
    '</div>'+
     ' </div>'+
    '</div></div>'+
    '<div id="secondaryPanalName" class="gjs-trt-trait__wrp gjs-trt-trait__wrp-id"><div class="gjs-trt-trait gjs-trt-trait--text">'+
      '<div class="gjs-label-wrp" data-label=""><div class="gjs-label" title="Id">Secondary Panal Name:</div></div>'+
      '<div class="gjs-field-wrp gjs-field-wrp--text" data-input="">'+
        '<div class="gjs-field gjs-field-text" data-input=""><input id="secondaryPanalNameInputEl" type="text" placeholder="eg. Text here"></div>'+
      '</div>'+
    '</div></div>');
    
  
    first = false;
  }


 
//Secondary_Panel name atribute set

if (elementText1.startsWith('ID: Secondary_Panel') || elementText1.startsWith('#Secondary_Panel') ) {
  $('#secondaryPanalName').css({ 'display': 'block' });
 
 addAttributeOnSecondaryPanel(elementText1)
 
} else {
  $('#secondaryPanalName').css({ 'display': 'none' });
}


// add hideElement attribue on button`````````````````````


if (selected === 'Button') {
 addAttributeOnButton(elementText1);
// get inside present the hide and show input element


} else {
  $('#elementToHideId').css({ 'display': 'none' });
  $('#elementToShowId').css({ 'display': 'none' });
  $("#selectPanels").css({ 'display': 'none' });
}




  $("#typographyId4").length;
  $("body").find(".gjs-pn-views-container1").show();

  const targetElement = document.querySelector(".gjs-clm-tags");
  if (targetElement) {
    const parentElement = targetElement.parentElement;
    if (parentElement) {
      const grandparentElement = parentElement.parentElement;
      grandparentElement.style.borderRight =
        "solid 0.5px rgb(100 116 139 / 15%)";
      grandparentElement.style.height = "fit-content";
    }
  }

  $("body").find(".gjs-pn-views-container1").show();
  $("body").find(".gjs-sm-sectors").prepend($("#settingDisplyId"));
  
  function triggerButtonClick1() {

    let firstChange = true

    const iframeElement = $('body iframe.gjs-frame');

    if (iframeElement.length > 0) {

      const iframeContent = iframeElement[0].contentDocument;
      if (iframeContent) {

        const elementsWithClass = $("body").find(".gjs-clm-sel-id");

        if (elementsWithClass.length > 0) {
          let elementText = elementsWithClass.text();

          let textWithoutPrefix = elementText.replace('ID: ', '');

          const idToSearch = textWithoutPrefix;

          const elementsWithId = $(iframeContent).find('#' + idToSearch);

          const lengthOfElements = elementsWithId.length;
    
          if (lengthOfElements > 0) {
            
            const firstElementWithId = elementsWithId[0];
            const parentOfFirstElementWithId = $(firstElementWithId).parent();

    
            
            getImportForm(elementsWithId, elementText);
    
            const formSelectElement1 = document.getElementById('gjs-sm-input-holder').querySelector('select');
    


                //  const targetiframel = $(parentOfFirstElementWithId).find('iframe'); 

                formSelectElement1.addEventListener('change', function () {
                  // alert($(iframel).length);
                  $(".gjs-pn-btn").eq(10).trigger("click");
                  $(".gjs-mdl-btn-close").trigger("click");
                  let formId = formSelectElement1.value;
                  if (firstChange=== true){
                  loadIframe(formId, idToSearch,firstElementWithId); 
                  firstChange = false;
                }
                });

                 function loadIframe(formId, idToSearch) {
                                                  
                    const codeMirrorInstances = document.querySelector('.CodeMirror').CodeMirror;

                    let codeMirrorContent = codeMirrorInstances.getValue();

                
                    // console.log('codeMirrorContent',codeMirrorContent)

                    // alert(idToSearch)
                let parser = new DOMParser();
                let doc = parser.parseFromString(codeMirrorContent, 'text/html');
                // console.log('before modify src',doc)

                  // alert($((doc).find("#idToSearch")).length)
                
                let elementWithIframeId = $(doc).find("#" + idToSearch);
                
                

                if (elementWithIframeId) {
                  // importFormOnSelsetedEl(elementWithIframeId,formId,doc);
                  let parentElements = $(elementWithIframeId).parent();
                
                  console.log(parentElements);
                
                  parentElements.empty();
                
                  var newIframe = document.createElement('iframe');

                  newIframe.src = location.origin+'/app/form/' + formId;

                  $(newIframe).css("height","50vh");

                  $(newIframe).css("width","100vw");

                
                  parentElements.append(newIframe); 
                
                
                  
                  let modifiedContent = new XMLSerializer().serializeToString(doc);
                  
                  
                  codeMirrorInstances.setValue(modifiedContent);

                  
                  console.log(modifiedContent);

                  
                  const importButton = $(".gjs-btn-prim.gjs-btn-import");

                 
                  importButton.trigger("click");
                  $('#closeb').trigger("click");
                } else {
                  console.error('Element with Iframe ID not found.');
                }

 
    
          }
        } 
          
        }
      }
    }

   
    $("#GeneralSettingId").trigger("click");
    if ($("body").find(".gjs-clm-sel-cmp").text() === "Body") {
      $("#decorationsId3").trigger("click");
      $('#gjs-sm-add').trigger("click");
      $(".close-btnn").css("opacity", "0.2");
      $("#decorationsId3").css("opacity", "1");
      $("#closeb").css("opacity", "1");

      function openDecorationss() {
        $(".gjs-sm-label-wrp").trigger("click");
      }
      openDecorationss()
      
        $("#settingdSideContainer").css({ "pointer-events": "none" })
      ($("body").find(".gjs-sm-sector__general").hide());
      $("body").find(".gjs-sm-sector__Setting").hide();
    }
    
//     else if ($("body").find(".gjs-clm-sel-cmp").text() === "Iframe"){
//       $(".close-btnn").css("opacity", "0.2");
//       $("#GeneralSettingId").css("opacity", "1");
//       $("#closeb").css("opacity", "1");
//       $("body").find(".gjs-sm-sector__Setting").show();
//       $("#GeneralSettingId").trigger('click');
//       $("#settingdSideContainer").css({ "pointer-events": "none" })
//       // $(".gjs-clm-tags.gjs-one-bg.gjs-two-color").hide()
// // gjs-clm-tags-field
// // .gjs-clm-sels-info
//       $("#gjs-clm-up").hide();
//       $(" #gjs-clm-tags-field ").hide()
//       $(".gjs-clm-sels-info").hide();
//     }
    
    else {
      $(".close-btnn").css("opacity", "1");
      $("#settingdSideContainer").css({ "pointer-events": "all" });
    }
  }
  triggerButtonClick1();
  $("body").find(".gjs-sm-sector__typography").hide();
  $("body").find(".gjs-sm-sector__countdown").hide();
  $("body").find(".gjs-sm-sector__flex").hide();
  $("body").find(".gjs-sm-sector__dimension").hide();

  
  

  elementText1=null;



}

function changeBgcolor1(a) {
  a.style.backgroundColor = "#f1f5f9";
}

function normalbgcolr1(a) {
  a.style.backgroundColor = "transparent";
}

function changeText() {
  var elements = document.querySelectorAll(".gjs-clm-sel-id");
  elements.forEach(function (element) {
    var text = element.textContent;
    text = text.replace("#", "ID: ");
    element.textContent = text;
  });
}

// document.addEventListener("DOMContentLoaded", function() {
//   const currentDate = new Date();

// const year = currentDate.getFullYear();
// const month = String(currentDate.getMonth() + 1).padStart(2, '0');
// const day = String(currentDate.getDate()).padStart(2, '0');
// const hours = String((currentDate.getHours() % 12) || 12).padStart(2, '0'); // Ensure hours are in the 1-12 range
// const minutes = String(currentDate.getMinutes()).padStart(2, '0');
// const ampm = currentDate.getHours() >= 12 ? 'PM' : 'AM';

// const formattedDate = `portal - ${year}-${month}-${day} ${hours}:${minutes} ${ampm}`;
// // let titleContent = document.getElementById("title_content");
// // titleContent.textContent = formattedDate;
// $("#title_content").text(formattedDate);
// });











//$(".gjs-pn-btn").eq(7).hide();

$(".gjs-pn-btn").eq(7).click(function(){
$('#ExportButtonId').hide();
  });
  let firstcall = true;
$('#saveBtn').click(function(){

if (firstcall){
  // alert(1)
  $(".gjs-pn-btn").eq(7).trigger("click");
  $('#ExportButtonId').trigger('click');
  $(".rotate-icon-container").trigger('click');
  firstcall = false;
}
else{
  $('#ExportButtonId').trigger('click');
}
})












// add attribute on button for hide and show

function addAttributeOnButton(elementText1){
  

  $('#elementToHideId').css({ 'display': 'block' });
    
  $('#elementToShowId').css({ 'display': 'block' });

  // console.log(elementText1)

  var textWithoutPrefix = elementText1.replace(/^ID: /, '');

  textWithoutPrefix = textWithoutPrefix.replace(/#/g, '');

  $(".gjs-pn-btn").eq(10).trigger("click");

  $('.gjs-mdl-btn-close').trigger("click");

  const codeMirror = document.querySelector('.CodeMirror').CodeMirror;

  let codeMirrorContents = codeMirror.getValue();
  
  let parser = new DOMParser();
  let doc = parser.parseFromString(codeMirrorContents, 'text/html');
  
  
  let elementCodeMirrorId = doc.querySelector('#' + textWithoutPrefix);
  
  // for all buttons -------------------------------

  if (elementCodeMirrorId) {
      $(document).ready(function() {
        const elementToShowInput = $('#elementToShowInput');
        const elementToHideInput = $('#elementToHideInput');
        
        function updateAttributeShow(value) {
            
            elementCodeMirrorId.setAttribute("showElement", value);

            let modifiedContents = new XMLSerializer().serializeToString(doc);

            codeMirror.setValue(modifiedContents);

            let importButton = $(".gjs-btn-prim.gjs-btn-import");
            importButton.trigger("click");
        }    
      
        function updateAttributeHide(value) {
          
          elementCodeMirrorId.setAttribute("hideElement", value);

          let modifiedContents = new XMLSerializer().serializeToString(doc);

          codeMirror.setValue(modifiedContents);

          let importButton = $(".gjs-btn-prim.gjs-btn-import");
          importButton.trigger("click");
            
        }    
        var showElement = elementCodeMirrorId.getAttribute("showElement");

        elementToShowInput.val(showElement);
        if (elementToShowInput.length > 0) {

          elementToShowInput.on('input', function() {

            const value = $(this).val();
            // console.log('Input value changed:', value);

            updateAttributeShow(value); 
          });
        }
        else {
          console.log('ElementToShowInput not found');
          alert('Some Error');
        }
        
        var hideElement = elementCodeMirrorId.getAttribute("hideElement");

        elementToHideInput.val(hideElement);

          if (elementToHideInput.length > 0) {

            elementToHideInput.on('input', function() {

               const value = $(this).val();

              // console.log('Input value changed:', value);

              updateAttributeHide(value); 
            });
          } 
          else {
            console.log('ElementToHideInput not found');
            alert('Some Error');
          }

        });
    }




// for next panal button ---------------------------

if (elementCodeMirrorId) {
  var classNames = elementCodeMirrorId.className;

  if (classNames && classNames.includes("nextPanel")) {
      // Hide settings present on normal button
      $('#elementToHideId').css({ 'display': 'none' });
      $('#elementToShowId').css({ 'display': 'none' });
      $("#selectPanels").css({ 'display': 'block' });

      var selectElement = $("#selectPanel");
      selectElement.empty(); 
      var secondaryPanelElements = doc.querySelectorAll('[id^="Secondary_Panel"]');

      
      var noneOption = $("<option></option>").attr("value", "").text("None");
      selectElement.append(noneOption);

      secondaryPanelElements.forEach(function (element) {
          var id = element.id;

          
          var secondaryPanelName = element.getAttribute("secondary_panel_name");
          var optionText = secondaryPanelName ? secondaryPanelName : id;

          
          var isSelected = elementCodeMirrorId.getAttribute("showelement") === id;

          
          var option = $("<option></option>").attr("value", id).text(optionText);
          if (isSelected) {
              option.attr("selected", "selected");
          }

          selectElement.append(option);
      });
 
    // hide and show on next button   

      selectElement.on('change', function (event) {
        // alert(event.target.value)
        
          elementCodeMirrorId.setAttribute("showElement", event.target.value);
          
          

          var $doc = $(doc);
          var parentId = $doc.find('#' + elementCodeMirrorId.id).parent();
          var grandparentDiv = $doc.find(parentId.parent());
          var grandparentId = grandparentDiv.attr('id');

          elementCodeMirrorId.setAttribute("hideElement", grandparentId);

          let modifiedContents = new XMLSerializer().serializeToString(doc);
          codeMirror.setValue(modifiedContents);

          let importButton = $(".gjs-btn-prim.gjs-btn-import");
          importButton.trigger("click");
          
            // back button set attribute

            let openPageID = event.target.value;
            let openPageElement = $doc.find('#' + openPageID);
            
            console.log(openPageElement);
            
            let backButtonEl = openPageElement.find(".goBack");
            console.log(backButtonEl.length)
            
            // Assuming you want to hide the openPageElement when setting the attribute
            if (backButtonEl.length > 0) {
                backButtonEl.attr("hideElement", openPageID);
                backButtonEl.attr("showElement", grandparentId);
            }else{
              alert("Some Error")
              console.log("Back button len :",backButtonEl.length)
            }
            
            modifiedContents = new XMLSerializer().serializeToString(doc);
            codeMirror.setValue(modifiedContents);
            
            importButton.trigger("click");
            

           
         
      });

     
  
  } else {
      
      $("#selectPanels").css({ 'display': 'none' });
      console.log("Class does not contain 'nextPanel'");
  }
} else {
  // If elementCodeMirrorId does not exist
  console.log("Element not found by ID: " + textWithoutPrefix);
}


  







}









//add Attribute On Secondary Panel 


  function addAttributeOnSecondaryPanel(elementText1){

    $(document).ready(function() {
      
      $('#secondaryPanalName').css({ 'display': 'block' });
      
      var textWithoutPrefix = elementText1.replace(/^ID: /, '');

      textWithoutPrefix = textWithoutPrefix.replace(/#/g, '');
    
      $(".gjs-pn-btn").eq(10).trigger("click");
    
      $('.gjs-mdl-btn-close').trigger("click");
    
      const codeMirror = document.querySelector('.CodeMirror').CodeMirror;
    
      let codeMirrorContents = codeMirror.getValue();
      
      let parser = new DOMParser();
      let doc = parser.parseFromString(codeMirrorContents, 'text/html');
      
      
      let elementCodeMirrorId = doc.querySelector('#' + textWithoutPrefix);

      var Secondary_Panel_Name = elementCodeMirrorId.getAttribute("Secondary_Panel_Name");

      const elementToHideInput = $('#secondaryPanalNameInputEl');

      elementToHideInput.val(Secondary_Panel_Name);
    
      const importButton = $(".gjs-btn-prim.gjs-btn-import");
  
      function updateAttributeHide(value, doc) {

          elementCodeMirrorId.setAttribute("Secondary_Panel_Name", value);
  
          let modifiedContents = new XMLSerializer().serializeToString(doc);
          codeMirror.setValue(modifiedContents);
  
          importButton.trigger("click");
      }
  
      if (elementToHideInput.length > 0) {
          elementToHideInput.on('input', function() {
              const value = $(this).val();
              updateAttributeHide(value, doc);
          });
      } else {
          console.log('ElementToHideInput not found');
          alert('Some Error');
      }
  });
}