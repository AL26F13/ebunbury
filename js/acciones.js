// JavaScript Document
$(document).ready(function(e) {
//document.addEventListener("deviceready",function(){
	$('#btnbiografia').on('click', function (){
		$('body').pagecontainer("change","#biografia",
		{transition:"flip"});
	});// click biografia
	
	$('#btnnombre').on('click', function (){
		$('body').pagecontainer("change","#nombre",
		{transition:"pop"});
	});// click nombre
	
	$('#btncarrera').on('click', function (){
		$('body').pagecontainer("change","#carrera",
		{transition:"flip"});
	});// click carrera
	
	$('#btnhome').on('click', function (){
		$('body').pagecontainer("change","#principal",
		{transition:"pop"});
	});// click inicio
	
	$('#btnhomep').on('click', function (){
		$('body').pagecontainer("change","#principal",
		{transition:"flip"});
	});// click inicio
	
	$('#btnbandas').on('click', function (){
		$('body').pagecontainer("change","#bandas",
		{transition:"flip"});
	});// click bandas
	
	
	$('#btnbandah').on('click', function (){
		$('body').pagecontainer("change","#bandas",
		{transition:"flip"});
	});// click banda
	
	$('#btnregresar').on('click', function (){
		$('body').pagecontainer("change","#carrera",
		{transition:"flip"});
	});// click regresar	
	
	$('#btnho').on('click', function (){
		$('body').pagecontainer("change","#principal",
		{transition:"flip"});
	});// click inicio
	
	$('#btnhom').on('click', function (){
		$('body').pagecontainer("change","#principal",
		{transition:"flip"});
	});// click inicio
//}); 
});

