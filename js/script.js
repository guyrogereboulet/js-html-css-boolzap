$(document).ready (function(){
  $("#invia").click(function (){
    sendMessage();
  });
  $("#contatti ul li").click(function(){
    var conversazione = $(this).attr("data-conversazione");
    var pannelloConversazione = $('.contenitore-messaggi[data-contact="' + conversazione + '"]');
    $(".contenitore-messaggi").removeClass("active");
    pannelloConversazione.addClass("active")
  });
});



//---------------FUNZIONI---------------//

//FUNZIONE INVIO MESSAGGI
function sendMessage() {
  var textMessage = $("input.inserimento").val();
  console.log(textMessage);
  if (textMessage.length != 0) {
    var newMessage = $(".template .messaggio-utente").clone();
    console.log(newMessage);
    newMessage.find(".message-left").text(textMessage);
    //Inserimento data
    var data = new Date();
    var hours = addZero(data.getHours());
    var minutes = addZero(data.getMinutes());
    var time = hours +':'+ minutes;
    newMessage.find(".message-time").text(time);

    $(".contenitore-messaggi.active").append(newMessage);
    setTimeout(sendResponse, 3000);
  }
}

//FUNZIONE RISPOSTA AUTOMATICA
 function sendResponse() {
   var messageResponse = $(".template .messaggio-interlocutore").clone();
   messageResponse.find(".message-left").text("ok");
   $(".contenitore-messaggi.active").append(messageResponse);
 }

//FUNZIONE FILTRO DI RICERCA
function filter () {
  var filterValue, input, ul,li,span,i;
  input = document.getElementById('ricerca');
  filterValue = input.value.toUpperCase();
  ul = document.getElementById('contatti');
  li = ul.getElementsByTagName('li');

  for (i = 0; i < li.length; i++) {
    var span = li[i].getElementsByTagName('span')[0];
    if(span.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.display = "";
    }else {
      li[i].style.display = "none";
    }
  }
}

// FUNZIONE CHE AGGIUNGE ZERO
function addZero(number) {
  if(number < 10) {
    number = '0' + number;
  }
  return number;
}
