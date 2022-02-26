import { Component, OnInit } from '@angular/core';
import { ConversionService } from 'src/app/services/conversion.service';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {

  celcius: number = 0;
  fahren: number = 0;

  constructor(private conversionService: ConversionService) { }

  ngOnInit(): void {
  }

  celciusEnFahren(){
    this.fahren = this.conversionService.celciusEnFahren(this.celcius);
  }

  fahrenEnCelcius(){ 
    this.celcius = this.conversionService.fahrenEnCelcius(this.fahren);
  }

}