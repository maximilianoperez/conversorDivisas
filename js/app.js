let ars = document.getElementById('ars');
let usd = 96.33
let eu = 113.63
let real = 18.57


document.querySelector('#usd').innerHTML = 'USD : '+usd;
document.querySelector('#eu').innerHTML = 'EURO : '+eu;
document.querySelector('#real').innerHTML = 'REAL : '+real;

function convertir(){
    if(ars.value > 0){
       var result = ars.value/usd
       var resultUsd = document.querySelector('#mostrarUsd').innerHTML = 'USD : ' +result.toFixed(2);

       result = ars.value/eu
       var resultEu = document.querySelector('#mostrarEu').innerHTML = 'EUROS : ' +result.toFixed(2);

       result = ars.value/real
       var resultReal = document.querySelector('#mostrarReal').innerHTML = 'REAIS : ' +result.toFixed(2);
       
    }
}
