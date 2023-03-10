let vrsta_ocene = 0;
let ocene_pisne = [];
let ocene_ustne = [];
let ocene_tabla = [];



/*
function dodaj_oceno(){
    const grade_input = document.getElementById("grade_input");
    var grade_display = document.createElement('grade_display');
    var grade_display = document.createElement('povprecje');
    const ocena = grade_input.value;
    var row = grade_display.insertRow();
    var ustno = row.insertCell(0);
    ustno.innerHTML = ocena;
    
    switch (vrsta_ocene) {
        case ustna:
            var ustno = row.insertCell(0);
            ustno.innerHTML = ocena;
            break;
        case pisna:
            var pisno = row.insertCell(1);
            pisno.innerHTML = ocena;
            break;
        case tabla:
            var tabla = row.insertCell(2);
            tabla.innerHTML = ocena;
            break;
    
      }


    grade_input.value = "";

    
    
}
*/


function dodaj_oceno(){
    var grade_input = document.getElementById("grade_input");
    var grade_display = document.getElementById("grade_display");
    const ocena = grade_input.value;


    if (ocena <6 && ocena >0 && ocena != ""){
        switch (vrsta_ocene) {
            case 0:
                ocene_ustne.push(ocena);            
                break;
            case 1:
                ocene_pisne.push(ocena);
                break;
            case 2:
                ocene_tabla.push(ocena);
                break;
        
        }
    }
    prikazi_ocene();
    grade_input.value = "";



}

function prikazi_ocene(){
    const grade_input = document.getElementById("grade_input");
    var grade_display = document.createElement('grade_display');
    const table = document.querySelector('table');    
    //poišče najdaljši seznam
    const numbers = [];
    numbers.push(ocene_pisne.length);
    numbers.push(ocene_ustne.length);
    numbers.push(ocene_tabla.length);
    let maxNumber = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
    }
    }
//izbrisi tabelo
    for (let i = 0; i < maxNumber; i++) {
        const numRows = table.rows.length;
        if (numRows>1){
            var row = table.deleteRow([1]);
        } 
        else{
            break;
        }
    }

//naprintaj tabelo
    for (let i = 0; i < maxNumber; i++) {

        const row = table.insertRow();
        const cell1 = row.insertCell([0]);
        cell1.textContent = ocene_ustne[i];
      
        const cell2 = row.insertCell([1]);
        cell2.textContent = ocene_pisne[i];
      
        const cell3 = row.insertCell([2]);
        cell3.textContent = ocene_tabla[i];
      }
}



function ustni_vnos(){
    vrsta_ocene=0;
}
function pisni_vnos(){
    vrsta_ocene=1;
}
function tabla_vnos(){
    vrsta_ocene=2;
}


