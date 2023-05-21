//CALCULATING THE PRICE OF A TRAIN TIKET

//INSERT NAME END LASTNAME OF PASSENGER
let name_passenger = prompt ('Inserisci il nome del passeggero');
let last_name_passenger = prompt ("Inserisci il cognome del passeggero");

document.getElementById('hello_user').innerHTML += ` ${name_passenger} ${last_name_passenger}`;

//INSERT KM END AGE PASSENGER
let km_travel = prompt ('Inserisci i km da percorrere');
let age_passenger = prompt ("Inserisci l'età del passeggero");

document.getElementById('km_travel').innerHTML += ` ${km_travel}`;
document.getElementById('age_passenger').innerHTML += ` ${age_passenger}`;

//INSERT VARIABLE PRICING
let price_km = 0.21;
let price_minors = 0.21 / 5 * 4;
let price_over = 0.21 / 5 * 3;

//INSERT CONDITIONAL STATEMENT END CALCULATING THE PRICE
if (age_passenger <= 17){
document.getElementById('price_tiket').innerHTML += (km_travel * price_minors).toFixed(2);
}else if ((age_passenger >= 18) && (age_passenger < 65)){ 
    document.getElementById('price_tiket').innerHTML += (km_travel * price_km).toFixed(2);
}else if (age_passenger >= 65){
    document.getElementById('price_tiket').innerHTML += (km_travel * price_over).toFixed(2);
}