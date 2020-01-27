$(document).ready (function(){
  $("#invia").click(function (){
    sendMessage();
  });
  $("#contatti ul li").click(function(){
    console.log($(this).index());
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
    $("#chat").append(newMessage);
    setTimeout(sendResponse, 3000);
  }
}

//FUNZIONE RISPOSTA AUTOMATICA
 function sendResponse() {
   var messageResponse = $(".template .messaggio-interlocutore").clone();
   messageResponse.find(".message-left").text("ok");
   $("#chat").append(messageResponse);
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
