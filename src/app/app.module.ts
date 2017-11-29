import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { WebScoketComponent } from './web-scoket/web-scoket.component';
import { WebSocketService } from './shared/web-socket.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule  
  ],
  declarations: [AppComponent, ProductComponent, WebScoketComponent],
  providers: [WebSocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
