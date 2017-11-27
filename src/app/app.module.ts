import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule  
  ],
  declarations: [AppComponent, ProductComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
