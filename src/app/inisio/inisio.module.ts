import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InisioPageRoutingModule } from './inisio-routing.module';

import { InisioPage } from './inisio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InisioPageRoutingModule
  ],
  declarations: [InisioPage]
})
export class InisioPageModule {}
