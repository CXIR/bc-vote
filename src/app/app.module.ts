import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CandidatsComponent } from './candidats/candidats.component';
import { AppRoutingModule } from './/app-routing.module';
import { VoteComponent } from './vote/vote.component';
import { CandidatDetailComponent } from './candidat-detail/candidat-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidatsComponent,
    VoteComponent,
    CandidatDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
