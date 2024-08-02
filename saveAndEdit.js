// import serverUrl from './custom.js';
console.log(serverUrl)

let tid = null;
let id = null;
let newportal = false;
let editAndSavePortal = false;
let runSpinner = false;

const timerId = startTimer(findLocalStorage, 5);

function startTimer(callback, intervalInSeconds) {
    callback(); 
    return setInterval(callback, intervalInSeconds * 1000);
  }
  
  function findLocalStorage() {
    let tidvalue = localStorage.getItem("tId");
    let portalid = localStorage.getItem("portalId");
      // console.log('tId,portalId=',tidvalue,',',portalid)
      // console.log('saved in variable tid ,id : ',tid,',',id)

    if (localStorage.getItem('savePortal') === "true"){
      if (newportal === true){
        id = portalid;
         
          if (id != 0 && id != null && tid != null) {
            $(".gjs-pn-btn").eq(10).trigger("click");
            $(".gjs-mdl-btn-close").trigger("click");
            $(".gjs-pn-btn").eq(7).trigger('click');
            $('#ExportButtonId').trigger('click');
            $(".rotate-icon-container").trigger('click');

           
            
            console.log('tId,portalId=',tid,',',portalid)
            localStorage.removeItem("tId");
            localStorage.removeItem("portalId");
            
            console.log('new portal saved')
           localStorage.setItem('savePortal', false);
           localStorage.removeItem("savePortal");
          
          }
          else{
            console.log('tid ,portalid= ',tid,', ',id,'is not null or =0')
          }
      }
      else if (editAndSavePortal === true) {
        $(".gjs-pn-btn").eq(10).trigger("click");
        $(".gjs-mdl-btn-close").trigger("click");
        $(".gjs-pn-btn").eq(7).trigger('click');
        $('#ExportButtonId').trigger('click');
        $(".rotate-icon-container").trigger('click');
        console.log('tId,portalId=',tidvalue,',',portalid)
        localStorage.removeItem("tId");
        localStorage.removeItem("portalId");
        localStorage.removeItem("savePortal");
        console.log('edit portal saved')
      // localStorage.setItem('savePortal', false);
      }
      // else{
      //  console.log('tid ,portalid= ',tid,', ',id,'is not null or =0');
      // }
    }

    if (portalid === '0'){
      
      stopLoadingLoop()
      tid = tidvalue;
      $(".gjs-pn-btn").eq(11).trigger('click');
      localStorage.removeItem('ezofisPortalProject');
      newportal = true;
      localStorage.removeItem("tId");
      localStorage.removeItem("portalId");
      localStorage.removeItem("savePortal");
      console.log("new portal created")
    }

    else if ((portalid != 0 && portalid != null && tidvalue != null) && newportal != true  )  {
      id = portalid;
      runSpinner = true;
      tid = tidvalue;
      localStorage.removeItem('ezofisPortalProject');
      editPortal()
      editAndSavePortal = true;
      console.log(' on eadit tId,portalId=',tidvalue,',',portalid)
      
      
      
      
    }
    // else{
    //   console.log('tid ,portalid= ',tid,', ',id,'is not null or =0')
    // }

    

  }




  document.addEventListener("zipReady", function (event) {
    var formData = event.detail.formData;
    var zipFile = formData.get("file");

    if (zipFile instanceof File) {
        function sendBase64DataToApi(base64Data) {
            var apiUrl = serverUrl+"/portal/updateZip/" + tid + "/" + id;

            var xhr = new XMLHttpRequest();
            xhr.open("POST", apiUrl, true);

            xhr.setRequestHeader("Content-Type", "application/json");

            var requestData = {
                base64file: base64Data
            };

            var jsonData = JSON.stringify(requestData);

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        console.log("API Response:",xhr.responseText)
                        // var response = JSON.parse(xhr.responseText);
                        // console.log("API Response:", response);

                        if (xhr.responseText === "success") {
                            
                            localStorage.setItem("portalSavedSuccessfully", true);
                        } else {
                            
                            localStorage.setItem("portalSavedSuccessfully", false);
                        }
                    } else {
                        console.error("API Request failed with status:", xhr.status);
                        console.error("API Response:", xhr.responseText);
                      
                        localStorage.setItem("portalSavedSuccessfully", false);
                    }
                }
            };
            xhr.send(jsonData);
        }

        var reader = new FileReader();
        reader.onload = function (event) {
            var base64Data = event.target.result.split(',')[1];
            sendBase64DataToApi(base64Data);
        };
        reader.readAsDataURL(zipFile);
    }
});

  

