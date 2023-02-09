import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchPipe } from './search.pipe'
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { TagComponent } from './tag/tag.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodPageComponent } from './food-page/food-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MenComponent,
    WomenComponent,
    KidsComponent,
    HeaderComponent,
    HomeComponent,
    SearchPipe,
    SearchComponent,
    TagComponent,
    CartPageComponent,
    FoodPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ToastrModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
