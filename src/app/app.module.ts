import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { DirecionamentoComponent } from './direcionamento/direcionamento.component';
import { RouterModule } from '@angular/router';
import { ServiconaolocComponent } from './serviconaoloc/serviconaoloc.component';
import { FlowrnComponent } from './flowrn/flowrn.component';
import { FinanceiroinfoComponent } from './financeiroinfo/financeiroinfo.component';
import { FinanceiroboletoComponent } from './financeiroboleto/financeiroboleto.component';

@NgModule({
  declarations: [
    AppComponent,
    AgendamentoComponent,
    DirecionamentoComponent,
    ServiconaolocComponent,
    FlowrnComponent,
    FinanceiroinfoComponent,
    FinanceiroboletoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'agendamento', component: AgendamentoComponent},
      {path: 'direcionamento', component: DirecionamentoComponent},
      {path: 'serviconaolocalizado', component: ServiconaolocComponent},
      {path: 'flowrn', component: FlowrnComponent},
      {path: 'financeiroinfo', component: FinanceiroinfoComponent},
      {path: 'financeiroboleto', component: FinanceiroboletoComponent},
      {path: '', redirectTo: '/agendamento', pathMatch: 'full'},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
