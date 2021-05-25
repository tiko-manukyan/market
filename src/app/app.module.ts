import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './header/search/search.component';
import { AccountLinksComponent } from './header/account-links/account-links.component';
import { NavComponent } from './header/nav/nav.component';
import { CenralContentComponent } from './cenral-content/cenral-content.component';
import { MainShopListComponent } from './main-shop-list/main-shop-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    AccountLinksComponent,
    NavComponent,
    CenralContentComponent,
    MainShopListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
