$(document).ready(function() {
  $("#invia_richiesta").click(function(){
    var username = $("#username").val();
    var password = $("#password").val();
    $.ajax({
      type: "POST",
      url: "http://www.i-salon.eu/login_punto_ajax.asp",
      data: "codice=1&username=" + username + "&password=" + password,
      dataType: "text",
      success: function(msg)
      {
		  
		var json = msg;
		var jsonData = JSON.parse(json);
		var risposta = jsonData.Risposta;
		
		if(risposta=="Ok"){
			// Recupero i vari campi
			var ID_attivita = jsonData.ID_attivita;
			var ID_punto = jsonData.ID_punto;	
			var ID_operatore = jsonData.ID_operatore;
			var Scadenza = jsonData.Scadenza;
			var a1 = jsonData.a1;
			var a2 = jsonData.a2;	
			var a3 = jsonData.a3;
			var a4 = jsonData.a4;
			   //window.location.assign("http://www.i-salon.eu/app/statistiche/index.asp?ID_attivita=" + ID_attivita + "&ID_punto=" + ID_punto + "&ID_operatore=" + ID_operatore +"&Scadenza=" + Scadenza + "&a1=" + a1 + "&a2=" + a2 + "&a3=" + a3 + "&a4=" + a4);
				window.location.assign("http://www.workingroupitalia.it/app//menu.html?ID_attivita=" + ID_attivita + "&ID_punto=" + ID_punto + "&ID_operatore=" + ID_operatore +"&Scadenza=" + Scadenza + "&a1=" + a1 + "&a2=" + a2 + "&a3=" + a3 + "&a4=" + a4);
		}
		else{
				window.location.assign("http://www.workingroupitalia.it/app/");
		}
	 },
      error: function()
      {
		  alert("Hai inserito il nome utente o la password errati");		
      }
    });
  });
});