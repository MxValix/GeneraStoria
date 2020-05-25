
$( "form" ).submit(function( event ) {
    const luoghi = ["Napoli", "Roma", "Milano"];
    let randLuogo = Math.floor(Math.random()*3);
    let luogoRandom = luoghi[randLuogo];

    const persone = ["Aldo", "Giovanni", "Giacomo"];
    let randPersona = Math.floor(Math.random()*3);
    let personaRandom = persone[randPersona];
    let gradi = "95 gradi Fahrenheit";
    let inputValue = $( "input" ).val();
    let radioValue = $('form input[type=radio]:checked').val();

    if ( inputValue.length === 0) {
       protagonista = personaRandom;
        
    }
    else protagonista = inputValue;
    if (radioValue == "uk") gradi = "35 gradi Celsius";


    let storia = "C'erano " + gradi + " quando " + protagonista + " uscì per una passeggiata al centro di " + luogoRandom;

    $( "p" ).text(storia);
    event.preventDefault();

});
