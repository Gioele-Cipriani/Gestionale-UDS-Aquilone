import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Profilo } from '../common/profilo.class';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HomepageComponent {
  showDiv = {
    previous: false,
  };

  profilo: Profilo = new Profilo();
  fp!: FormGroup;

  ngOnInit() {
    this.profilo.loadFromLocalStorage();
    this.fp = this.profilo.createForm();
  }

  save() {
    console.log(this.fp.value);
    this.profilo.update(this.fp.value);
    this.profilo.saveToLocalStorage();
  }

  genere: string | undefined;
  opzioniGenere: string[] = [
    'Maschio',
    'Femmina',
    'Trans',
    'Trav',
    'Non Definito',
  ];

  sfruttamento: string | undefined;
  opzioniSfruttamento: string[] = ['Sfruttamento', 'Non Sfruttamento'];
}
