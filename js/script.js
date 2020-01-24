$(document).ready (function(){
  $("#invia").click(function (){
    sendMessage();
  });
});


function sendMessage() {
  var textMessage = $("input.inserimento").val();
  console.log(textMessage);
  if (textMessage.length != 0) {
    var newMessage = $(".template .messaggio-utente").clone();
    console.log(newMessage);
    newMessage.find(".messaggio-verde").text(textMessage);
    $("#chat").append(newMessage);
  }
}
