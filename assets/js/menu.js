$(document).ready(function() {
  $("#statistiche").click(function(){
	  var ID_attivita = get('ID_attivita');
		var ID_punto = get('ID_punto');
		var ID_operatore = get('ID_operatore');
		var Scadenza = get('Scadenza');
		var a1 = get('a1');
		var a2 = get('a2');
		var a3 = get('a3');
		var a4 = get('a4');
	window.location.assign("http://www.i-salon.eu/app/statistiche/index.asp?ID_attivita=" + ID_attivita + "&ID_punto=" + ID_punto + "&ID_operatore=" + ID_operatore +"&Scadenza=" + Scadenza + "&a1=" + a1 + "&a2=" + a2 + "&a3=" + a3 + "&a4=" + a4);
  });
  
	
  
  function get(name){
	  
   if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
      return decodeURIComponent(name[1]);
  
	}
});

function getValue(){   // Recupero i vari campi
	
		
		
	}