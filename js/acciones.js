// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	$('#btnbiografia').on('tap', function (){
		$('body').pagecontainer("change","#biografia",
		{transition:"flip"});
	});// click biografia
	
	$('#btnnombre').on('tap', function (){
		$('body').pagecontainer("change","#nombre",
		{transition:"pop"});
	});// click nombre
	
	$('#btncarrera').on('tap', function (){
		$('body').pagecontainer("change","#carrera",
		{transition:"flip"});
	});// click carrera
	
	$('#btnhome').on('tap', function (){
		$('body').pagecontainer("change","#principal",
		{transition:"pop"});
	});// click inicio
	
	$('#btnhomep').on('tap', function (){
		$('body').pagecontainer("change","#principal",
		{transition:"flip"});
	});// click inicio
	
	$('#btnbandas').on('tap', function (){
		$('body').pagecontainer("change","#bandas",
		{transition:"flip"});
	});// click bandas
	
	
	$('#btnbandah').on('tap', function (){
		$('body').pagecontainer("change","#bandas",
		{transition:"flip"});
	});// click banda
	
	$('#btnregresar').on('tap', function (){
		$('body').pagecontainer("change","#carrera",
		{transition:"flip"});
	});// click regresar	
	
	$('#btnho').on('tap', function (){
		$('body').pagecontainer("change","#principal",
		{transition:"flip"});
	});// click inicio
	
	$('#btnhom').on('tap', function (){
		$('body').pagecontainer("change","#principal",
		{transition:"flip"});
	});// click inicio
	
	$('#btndiscografia').on('tap', function (){
		$('body').pagecontainer("change","#discografia",
		{transition:"flip"});
	});// click inicio
	
	$('#btnhome1').on('tap', function (){
		$('body').pagecontainer("change","#principal",
		{transition:"flip"});
	});// click inicio
}); 
});

