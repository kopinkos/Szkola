//pobieramy formularz
let formularz = document.querySelector('form');

//pobieramy diva
let div_uzytkownicy = document.querySelector('div.uzytkownicy');

//tworzymy funkcje uzytkownicy
let uzytkownicy = function(e){
 e.preventDefault();

 //pobieramy wartosci pol z formularza
 let plec = document.querySelector('[name="plec"]').value;
 let ilosc = document.querySelector('[name="liczba_osob"]').value;
 let url = `https://randomuser.me/api/?results=${plec}&gender=${plec=='both' ? 'male,female' : plec}`;

 //AJAX
fetch(url)
    .then()
    .then()
    .catch();
};

// obsluga zdarzenia submit formularza
formularz.addEventListener('submit', uzytkownicy);