class komis{
    constructor(nazwa){
        this.nazwa = nazwa;
        this.samochody = [];
    }
    dodaj(auto){
        this.samochody.push(auto);
    }
    usun(){

    }
    wyswietl(){
        let wynik =''
        this.samochody.forEach(samochod => {
            wynik += `
            <ul>
                <li>${samochod.marka} ${samochod.model}</li>
            </ul>
            `;
        });
        return wynik;
    }
}