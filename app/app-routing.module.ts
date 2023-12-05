import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedComponent } from './logged/logged.component';
import { MainViewComponent } from './main-view/main-view.component';
import { ResultsComponent } from './results/results.component';
import { VisitorComponent } from './visitor/visitor.component';

const routes: Routes = [
  {path: '', component: VisitorComponent},
  {path: 'logged', component: LoggedComponent},
  {path: 'main', component: MainViewComponent},
  {path: 'results', component: ResultsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
