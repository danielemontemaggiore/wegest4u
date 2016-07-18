$(document).ready(function() {
  $("#statistiche").click(function(){
		var ID_attivita = get('ID_attivita');
		var ID_punto = get('ID_punto');
		var ID_operatore = get('ID_operatore');
		var ID_culture = get('ID_culture');
		var Scadenza = get('Scadenza');
		var a1 = get('a1');
		var a2 = get('a2');
		var a3 = get('a3');
		var a4 = get('a4');
	window.location.assign("http://www.i-salon.eu/app/statistiche/index.asp?ID_attivita=" + ID_attivita + "&ID_punto=" + ID_punto + "&ID_culture=" + ID_culture + "&ID_operatore=" + ID_operatore +"&Scadenza=" + Scadenza + "&a1=" + a1 + "&a2=" + a2 + "&a3=" + a3 + "&a4=" + a4);

 });
  
  $("#agenda-appuntamenti").click(function(){
		var ID_attivita = get('ID_attivita');
		var ID_punto = get('ID_punto');
		var ID_operatore = get('ID_operatore');
		var ID_culture = get('ID_culture');
		var Scadenza = get('Scadenza');
		var a1 = get('a1');
		var a2 = get('a2');
		var a3 = get('a3');
		var a4 = get('a4');
	window.location.assign("http://www.workingroupitalia.it/app_sviluppo/agenda-appuntamenti.html?ID_attivita=" + ID_attivita + "&ID_punto=" + ID_punto + "&ID_operatore=" + ID_operatore + "&ID_culture=" + ID_culture +"&Scadenza=" + Scadenza + "&a1=" + a1 + "&a2=" + a2 + "&a3=" + a3 + "&a4=" + a4);
  });
  
  $("#hotspot").click(function(){
	window.location.assign("http://www.workingroupitalia.it/app/hotspot");
  });
  
  $("#esci").click(function(){
	window.location.assign("http://www.workingroupitalia.it/app/");
  });
	
  
  function get(name){
	  
   if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
      return decodeURIComponent(name[1]);
  
	}
	
	
	
	
	
	
});


function getMobileOperatingSystem() {
		  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

		  if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) )
		  {
		

		  }
		  else if( userAgent.match( /Android/i ) )
		  {

			document.getElementById('hotspot').style.visibility='visible';
		  }
		  else
		  {
		
		  }
	}
