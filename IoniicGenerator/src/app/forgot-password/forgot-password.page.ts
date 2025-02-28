import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormControl } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton]
})
export class ForgotPasswordPage implements OnInit {

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

