let vrsta_ocene = 0;
var ocena = 0;
let ocene_pisne = [];
let ocene_ustne = [];
let ocene_tabla = [];



function dodaj_oceno(){
    var grade_input = document.getElementById("grade_input");
    var grade_display = document.getElementById("grade_display");



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


function set_ocena_1(){
    ocena = 1;
    dodaj_oceno();

}

function set_ocena_2(){
    ocena = 2;
    dodaj_oceno();
}

function set_ocena_3(){
    ocena = 3;
    dodaj_oceno();
}

function set_ocena_4(){
    ocena = 4;
    dodaj_oceno();
}

function set_ocena_5(){
    ocena = 5;
    dodaj_oceno();
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

function sumArrays(arr1, arr2, arr3) {
    let sum = 0;
  
    for (let i = 0; i < arr1.length; i++) {
      sum += arr1[i];
    }
  
    for (let i = 0; i < arr2.length; i++) {
      sum += arr2[i];
    }
  
    for (let i = 0; i < arr3.length; i++) {
      sum += arr3[i];
    }
  
    return sum;
  }


function povprecje(){
    let sestevek_ocen = 0 = 0;
    let sestevek_ocen_s_tockami = 0;
    sestevek_ocen = ocene_pisne.length*6 + ocene_ustne.length*3 + ocene_tabla.length;
    

    for (i=0; i<ocene_pisne.length; i++){
        sestevek_ocen_s_tockami+=ocene_pisne[i]*6;
    }
    for (i=0; i<ocene_ustne.length; i++){
        sestevek_ocen_s_tockami+=ocene_ustne[i]*3;
    }
    for (i=0; i<ocene_tabla.length; i++){
        sestevek_ocen_s_tockami+=ocene_tabla[i];
    }
    console.log(sestevek_ocen_s_tockami);
    console.log(sestevek_ocen);
    let final_izracun = sestevek_ocen_s_tockami/sestevek_ocen;
    final_izracun = Math.round(final_izracun * 100) / 100;
    var povprecje_text=document.getElementById("povprecje");
    povprecje_text.innerHTML="   "+final_izracun;
    
}

function refreshPage() {
    location.reload();
  }
