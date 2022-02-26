import { Component, Input, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { ConversionService } from 'src/app/services/conversion.service';

@Component({
  selector: 'app-devises',
  templateUrl: './devises.component.html',
  styleUrls: ['./devises.component.css']
})
export class DevisesComponent implements OnInit {

  euro: number = 0;
  dollar: number = 0;

  constructor(private conversionService: ConversionService) { }

  ngOnInit(): void {
  }

  euroEnDollar(){
    this.dollar = this.conversionService.euroEnDollar(this.euro);
  }

  dollarEnEuro(){ 
    this.euro = this.conversionService.dollarEnEuro(this.dollar);
  }

}
