import { Component, OnInit, ViewEncapsulation, } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Profilo } from '../common/profilo.class';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HomepageComponent implements OnInit {
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

  nazionalita: string | undefined;
  opzioniNazionalita: string[] = ["Prova1", "Prova2", "Prova3"];

  sfruttamento: string | undefined;
  opzioniSfruttamento: string[] = ['Sfruttamento', 'Non Sfruttamento'];

  lavorato: string | undefined;
  opzioniLavorato: string[] = ['Sì', 'No'];

  altreUds: string | undefined;
  opzioniAltreUds: string[] = ['Sì', 'No'];

  zonaOperativa: string | undefined;
  opzioniZonaOperativa: string[] = ['Trento', 'Rovereto'];

  luogoOperativo: string | undefined;
  opzioniLuogoOperativo: string[] = ['Outdoor', 'Indoor', 'Entrambi'];

  fasciaOperativa: string | undefined;
  opzioniFasciaOperativa: string[] = ['Giorno', 'Notte', 'Entrambi'];
}
