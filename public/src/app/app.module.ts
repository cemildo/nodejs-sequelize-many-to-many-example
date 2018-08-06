import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app-home/app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppContentComponent } from './components/app-content/app-content.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { PersonCardComponent } from './components/person-card/person-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppContentComponent,
    AppFooterComponent,
    SideBarComponent,
    PersonCardComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports:[
    AppHeaderComponent,
    AppContentComponent,
    AppFooterComponent
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
