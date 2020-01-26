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


function filter () {
  var filterValue, input, ul ,li, i;
  input = document.getElementById('ricerca');
  filterValue = input.value.toUpperCase();
  ul = document.getElementById('contatti');
  li = ul.getElementsByTagName('li');

  for (var i = 0; i < li.length; i++) {
    var a = li[i].getElementsByTagName('p') [0];
    if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.direction = "";
    }else {
      li[i].style.display = "none";
    }
  }
}
