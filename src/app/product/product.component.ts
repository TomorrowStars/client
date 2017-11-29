import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Observable<any>;
  // products: Array<any> = [];

  constructor(private http: Http) {

    this.products = http.get('/api/products')
    .map((res) => res.json());
   }

  ngOnInit() {
    // this.datasource.subscribe((data) => this.products = data);
  }

}
