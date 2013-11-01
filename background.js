chrome.runtime.sendMessage.eventListener(
function(request ,sender ,sendResponse){
if (request.action == "initialise")
{
sendResponse({farewell : "intitiating"});
start();
}

function start(){
	hasGetUserMedia();
if(navigator.getUserMedia){
navigator.getUserMedia({audio:false , video:false} ,function(stream){
this.source = stream;
update();
}.error);}
else if(navigator.webkitGetUserMedia){
navigator.webkitGetUserMedia({audio:false , video:true} ,function(stream){
	this.source = window.webkitURL.createObjectURL(stream);
	update();
},error);
};
	var error = function(e){
		alert('Webcam not working!!',e);};
}

function hasGetUserMedia(){
return !!(navigator.getUserMedia || navigator.webkitGetUserMedia);}

function update (){
blend();
checkAreas();
}

var canvasSource= $('#canvas-source')[0];
var canvasBlend= $('#canvas-blend') [0];
var
function blend(){
var width= canvasSource.width;
var height= canvasSource.height;



}
