// All'avvio della pagina..
function get(name){
	  
   if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
      return decodeURIComponent(name[1]);
  
	}
	
function visualizzaAppuntamenti() {
		var ID_attivita = get('ID_attivita');
		var ID_punto = get('ID_punto');
		var ID_operatore = get('ID_operatore');
		var ID_culture = get('ID_culture');
		var Scadenza = get('Scadenza');
		var a1 = get('a1');
		var a2 = get('a2');
		var a3 = get('a3');
		var a4 = get('a4');
		var tipo ="w";            // GESTIRE IL TIPO PER SAPERE SE SI VUOLE L'ELENCO DEGLI APPUNTAMENTI GIORNALIERO O DI UN ALTRO GIORNO...
		
		$.ajax({
		  type: "GET",
		  url: "http://www.i-salon.eu/agenda_appuntamenti_elenco_ajax.asp",
		  data: "ID_attivita=" + ID_attivita + "&ID_punto=" + ID_punto + "&ID_operatore=" + ID_operatore + "&ID_culture=" + ID_culture + "&Scadenza=" + Scadenza + "&a1=" + a1 + "&a2=" + a2 + "&a3=" + a3 + "&a4=" + a4 + "&tipo=" + tipo,
		  dataType: "text",
		  success: function(msg)
		  {
			  
			var json = msg;
			var jsonData = JSON.parse(json);
			var risposta = jsonData.Risposta;
			
			if(risposta=="Ok"){
				
				// Recupero i vari campi
				 if (jsonData.Appuntamenti.length > 0) {
					 awi_output = "";
                    for(var i = 0; i < jsonData.Appuntamenti.length; i++) {
						/*
                        awi_output += "<div class=\"appuntamento\" id_appuntamento=\"" + jsonData.Appuntamenti[i].IA + "\">" +
                                            "<div class=\"nome\">" + jsonData.Appuntamenti[i].NC + "</div>" +
                                            "<div class=\"data\">" +
                                                "<i class=\"fa fa-calendar\"></i> " + jsonData.Appuntamenti[i].OI[0].O + ":" + jsonData.Appuntamenti[i].OI[0].M +
                                            "</div>" +
                                        "</div>";
										*/
						        lista_servizi= " ";				
								for(var j = 0; j < jsonData.Appuntamenti[i].Servizi.length; j++) {
													lista_servizi += jsonData.Appuntamenti[i].Servizi[j].Se + " , " 
								}
								lista_servizi = lista_servizi.slice(0, -2);
										
								awi_output +="<li class=\"list-group-item\" style=\"background: #" + jsonData.Appuntamenti[i].Co + " ; border-radius: 15px; margin-top: 15px\">" +
												"<div class=\"row\">" + 
													"<div class=\"col-sm-8 col-xs-8 nome\">" + jsonData.Appuntamenti[i].NC + "</div>" +
													"<div class=\"col-sm-4 col-xs-4\ ora\"><i class=\"fa fa-calendar\"></i>&nbsp" + + jsonData.Appuntamenti[i].OI[0].O + ":" + jsonData.Appuntamenti[i].OI[0].M +
												"</div></div> <br>" +
												"<div class=\"row\">" +
													"<div class=\"col-sm-12 col-xs-12 servizi\">Servizi :" + lista_servizi +
												"</div>"
												"</div>" +
											 "</li>" 			
											 
                    }
				 }
				 $("#lista_appuntamenti").append(awi_output);
				 
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