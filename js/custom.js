const serverUrl = location.origin === 'http://localhost' ? "http://52.172.32.88/CoreAPI/api" :location.origin+"/CoreAPI/api" ;
// export default serverUrl ;


let key = CryptoJS.enc.Base64.parse('F0iBiPUEhQPqWI7aF99yXw==');
let iv = CryptoJS.enc.Base64.parse('5gAl8bFuUilqr3w45/9RSQ==');

let token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwidGVuYW50SWQiOjEsImxvZ2dlZEZyb20iOiJXRUIifQ.NeW50XiwU4kycKu3N_QPfFNXdiRZUqXjo0P5NU4NRJE";
// 
// Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZC…UIifQ.NeW50XiwU4kycKu3N_QPfFNXdiRZUqXjo0P5NU4NRJE

function encrypt(inputText) {
    let encryptedText = CryptoJS.AES.encrypt(inputText, key, { iv: iv });
    return JSON.stringify(encryptedText.toString());
}

function decrypt(outputText) {
    let decryptedText = "";
    if (outputText) {
        let code = CryptoJS.AES.decrypt(outputText, key, { iv: iv });
        decryptedText = code.toString(CryptoJS.enc.Utf8);      
    }
    return JSON.parse(decryptedText);
}

function CallAPIMethod(type, method, parameters, success) {
    var ajaxcall = $.ajax({
        type: type,
        contentType: "application/json",
        headers: {
            Token: token
        },
        url: serverUrl  + method,
        data: parameters ? encrypt(parameters):"",
        success: function (response) {
            success(decrypt(response)); 
        },
        error: function (request, status, error) {
            if (status != "abort") {
                alert("Some Error");
                console.log("Some Error " + method);
            }
            else {
                console.log("aborted - " + method, parameters);
            }
        }
    });
    return ajaxcall;
}   