// 1. Pobierz wszystkie niezbędne elementy HTML, takie jak: input, miejsce na pole i obwód, przycisk.
/* 2. Napisz funkcję pozwalającją na obliczenie obwodu kwadaratu, pamiętaj aby:
    - funkcja pobierała aktualną wartośc boku
    - funkcja obliczała obwód
    - przypisywała obwód do elementu HTML
    - zwracała obwód
    - była zabezpieczona przed wartością pustą, jak i ujemnymi bokami
    - zwracała null jeżeli bok będzie pusty lub ujemny
*/
// 3. Utworzoną funkcję połącz z przyciskiem za pomocą zdarzenia (klikniecie).

/* 4. Utwórz funkcję umożliwiającą obliczenie pola kwadratu, pamiętaj:
    - funkcja powinna pobierać aktualną wartość boku
    - obliczać pole kwadratu
    - być zabezpieczona przed wartościami ujemnymi jak i pustym inputem
    - zwracać pole kwadratu, jeżeli wartość zostanie obliczona
    - zwracać null, jeżeli pole nie zostanie obliczone
*/
// 5. utworzoną funkcję połącz z polem input za pomocą zdarzenia wywołującego się w trakcie wprowadzania wartości do inputa. 



/*                                 DODATKOWE                                   */

// Utwórz funkcjonalość, która bedzie rysowała kwadrat po wprowadzeniu boku kwadratu.

// Podpowiedzi: 

/* 
    1. Utwórz funkcję odpowiedzialną za tworzenie kwadratu, pamiętaj aby:
        - funkcja zawsze tworzyła nowy kwadrat,
        - nowy kwadrat powinien posiadać przypisaną klasę "obiekt"
        - nowy kwadrat musi mieć długość i szerokość równą wprowadzonej wartości
        - pamiętaj aby nowy kwadrat został dodany do diva z klasą "kontener",
        - po utworzeniu kwadratu, zwróc nowy kwadrat,
        - zabezpiecz funkcję, aby nie tworzyła kwadratu dla wartości pusty i ujemnych

    2. Utworzona funkcja powinna usuwać stary kwadrat, tak aby w trakcie wprowadzania nowej wartości do inputa, pojawiał się tylko jeden kwadrat.

    3. Utworzona funkcja powinna zostać podłączona do zdarzenia odpowiadającego za przechytywanie wartości "inputa" w trakcie wpisywania w nim wartości.

*/

let L = document.querySelector(".obwod");
let P = document.querySelector(".pole");
let btn = document.querySelector("button");
let dlugosc = document.querySelector("input[name='a']");

function obl_obw(){
    if(dlugosc.value != "" && dlugosc.value > 0){
        L.textContent = 4*Number(dlugosc.value);
    }
    else{
        alert("Blok jest pusty lub ujemny");
    }
   
}
dlugosc.addEventListener("input", obl_pola);
function obl_pola(e){
    dlugosc.value = e.target.value;
    if(dlugosc.value != "" && dlugosc.value > 0){
        P.textContent = Number(dlugosc.value)**2; 
    }
    else{
        return null;
    }
}

