import { NgModule } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { PersonalCardComponent } from '../personal-card/personal-card.component';
import { NombreAbreviadoPipe } from '../nombre-abreviado.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, PersonalCardComponent, NombreAbreviadoPipe, UpperCasePipe]
})
export class HomePageModule {}
