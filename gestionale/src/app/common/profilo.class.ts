import { FormBuilder, Validators } from '@angular/forms';

export class Profilo {
  nome: string = '';
  nazionalita: string = '';
  genere: string = '';
  anno_nascita: string = '';
  telefono: string = '';
  citta: string = '';
  indirizzo: string = '';
  email: string = '';
  anno_arrivo: string = '';
  codizioni_sfr: string = '';
  lavorato: string = '';
  altre_uds: string = '';
  localita: string = '';
  zona_op: string = '';
  luogo_op: string = '';
  fascia_op: string = '';

  fb: FormBuilder = new FormBuilder();

  update(newData: any) {
    this.nome = newData.nome;
    this.nazionalita = newData.nazionalita;
    this.genere = newData.genere;
    this.anno_nascita = newData.anno_nascita;
    this.telefono = newData.telefono;
    this.citta = newData.citta;
    this.indirizzo = newData.indirizzo;
    this.email = newData.email;
    this.anno_arrivo = newData.anno_arrivo;
    this.codizioni_sfr = newData.codizioni_sfr;
    this.lavorato = newData.lavorato;
    this.altre_uds = newData.altre_uds;
    this.localita = newData.localita;
    this.zona_op = newData.zona_op;
    this.luogo_op = newData.luogo_op;
    this.fascia_op = newData.fascia_op;
    this.profiloList.push(newData);
  }

  createForm() {
    return this.fb.group({
      nome: [this.nome],
        nazionalita: [this.nazionalita],
        genere: [this.genere],
        anno_nascita: [this.anno_nascita],
        telefono: [this.telefono],
        citta: [this.citta],
        indirizzo: [this.indirizzo],
        email: [this.email],
        anno_arrivo: [this.anno_arrivo],
        codizioni_sfr: [this.codizioni_sfr],
        lavorato: [this.lavorato],
        altre_uds: [this.altre_uds],
        localita: [this.localita],
        zona_op: [this.zona_op],
        luogo_op: [this.luogo_op],
        fascia_op: [this.fascia_op],
    });
  }

  saveToLocalStorage() {
    localStorage.setItem('profiloList', JSON.stringify(this.profiloList));
  }

  profiloList: any[] = [];

  loadFromLocalStorage() {
    let storedData = localStorage.getItem('profiloList');
    if (storedData) {
      this.profiloList = JSON.parse(storedData);
    }
  }
}
