import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { PersonalCardComponent } from '../share/components/personal-card/personal-card.component';
import { NombreAbreviadoPipe } from '../nombre-abreviado.pipe';
import { ShareModule } from '../share/share.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ShareModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
