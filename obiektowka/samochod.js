class samochod{
    constructor(marka, model, cena, rocznik,spalanie){
        this.marka = marka;
        this.model = model;
        this.cena = cena;
        this.rocznik = rocznik;
        this.spalanie = spalanie;
    }
    wiek(){
        let data = new Date();
        let rok = data.getFullYear();
        let wiek = rok - this.rocznik;
        return wiek;
    }
    koszt(cenaPaliwa){
        return cenaPaliwa * this.spalanie;
    }

}