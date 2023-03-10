var vrsta_ocene=ustna;
function dodaj_oceno_ustno(){
    const grade_input = document.getElementById("grade_input");
    const ocena = grade_input.value;
    var grade_display = document.createElement('grade_display');
    var row = table.insertRow;
    var ustno = row.insertCell(0);
    var pisno = row.insertCell(0);
    var tabla = row.insertCell(0);
    ustno.innerHTML = ocena;
    ustno.innerHTML = ocena;
    ustno.innerHTML = ocena;
    grade_input.value = "";
    
}


function ustni_vnos(){
    vrsta_ocene=ustna;
}
function pisni_vnos(){
    vrsta_ocene=pisno;
}
function tabla_vnos(){
    vrsta_ocene=tabla;
}


