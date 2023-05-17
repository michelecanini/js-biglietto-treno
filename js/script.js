//CALCULATING THE PRICE OF A TRAIN TIKET

let name_passenger = prompt ('Inserisci il nome del passeggero');
console.log (name_passenger);
let last_name_passenger = prompt ("Inserisci il cognome del passeggero");
console.log (last_name_passenger);

document.getElementById('hello_user').innerHTML += ` ${name_passenger} ${last_name_passenger}`;

let km_travel = prompt ('Inserisci i km da percorrere');
console.log (km_travel);
let age_passenger = prompt ("Inserisci l'età del passeggero");
console.log (age_passenger)

document.getElementById('km_travel').innerHTML += ` ${km_travel}`;
document.getElementById('age_passenger').innerHTML += ` ${age_passenger}`;

let price_km = 0.21;
console.log (price_km);
let price_minors = 0.21 / 5 * 4;
console.log (price_minors);
let price_over = 0.21 / 5 * 3;
console.log (price_over);

if (age_passenger <= 17){
document.getElementById('price_tiket').innerHTML += (km_travel * price_minors).toFixed(2);
console.log (km_travel * price_minors) ;

}else if ((age_passenger >= 18) && (age_passenger < 65)){ 
    document.getElementById('price_tiket').innerHTML += (km_travel * price_km).toFixed(2);
}else if (age_passenger >= 65){
    document.getElementById('price_tiket').innerHTML += (km_travel * price_over).toFixed(2);
}