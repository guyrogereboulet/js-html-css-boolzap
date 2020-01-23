$(document).ready(
  function () {
    $("#invia").click(
      function (){
        var text = $(".inserimento").val();
        console.log(text);
        var elementNew = $(".messaggio-verde").clone();
        elementNew.append(text);
        $(".messaggio-utente").append(elementNew);

    });



});
