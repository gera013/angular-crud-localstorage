import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TaskAddComponent } from './components/task-add/task-add.component';
import { TaksListComponent } from './components/taks-list/taks-list.component';
import { TaksComponent } from './components/taks/taks.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TaskAddComponent,
    TaksListComponent,
    TaksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
