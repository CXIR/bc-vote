import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CandidatsComponent } from './candidats/candidats.component';

const routes : Routes = [
    { path : 'candidats', component : CandidatsComponent }
];

@NgModule({
  imports : [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
