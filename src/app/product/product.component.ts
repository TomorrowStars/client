import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
// import { Headers } from '@angular/http/src/headers';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Observable<any>;
  // products: Array<any> = [];

  constructor(private http: Http) {
    let myHeaders:Headers = new Headers();
    myHeaders.append("Authorization", "Basic 123456");
    myHeaders.append("Authorization", "name 123456");
    myHeaders.append("Author", "age 123456");

    this.products = http.get('/api/products', {headers: myHeaders})
    .map((res) => res.json());
   }

  ngOnInit() {
    // this.datasource.subscribe((data) => this.products = data);
  }

}
