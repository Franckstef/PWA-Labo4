import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title: string = "Mon convertisseur";
  tabs : any = [{label: "Devises", link: "/devises"}, {label: "Temperatures", link: "/temperature"}];
}
