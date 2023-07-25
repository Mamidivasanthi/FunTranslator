var btntranslate=document.querySelector('#btn-translate');
var txtInput=document.querySelector('#inp-text');
var outputdiv=document.querySelector('#output');

var serverurl="https://api.funtranslations.com/translate/minion.json";
var serverurlgot="https://api.funtranslations.com/translate/dothraki.json";
var serverurlsks="https://api.funtranslations.com/translate/shakespeare.json";
var serverurlast="https://api.funtranslations.com/translate/australian.json";

function getTranslateurl(input){
    return serverurl+"?"+"text="+input;
}
function getTranslateurlgot(input){
    return serverurlgot+"?"+"text="+input;
}
function getTranslateurlsks(input){
    return serverurlsks+"?"+"text="+input;
}
function getTranslateurlast(input){
    return serverurlast+"?"+"text="+input;
}
function errorHandler(error){
    console.log("error occured",error);
    alert("something Wrong with server!Please try again after sometime");
}
function clickHandler(){
    var inputText=txtInput.value;
    fetch(getTranslateurl(inputText)).then(response=>response.json()).then(json=>{
        var translatedText=json.contents.translated;
        outputdiv.innerText=translatedText;
    }).catch(errorHandler)
};
function clickHandlergot(){
    var inputText=txtInput.value;
    fetch(getTranslateurlgot(inputText)).then(response=>response.json()).then(json=>{
        var translatedText=json.contents.translated;
        outputdiv.innerText=translatedText;
    }).catch(errorHandler)
};
function clickHandlersks(){
    var inputText=txtInput.value;
    fetch(getTranslateurlsks(inputText)).then(response=>response.json()).then(json=>{
        var translatedText=json.contents.translated;
        outputdiv.innerText=translatedText;
    }).catch(errorHandler)
};
function clickHandlerast(){
    var inputText=txtInput.value;
    fetch(getTranslateurlast(inputText)).then(response=>response.json()).then(json=>{
        var translatedText=json.contents.translated;
        outputdiv.innerText=translatedText;
    }).catch(errorHandler)
};
btntrans.addEventListener("click",clickHandler);
Australian.addEventListener("click",clickHandlerast);
shakesphere.addEventListener("click",clickHandlersks);
got.addEventListener("click",clickHandlergot);
