import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConversionService {

  constructor() { }

  euroEnDollar(euro: number): number {
    let dollar = Math.round((euro * 1.43)*100)/100;
    return dollar;
  }
    
  dollarEnEuro(dollar: number): number { 
    let euro = Math.round((dollar / 1.43)*100)/100;
    return euro;
  }

  celciusEnFahren(celcius: number): number {
    let fahren = Math.round(((celcius * 9/5) + 32) * 100) / 100;
    return fahren;
  }

  fahrenEnCelcius(fahren: number): number {
    let celcius = Math.round(((fahren - 32) * 5/9) * 100) / 100;
    return celcius;
  }
  

}