$(document).ready(function(){
var crossBrowser = (navigator.getUserMedia || navigator.webkitGetUseMedia || navigator.mozGetUserMedia );
if(crossBrowser){
navigator.getUserMedia({audio :false, video:true }, function(stream){
