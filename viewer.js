
const serverUrl = location.origin === 'http://localhost' ? "http://52.172.32.88/CoreAPI/api" :location.origin+"/CoreAPI/api" ;



const server = location.origin === 'http://localhost' ? "http://52.172.32.88" :location.origin;



let iframePresent = true;
// function getViewer(){
//   const urlParam = new URLSearchParams(window.location.search);
//     tid = urlParam.get("tid");
//     pid = urlParam.get("pid");
//   $.ajax({
//     url: 'http://52.172.32.88/coreapi/api/portal/getcsshtml/'+tid+'/'+pid,
//     method: 'GET',
//     dataType: 'json',
//     success: function (response) {
//       console.log('Success callback executed');
//       if (response.cssfile === "" && response.htmlfile === "") {
//         return;
//       }
//       console.log("Response:", response);
      
//       document.getElementById('viewerContent').innerHTML = '';
  
  
//       let cssContent = atob(response.cssfile);
//       let htmlContent = atob(response.htmlfile);
  
//       // Debug: Log CSS and HTML content
//       console.log("CSS Content:", cssContent);
//       console.log("HTML Content:", htmlContent);
  
//       // Replace the HTML content on the UI
//       $("#viewerContent").append(htmlContent);
  
//       // Append the CSS content to the head
//       $("head").append(`<style>${cssContent}</style>`);;
//     },
//     error: function (error) {
//       console.error('Error fetching API data:', error);
//     }
//   });
  
//   }
  




function getViewer() {
  const urlParam = new URLSearchParams(window.location.search);
  tid = urlParam.get("tid");
  pid = urlParam.get("pid");

  $.ajax({
    url: serverUrl+'/portal/getcsshtml/' + tid + '/' + pid,
    method: 'GET',
    dataType: 'json',
    success: function (response) {
      console.log('Success callback executed');
      if (response.cssfile === "" && response.htmlfile === "") {
        return;
      }
      console.log("Response:", response);

      document.getElementById('viewerContent').innerHTML = '';

      let cssContent = atob(response.cssfile);
      let htmlContent = atob(response.htmlfile);

      // Debug: Log CSS and HTML content
      console.log("CSS Content:", cssContent);
      console.log("HTML Content:", htmlContent);

      // Replace the HTML content on the UI
      $("#viewerContent").append(htmlContent);

      // Append the CSS content to the head
      $("head").append(`<style>${cssContent}</style>`);

      // Additional functionality
      var parser = new DOMParser();
      var doc = parser.parseFromString(htmlContent, "text/html");

      // Find the button with the hideelement attribute
      var buttons = doc.querySelectorAll('[hideelement], [showelement]');

  buttons.forEach(button => {
    var hideElement = button.getAttribute('hideelement');
    var showElement = button.getAttribute('showelement');

    if (hideElement && showElement) {
      button.setAttribute('onclick', 'hideAndShowElement("' + hideElement + '", "' + showElement + '")');
    } else if (hideElement) {
      var existingOnClick = button.getAttribute('onclick');
      button.setAttribute('onclick', 'hideElement("' + hideElement + '");' + existingOnClick);
    } else if (showElement) {
      var existingOnClick = button.getAttribute('onclick');
      button.setAttribute('onclick', 'showElement("' + showElement + '");' + existingOnClick);
    }
    // Remove only the specific attributes after processing
    button.removeAttribute('hideelement');
    button.removeAttribute('showelement');
  });


      // Update the UI with the modified content
      const bodyElement = document.querySelector("body");
      bodyElement.innerHTML = doc.documentElement.innerHTML;

      // Clean up localStorage
      localStorage.removeItem("previewContentPortal");
    },
    error: function (error) {
      console.error('Error fetching API data:', error);
    }
  });
}

function hideElement(elementId) {
  console.log("Hide called")
  console.log(elementId)
  var elementToHide = document.getElementById(elementId);
  if (elementToHide) {
    elementToHide.style.display = 'none';
  }
  else{
    console.log("hide element not present")
  }
  
}
function showElement(elementId) {
  console.log("chow called");
  console.log(elementId);
  var elementToShow = document.getElementById(elementId);
  
  if (elementToShow) {
    elementToShow.style.display = 'block'; // Changing the display property to 'block' to make it visible
  } else {
    let $element = $(document).find(elementId);
    // elementToShow.style.display = 'block';

    if ($element.length > 0) {
      console.log("Element found using jQuery find");
      $element.show(); // Display the element using jQuery
    } else {
      console.log("Element not found");
    }
  }
}



function hideAndShowElement(hideId, showId) {
  console.log("hide and show called");
  console.log("showId:", showId);
  hideElement(hideId);
  showElement(showId);
}

  
  
  
    document.addEventListener("DOMContentLoaded", function () {

      const urlParams = new URLSearchParams(window.location.search);
      tid = urlParams.get("tid");
      pid = urlParams.get("pid");
    
      console.log("tid:", tid);
      console.log("pid:", pid);


      fetch(serverUrl+'/portal/withoutToken/'+tid+'/'+pid)
        .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); 
        })
        .then(data => {
          console.log("from api ",data);
          const dataFromApi = data;  
          if (dataFromApi.settingsJson === "null" || dataFromApi.settingsJson === null ) {
            // alert("direct call iframe didnot load");
            console.log("direct call iframe didnot load",dataFromApi.settingsJson );
            getViewer(); 
            iframePresent = false;
          } 
          else{
            iframePresent = true;
          }   
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
          iframePresent = true;
        });

        setTimeout(function() {
          // alert(iframePresent)
          if (iframePresent === true){
            console.log("iframe created");
            // alert("iframe created")

            // iframePresent = true
            const urlParamss = new URLSearchParams(window.location.search);
            tid = urlParamss.get("tid");
            pid = urlParamss.get("pid");
        
            console.log("tid:", tid);
            console.log("pid:", pid);
            let authenticateIframeId = document.getElementById("authenticateIframe");
            authenticateIframeId.src =server+ "/app/portals/" + tid + "/" + pid; 
          }
        },3000)
})


setTimeout(function() {
  if (iframePresent === true){
      let a = 0;
    
    const timerId = startTimer(findLocalStorage, 2);
    
    function startTimer(callback, intervalInSeconds) {
      callback(); 
      return setInterval(callback, intervalInSeconds * 1000);
    }
      
    function findLocalStorage() {
      //  console.log("called")
      // console.log(localStorage.getItem('viewPortal'))
      if (localStorage.getItem('viewPortal') == 'true'){
        //  alert(1);
        // location.reload();
        console.log("get Viewer called")
        getViewer()
        // alert("new content created")
         localStorage.removeItem('viewPortal');
      }
      // else{
      //   a+=1;
      //   if (a==5){
      //     localStorage.setItem('viewPortal','true');
      //   }
      // }
    }
  }
},3000)




