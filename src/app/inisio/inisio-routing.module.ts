import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InisioPage } from './inisio.page';

const routes: Routes = [
  {
    path: '',
    component: InisioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InisioPageRoutingModule {}
