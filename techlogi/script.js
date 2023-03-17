//zad.1
// 1. Znajdź pole trójkąta, w którym długości trzech jego boków wynoszą 5, 6, 7.
// const a = 5; 
// const b = 6;
// const c = 7;
// let z;

// const p = (a+b+c)/2

// z = Math.sqrt(p*(p-a)*(p-b)*(p-c))
// console.log("Pole trojkata wynosi: " +z)\


// zad.2
// 2. Napisz program w JavaScript, który obliczy różnicę między podaną liczbą a liczbą 13, jeśli liczba jest większa niż 13, zwróci podwójną różnicę (bezwzględną).
// let a, b;
// b= prompt("Podaj liczbę" )
// if(13>b){
//     a=13-b;
//     alert("Oto twoja liczba "+a);
// }
// else{
// a=(b-13)*2;
//     alert("Oto twoja liczba "+a);
// }


//zad.3
// 3. Napisz program w JavaScript, który obliczy sumę dwóch podanych liczb całkowitych. Jeśli dwie wartości są takie same, funkcja zwraca potrójną ich sumę.
// let a, b, c;
// a = Number(prompt("Podaj liczbe nr.1" ));
// b = Number(prompt("Podaj liczbe nr.2"));
// function suma(){
//     if(a==b){
//         c=(a+b)*3;
//         alert("Twoje liczby byly rowne wiec obliczylem potrojna sume: " + c);
//     }
//     else{
//         c=a+b;
//         alert("Suma dwoch liczb:  " + c)
//     }
// }
// suma();


//zad.4
// 4. Napisz program w języku JavaScript, obliczający mnożenie i dzielenie dwóch liczb. (Dane powinny być podane przez użytkownika). (Zabezpiecz program przed wartością zerową.)
// let a,b,c;
// a = Number(prompt("Podaj liczbe nr.1" ));
// b = Number(prompt("Podaj liczbe nr.2"));
// if(a==0 || b==0){
//     console.error("Przez zero nie podzielisz");
// }
// else{
//     c=a*b;
//     alert("Wynik mnozenia to: " + c);
//     c=a/b;
//     alert("Wynik dzielenia to: " + c);
//


//zad.5
// 5. Napisz program w JavaScript, który sprawdzi dwie podane liczby i zwróci wartość true, jeśli jedna z nich to 50 lub ich suma wynosi 50.
// let a, b;
// a = Number(prompt("Podaj liczbe nr.1" ));
// b = Number(prompt("Podaj liczbe nr.2"));
// function sprawdzanie(){
//     if(a==50 || b==50 || a+b==50){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(sprawdzanie());


//zad.6
// 6. Napisz program w JavaScript, który sprawdza na podstawie dwóch podanych liczb całkowitych, czy jedna jest dodatnia, a druga ujemna.
// let a, b;
// a = Number(prompt("Podaj liczbe nr.1" ));
// b = Number(prompt("Podaj liczbe nr.2"));
// function dodatniaczy(){
//     if(a>0 && b<0 || a<0 && b>0){ 
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(dodatniaczy());


//zad.7
// 7. Napisz program w JavaScript, sprawdzający trzy podane liczby. Jeżeli dwie z podanych liczb są takie same, zwróć trzecią. Jeżeli wszystkie są różne, zwróć komunikat "brak dwóch równych liczb";
// let a, b, c;
// a = Number(prompt("Podaj liczbe nr.1" ));
// b = Number(prompt("Podaj liczbe nr.2"));
// c =  Number(prompt("Podaj liczbe nr.3"));
// if(a==b){
//     alert(c);
// }
// else if(b==c){
//     alert(a);
// }
// else if(a==c){
//     alert(b)
// }
// else{
//     alert("Brak dwoch rownych liczb");
// }


//zad.8
// 8. Napisz program w JavaScript, który znajdzie największą z trzech podanych liczb całkowitych.
// let a, b, c;
// a = Number(prompt("Podaj liczbe nr.1" ));
// b = Number(prompt("Podaj liczbe nr.2"));
// c =  Number(prompt("Podaj liczbe nr.3"));
// if(a>b && a>c){
//     alert("Najwieksza jest liczba nr.1: " + a);
// }
// else if(b>a && b>a){
//     alert("Najwieksza jest liczba nr.2: " + b);
// }
// else{
//     alert("Najwieksza jest liczba nr.3: " +c);
// }


//zad.9
// 9. Napisz program w JavaScript, który akceptuje dwie liczby całkowite i wyświetla większą. (zastosuj prompt() w celu wprowadzenia liczb do programu).
// let a, b;
// a = Number(prompt("Podaj liczbe nr.1" ));
// b = Number(prompt("Podaj liczbe nr.2"));
// if(a>b){
//     alert("Liczba nr.1 jest najwieksza")
// }
// else if(b>a){
//     alert("Liczba nr.2 jest najwieksza")
// }
// else{
//     alert("Oba są równe")
// }


//zad.10
// 10. Napisz program w JavaScript, który będzie iterować od 0 do 15. Dla każdej iteracji niech sprawdza czy liczba jest parzysta, czy nieparzysta, oraz wyświetla komunikat. 
// for(let i = 0;  i <= 15; i++){
//     if(i%2==0){
//         console.log("Liczby parzyste: " + i)
//     }
//     else{
//         console.log("Liczby nieparzyste: " + i)
//     }
// }


//zad.11
// 11. Napisz program w JavaScript, który iteruje liczby całkowite od 1 do 100. Dla każdej liczby która jest wielokrotnością liczby 3, niech wypisze obok liczby, słowo "Fizz". Dla liczby która jest wielokrotnością liczby 5, wypisze słowo: "Buzz". Jeżeli liczba jest wielokrtnością liczby 3 i 5, należy wyświetlić słowo "FizzBuzz". Dla każdej innej liczby, należy wyświetlić bieżącą liczbę.


//zad.12
// 12. Napisz program, który zsumuje liczby będące wielokrotnościami liczb 3 lub 5, wśród wszystkich liczb całkowitych poniżej 1000.


//zad.13
// 13. Napisz program sprawdzający, czy podana wartość jest tablicą. 


//zad.14
// 14. Napisz program zwracający pierwszy element tablicy. Program powinien umożliwiać wprowadzenie zmiennej, dzięki której zostanie zwrócone "n", elementów tablicy.


//zad.15
// 15. Napisz program w JavaScript, który wypisze elementy poniższej tablicy w formacie podanym poniżej.


//zad.16
// 16. Napisz program w JavaScript, który znajdzie sumę kwadratów wektora liczbowego.


//zad.17
// 17. Napisz program w JS, czyszczący tablicę z pustych wartości takich jak: 'null', '0', "", 'false', 'undefined', 'NaN'.


//zad.18
// 18. (Dodatkowe). Napisz program w JavaScript, który przyjmuje liczbę jako dane wejściowe i wstawia kreski (-) między każdą z dwóch liczb parzystych.


//zad.19
// 19. Napisz funkcję JavaScript, która przyjmuje liczbę jako parametr i sprawdza, czy liczba jest liczbą pierwszą, czy nie


//zad.20
// 20. Napisz funkcję JavaScript, która zwraca elementy tablicy większe lub równe niż podana przez użytkownika liczba.