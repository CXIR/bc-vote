import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CandidatsComponent } from './candidats/candidats.component';
import { CandidatDetailComponent } from './candidat-detail/candidat-detail.component';
import { VoteComponent } from './vote/vote.component';

const routes : Routes = [
    {
      path       : '',
      redirectTo : '/candidats',
      pathMatch  : 'full'
    },
    {
      path       : 'candidats',
      component  : CandidatsComponent
    },
    {
      path       : 'candidat/:id',
      component  : CandidatDetailComponent
    },
    {
      path       : 'vote',
      component  : VoteComponent
    },
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
