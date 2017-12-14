import { SummaryComponent } from './components/summary/summary.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: ":province", children: [
    {path: ":language", children: [

      {path: "summary", component: SummaryComponent},
      { path: "**", redirectTo: "summary", pathMatch: 'full'}
      
    ]},
    { path: "**", redirectTo: ":language", pathMatch: 'full' }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