// on eadit mode

async function editPortal() {
  startLoadingLoop();

  try {
      const response = await new Promise((resolve, reject) => {
          $.ajax({
              url: serverUrl + '/portal/getcsshtml/' + tid + '/' + id,
              method: 'GET',
              dataType: 'json',
              success: function (data) {
                  resolve(data);
              },
              error: function (jqXHR, textStatus, errorThrown) {
                  reject({ jqXHR, textStatus, errorThrown });
              }
          });
      });

      // console.log(response);

      if (response.cssfile === "" && response.htmlfile === "") {
          return;
      }

      const cssContent = atob(response.cssfile);
      const htmlContent = atob(response.htmlfile);

      // console.log('Response converted from base64: CSS', cssContent, 'HTML', htmlContent);

      const mergedContent = htmlContent.replace('</head>', `<style>${cssContent}</style></head>`);
      // console.log(mergedContent);
      $(".gjs-pn-btn").eq(10).trigger("click");
      $(".gjs-mdl-btn-close").trigger("click");

      const codeMirrorInstance = document.querySelector('.CodeMirror').CodeMirror;
      console.log('before get value', codeMirrorInstance.getValue());

      codeMirrorInstance.setValue(mergedContent);
      console.log('after get value', codeMirrorInstance.getValue());

      console.log('Merged content applied to CodeMirror.');
      const importButton = $(".gjs-btn-prim.gjs-btn-import");

      importButton.trigger("click");
      localStorage.removeItem("tId");
      localStorage.removeItem("portalId");
      localStorage.removeItem("savePortal");
      console.log('edit portal opened');
       stopLoadingLoop()
       console.log("Stop spinner called")
       stopLoadingLoop()
  } catch (error) {
       stopLoadingLoop()
       runSpinner = false;
        console.log("Stop spinner called")
      localStorage.removeItem("tId");
      localStorage.removeItem("portalId");
      localStorage.removeItem("savePortal");
      console.log('edit portal opened & no content present or Some error');
      // console.error('Error: ', error.textStatus, error.errorThrown);
      
  }
  // stopLoadingLoop()
}

  



    var loadingIndicator = $("#loading-indicator");
    var intervalID;
    var direction = 1;
        
    $(document).ready(function() {
      loadingIndicator = $("#loading-indicator");
    
      if (loadingIndicator.length > 0) {
        // alert("Yes");
        // console.log("Element found:", loadingIndicator);
      } else {
        // alert("No");
        console.log("Element not found.");
      }
      if (runSpinner === true){startLoadingLoop();}
      
    });
    
    
      function moveLoadingIndicator() {
        // console.log("RUNNING");
        if (direction === 1) {
          loadingIndicator.css("margin-left", "100%");
          direction = -1;
          loadingIndicator.css("transition", "margin 2s");
        } else {
          loadingIndicator.css("margin-left", "0%");
          direction = 1;
          loadingIndicator.css("transition", "margin 0s");
        }
      }
     
    
      function startLoadingLoop() {
        // console.log("called")
        var loadingIndicator = $("#loading-indicator");
        loadingIndicator.css("display", "block");
        moveLoadingIndicator();
        intervalID = setInterval(moveLoadingIndicator, 1000);
      }
    
      function stopLoadingLoop() {
        //  alert(11)
        loadingIndicator = $("#loading-indicator");
        loadingIndicator.css("display", "none");
        // loadingIndicator.addClass("HideLoadingIndicator");

        clearInterval(intervalID);
      }
    
    //   startLoadingLoop();
    //   // setTimeout(stopLoadingLoop, 20000);
      // console.log("RUNNING");
     
    
    
    