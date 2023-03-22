// 1. Pobierz niezbędne elementy HTML takie jak: kontener na zdjęcia i przycisk
// 2. Utwórz tablicę zawierającą nazwy zdjęć
/* 3. Utwórz funkcję której zadaniem będzie: 
    - losowanie dowolnej liczby z zakresu 0 - długość tablicy
    - do losowania użyj Math.random, pamiętaj o zaokrągleniu otrzymanej liczby
    - z tablicy pobierz dowolne zdjęcie z wykorzystaniem wylosowanej liczby
    - za pomocą stylu zmień tło kontenera na zdjęcia 
    - zwróć pobrane zdjęcie
*/
// 4. Podłącz funkcję za pomocą zdarzenia do przycisku

let kontener = document.querySelector(".photoContainer");
let btn = document.querySelector("button");


let tab = ['./photos/bird.jpg', './photos/brak.png', './photos/cat.jpg', './photos/crystal.jpg', './photos/desert.jpg', './photos/ice.jpg', './photos/sunset.jpg'];

let min = 0;
let max = tab.length - 1;

function get_random(){
    return  Math.floor(Math.random() * (max - min) + min);
}
btn.addEventListener('click', Zmiana_zdj)
function Zmiana_zdj(){
    kontener.style.backgroundImage = `url(${tab[get_random()]})`
}