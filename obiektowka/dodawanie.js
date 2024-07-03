class dodaj{
    constructor(nazwa){
        this.nazwa = nazwa;
        this.kontakty = [];
    }
    add(tel){
        this.kontakty.push(tel);
    }
    del(tel1){
        this.kontakty.splice(tel1);
    }
    wyswietl(){
        let wynik =''
        this.kontakty.forEach(kontakt => {
            wynik += `
            <ul>
                <li>${kontakt.imie} ${kontakt.nazwisko} ${kontakt.nr_telefonu}</li>
            </ul>
            `;
        });
        return wynik;
    }
}