chrome.runtime.sendMessage.eventListener(
function(request ,sender ,sendResponse){
if (request.action == "initialise")
{
sendResponse({farewell : "intitiating"});
}
