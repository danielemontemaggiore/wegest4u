// All'avvio della pagina..
function get(name){
	  
   if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
      return decodeURIComponent(name[1]);
  
	}
	
function visualizzaAppuntamenti() {
		var ID_attivita = get('ID_attivita');
		var ID_punto = get('ID_punto');
		var ID_operatore = get('ID_operatore');
		var Scadenza = get('Scadenza');
		var a1 = get('a1');
		var a2 = get('a2');
		var a3 = get('a3');
		var a4 = get('a4');
		var tipo ="w";
		
		$.ajax({
		  type: "GET",
		  url: "http://www.i-salon.eu/agenda_appuntamenti_elenco_ajax.asp",
		  data: "ID_attivita=" + ID_attivita + "&ID_punto=" + ID_punto + "&ID_operatore=" + ID_operatore + "&Scadenza=" + Scadenza + "&a1=" + a1 + "&a2=" + a2 + "&a3=" + a3 + "&a4=" + a4 + "&tipo=" + tipo,
		  dataType: "text",
		  success: function(msg)
		  {
			  
			var json = msg;
			var jsonData = JSON.parse(json);
			var risposta = jsonData.Risposta;
			
			if(risposta=="Ok"){
				// Recupero i vari campi
				 if (Risultato.Appuntamenti.length > 0) {
					 awi_output = "";
                    for(var i = 0; i < Risultato.Appuntamenti.length; i++) {
                        awi_output += "<div class=\"appuntamento\" id_appuntamento=\"" + Risultato.Appuntamenti[i].IA + "\">" +
                                            "<div class=\"nome\">" + Risultato.Appuntamenti[i].NC + "</div>" +
                                            "<div class=\"data\">" +
                                                "<i class=\"fa fa-calendar\"></i> " + Risultato.Appuntamenti[i].OI[0].O + ":" + Risultato.Appuntamenti[i].OI[0].M +
                                            "</div>" +
                                        "</div>";
                    }
				 }
				 $("#prova").append(awi_output);
			}
			else{
				var Testo_errore = jsonData.Testo_errore;
					window.location.assign("http://www.workingroupitalia.it/app/index.html?Testo_errore=" + Testo_errore);
			}
	 },
      error: function()
      {
		  alert("Hai inserito il nome utente o la password errati");		
      }
    });
}
		
window.onload = visualizzaAppuntamenti;