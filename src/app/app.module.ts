import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { OtherComponent } from './other.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [BrowserModule, FormsModule, StoreModule.forRoot({})],
  declarations: [AppComponent, OtherComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
