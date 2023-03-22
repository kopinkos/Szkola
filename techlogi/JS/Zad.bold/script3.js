// 1. Pobierz niezbędne elementy: wszystkie znaczniki strong, i przycisk.
// 2. Utwórz funkcję, która będzie zmieniała kolor wszystkich elementów pogrubionych.
// 3. Utwórz funkcję, która będzie przywracała kolor wszystkich elementów pogrubionych.
// 4. Połącz pierwszą funkcję, ze zdarzeniem po najechaniu na przycisk.
// 5. Połącz drugą funkcję, ze zdarzeniem po zdjechaniu myszku z przycisku.

let btn = document.querySelector('button');
let stg = document.querySelectorAll('strong');
btn.addEventListener('mouseover', zmiana_koloru);
function zmiana_koloru(){
    stg.forEach(strong => {
        strong.style.color = "red";
        
    });
}
btn.addEventListener('mouseout', przywraca_kolor);
function przywraca_kolor(){
    stg.forEach(strong => {
        strong.style.color = "black";
    });
}