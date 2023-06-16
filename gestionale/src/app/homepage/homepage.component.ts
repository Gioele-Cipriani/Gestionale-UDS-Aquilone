import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Profilo } from '../common/profilo.class';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  showDiv = {
    previous : false
  }

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
}
