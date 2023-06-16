import { FormBuilder, Validators } from "@angular/forms";

export class Profilo {
    nome: string = '';
    cognome: string = '';
    email: string = '';
    password: string = '';

    fb: FormBuilder = new FormBuilder();

    update(newData: any) {
        this.nome = newData.nome;
        this.cognome = newData.cognome;
        this.email = newData.email;
        this.password = newData.password;
    }

    createForm() {
        return this.fb.group({
            nome: [this.nome],
            cognome: [this.cognome],
            email: [this.email, [Validators.required, Validators.email]],
            password: [this.password, [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
        })
    }

    saveToLocalStorage() {
        localStorage.setItem('new-profilo', JSON.stringify(this));
    }

    loadFromLocalStorage() {
        let tmp = localStorage.getItem('new-profilo');
        if (tmp) {
            let newData = JSON.parse(tmp);
            this.update(newData);
        }
    }
}
