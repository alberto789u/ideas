import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormControl } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton]
})
export class CreateAccountPage implements OnInit {

  constructor() { }
  email = new FormControl('');
  password = new FormControl('');

  registerPassword(){
    if(this.password.value)
      {
        alert('Contraseña registrada');
      } else {
      alert('Ingrese contraseña');
    }
  }

  registerEmail(){
    if(this.email.value)
      {
        alert('Email registrado');
      } else {
      alert('Ingrese email');
    }
  }

  ngOnInit() {
  }

}
