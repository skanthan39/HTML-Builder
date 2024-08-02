document.addEventListener("DOMContentLoaded", function () {
  var htmlContent = localStorage.getItem("previewContentPortal");
  var parser = new DOMParser();
  var doc = parser.parseFromString(htmlContent, "text/html");

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

  const bodyElement = document.querySelector("body");
  bodyElement.innerHTML = doc.documentElement.innerHTML;

   localStorage.removeItem("previewContentPortal");
});










function hideElement(elementId) {
  // console.log("Hide called")
  // console.log(elementId)
  var elementToHide = document.getElementById(elementId);
  if (elementToHide) {
    elementToHide.style.display = 'none';
  }
  else{
    console.log("hide element not present")
  }
  
}
function showElement(elementId) {
  // console.log("chow called");
  // console.log(elementId);
  var elementToShow = document.getElementById(elementId);
  
  if (elementToShow) {
    elementToShow.style.display = 'block'; // Changing the display property to 'block' to make it visible
  } else {
    let $element = $(document).find(elementId);
    // elementToShow.style.display = 'block';

    if ($element.length > 0) {
      // console.log("Element found using jQuery find");
      $element.show(); // Display the element using jQuery
    } else {
      // console.log("Element not found");
    }
  }
}



function hideAndShowElement(hideId, showId) {
  // console.log("hide and show called");
  // console.log("showId:", showId);
  hideElement(hideId);
  showElement(showId);
}


document.addEventListener("DOMContentLoaded", function () {
  var secondaryPanelElements = document.querySelectorAll('[id^="Secondary_Panel"]');

  
  secondaryPanelElements.forEach(function(element) {
    
    console.log(element.id);
    
    element.style.display="none"
  });

 
  function goHomeFunction() {
    let homeContent = document.querySelector('[id^="Primary_Panel"]');
    // Hide the primary panel
    if (homeContent) {
      homeContent.style.display = "block";
    }

    // Hide all elements whose ID starts with "Secondary_Panel"
    var secondaryPanelElements = document.querySelectorAll('[id^="Secondary_Panel"]');
    secondaryPanelElements.forEach(function(element) {
      element.style.display = "none";
    });
  }

  var goHomeButtons = document.querySelectorAll('.goHome');
  goHomeButtons.forEach(function(button) {
    button.addEventListener('click', goHomeFunction);
  });
  
  
  document.querySelector('.homeNext').addEventListener('click', function() {
    var secondaryPanelElements = document.querySelectorAll('[id^="Secondary_Panel"]');
    secondaryPanelElements.forEach(function(element) {
      element.style.display = "block";
    });

    document.getElementById('Primary_Panel').style.display = "none";
  });
});













