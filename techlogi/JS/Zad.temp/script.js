//1. Utwórz program przeliczający stopnie Fahrenheita na stopnie Kelvina i Celsjusza.
//2. Rozpocznij od pobrania najważniejszych elementów HTML za pomocą querySelector.
//3. Utwórz funkcję zamieniającą stopnie fahrenheita na kelvia, pamiętaj aby:
    //- funkcja była zabezpieczona przed pustą wartością (brak liczby w inpucie)
    //- funkcja zwracała wartość zaokrągloną do dwóch miejsc po przecinku
    //- funkcja obliczaną wartoość wprowadzała do pola "#tempKel".
//4. Funkcja powinna zostać połączona ze zdarzeniem kliknięcia, uruchamianym po naciśnięciu na przycisk.
//5. Utwórz funkcję zamieniającą stopnie fahrenheita na celsjusza, pamiętaj aby:
    //- funkcja pobierała wartościa z inputa w trakcie pisania
    //- funkcja była zabezpieczona przed wartością pustą (brak liczby w input)
    //- obliczana wartością przypisywała do inputa o nazwie celsjusz
//6. Utworzoną funkcję połącz ze zdarzeniem "input", wywoływanym na inpucie o nazwie fahrenheit.

let F = document.querySelector("input[name='fahrenheit']");
let C = document.querySelector("input[name='celsjusz']");
let button = document.querySelector("button");
let wynik = document.querySelector("#tempKel");
function far_on_kel(){
    if(F.value != ""){
        wynik.textContent = ((Number(F.value)+459.67)*5/9) .toFixed(2);

    }
    else{
        alert("Nie mozna obliczyc pustego pola");
    }
   // Math.round
  // .toFixed

};
F.addEventListener("input", updateValue);
function updateValue(e){
    C.value = e.target.value;
    if(F.value != ""){
        C.value = ((Number(F.value)-32)/1.8).toFixed(2);
    }
    else{
        C.value =""
    }
};
C.addEventListener("input", updateValue2);
function updateValue2(e){
    F.value = e.target.value
    if(C.value != ""){
        F.value = ((Number(C.value)*9/5)+32).toFixed(2);
    }
    else{
        F.value ="";
    }
};


