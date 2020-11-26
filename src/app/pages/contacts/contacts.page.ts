import { Component, OnInit } from '@angular/core';

// 22.1) Importa dependências
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageMap } from '@ngx-pwa/local-storage';
import { DatePipe } from '@angular/common';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  // 22.3) Atributos
  contactForm: FormGroup;
  userProfile: any;
  pipe = new DatePipe('en_US');

  constructor(

    // 22.2) Injeta dependências
    public form: FormBuilder,
    public storage: StorageMap,
    public fbStore: AngularFirestore,
    public alert: AlertController
  ) { }

  // 22.4) Inclua 'void' no 'OnInit'
  ngOnInit(): void {

    // 22.5) Obtém dados do perfil. Se existir, preenche formulário automaticamente.
    this.storage.get('userProfile', { type: 'string' }).subscribe(
      (pData) => {
        if (pData) {
          this.userProfile = JSON.parse(pData);
          this.contactForm.controls.uid.setValue(this.userProfile.uid);
          this.contactForm.controls.name.setValue(this.userProfile.name);
          this.contactForm.controls.email.setValue(this.userProfile.email);
        }
      }
    );

    // 22.6) Cria formulário reativo
    this.contactFormCreate();
  }

  // 22.7) Cria formulário reativo
  contactFormCreate() {
    this.contactForm = this.form.group({
      date: [''],
      uid: [''],
      name: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ])
      ],
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.email
        ])
      ],
      subject: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ])
      ],
      message: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ])
      ]
    });
  }

  // 22.8) Processa envio do contato
  contactSend() {

    // Formata documento
    this.contactForm.controls.date.setValue(this.pipe.transform(Date.now(), 'yyyy-MM-dd hh:mm:ss').trim());

    // Salva documento no Firestore
    this.fbStore.collection('contacts').add(this.contactForm.value).then(() => {

      // Exibe feedback
      this.contactConfirm();

      // Em caso de erro, gera log
    }).catch((error) => { console.error(error); });
  }

  // 22.9) Exibe feedback
  async contactConfirm() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Contato Enviado',
      message: 'Seu contato foi enviado com sucesso!<br><br>Obrigado...',
      buttons: [{
        text: 'Ok',
        handler: () => {

          // Reinicia formulário
          this.contactForm.reset({
            uid: this.contactForm.value.uid.trim(),
            name: this.contactForm.value.name.trim(),
            email: this.contactForm.value.email.trim(),
            subject: '',
            message: ''
          });
        }
      }]
    });
    await alert.present();
  }
}
