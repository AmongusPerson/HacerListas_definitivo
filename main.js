var array=[];

function submit (){
    for (var numerica=1; numerica<=4; numerica++){
        var nombreELmento=document.getElementById("elemento"+numerica).value;
        array.push(nombreELmento);
    }
    var longitud=array.length;
    document.getElementById("longitud1").innerHTML="(hay "+longitud+" elementos)";
    document.getElementById("resultado").innerHTML=array;
}
