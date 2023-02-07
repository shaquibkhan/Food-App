import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {path: 'header', component: HeaderComponent},
  {path: '', component: HomeComponent},
  {path: 'search/:searchItem', component: HomeComponent}
  // {path: 'men', component: MenComponent},
  // {path: 'women', component: WomenComponent},
  // {path: 'kids', component: KidsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
