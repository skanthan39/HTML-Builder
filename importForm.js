

function getImportForm(selectedid,elementText){
  if (elementText.startsWith('ID: import_form') || elementText.startsWith('#import_form')) {
    $("#SelectForm").css('display', 'block');

    const requestData = {
      mode: "BROWSE",
      sortBy: { criteria: "", order: "DESC" },
      groupBy: "",
      filterBy: [
        {
          groupCondition: "",
          filters: [
            { criteria: "publishOption", condition: "IS_EQUALS_TO", value: "PUBLISHED" },
            { criteria: "type", condition: "IS_EQUALS_TO", value: "MASTER" }
          ]
        }
      ],
      itemsPerPage: 500,
      currentPage: 1
    };
    let formData
    let strRequestData = JSON.stringify(requestData);

    CallAPIMethod('POST', '/form/all', strRequestData, function (response) {
      console.log('form/all api response =', response);
     
        formData = response;
        firstFormcall= false;

        // console.log("formData",parse(formData))
      

    
      
      const formSelectElement = document.getElementById('gjs-sm-input-holder').querySelector('select');


      formSelectElement.innerHTML = '';


      const noneOption = document.createElement('option');
      noneOption.value = ''; 
      noneOption.textContent = 'None'; 
      formSelectElement.appendChild(noneOption);


      const uniqueIds = new Set();


      formData.data[0].value.forEach(item => {
      
        if (!uniqueIds.has(item.id)) {
          uniqueIds.add(item.id);

          const option = document.createElement('option');
          option.value = item.id;
          option.textContent = item.name;

          formSelectElement.appendChild(option);
        }
      });
    });
  } 
  else {
    
    $("#SelectForm").css('display', 'none');
  }
}

function  createSelectForm(){
  $("body").find("#settingDisplyId").append('<div id="SelectForm"  style="margin-top: 24px;">'+
  '<div >'+
  '<span style="display: flex;flex-direction: row;color: #64748b;font-weight: bold !important;font-size: 0.75rem;padding-bottom: 5px;"> Select Form'+
  '</span>'+
  '<div class="gjs-sm-clear" style="display: none" data-clear-style=""><svg viewBox="0 0 24 24"><path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path></svg></div>'+
  '</div>'+
  '<div class="gjs-fields" data-sm-fields="">'+
  '<div class="gjs-field gjs-select">'+
  '  <span ><select id="import-form-select"><option value="none">None</option></select></span>'+
    '<div class="gjs-sel-arrow">'+
      '<div class="gjs-d-s-arrow"></div>'+
    '</div>'+
  '</div>'+
  '</div>'+
  '</div>');
}


function creatImportForm(){
 return( '<div  class="totalContainer"><div>' +
            '<div id="import_form" draggable="true" class="cards import_form" ondragstart="importForms(event)" style="padding: 20px 0; display: flex; justify-content: space-around; flex-flow: wrap; background-repeat: repeat; background-position: left top; background-attachment: scroll; background-size: auto; background-image: linear-gradient(#ffffff 0%, #ffffff 100%);">' +
            '<div id="" draggable="true" class="card importForm" style="margin: 0; padding: 0;">' +
              '<div id="" draggable="true" class="card-body">' +
                '<h1 id="" style="" draggable="true" class="card-title importFormText">Import your form</h1>' +
              '</div>' +
            '</div>' +
            '</div></div>' +
            
          '</div>')
}




