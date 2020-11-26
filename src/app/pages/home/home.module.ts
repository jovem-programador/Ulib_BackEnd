import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';

// 20.1) Importa FontAwesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,

    // 20.2) Importa FontAwesome
    FontAwesomeModule,

    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule { }
