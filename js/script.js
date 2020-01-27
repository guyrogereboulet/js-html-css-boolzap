$(document).ready (function(){
  $("#invia").click(function (){
    sendMessage();
  });
});


//FUNZIONE INVIO MESSAGGI
function sendMessage() {
  var textMessage = $("input.inserimento").val();
  console.log(textMessage);
  if (textMessage.length != 0) {
    var newMessage = $(".template .messaggio-utente").clone();
    console.log(newMessage);
    newMessage.find(".message-left").text(textMessage);
    $("#chat").append(newMessage);
  }
}

//FUNZIONE RISPOSTA AUTOMATICA
// ●	Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

setTimeout(myFunction, 3000);
 function myFunction() {
 // alert('Hello');
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
