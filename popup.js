$(document).ready(function(){
$("#but1").click(function(){
    initialise();
});
$("#but2").click(function(){
     stop(timeoutId);
});
});
function initialise (){
chrome.runtime.sendMessage({'action' : 'initialise'}, function(response){
alert('response.farewell');
});
}

var timeoutId = null;
function stop(){
if(timeoutId){
window.clearTimeout(timeoutId);
}
}
