import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsService} from './products.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  productName = 'A book';
  isDisabled = true;
  // products = ['A book', 'A tree'];
  products = [];
  private productSubscription: Subscription;

  constructor(private productsService: ProductsService) {
    setTimeout(() => {
      //   this.productName = 'A tree';
      // this.isDisabled = false;

    }, 3000);
  }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
    this .productSubscription = this.productsService.productsUpdated.subscribe(() => {
      this.products = this.productsService.getProducts();
    });
  }

  onAddProduct(form) {
    if(form.valid) {
      // this.products.push(form.value.productName);
      this.productsService.addProduct(form.value.productName);
    }
  }

  onRemoveProduct(productName: string) {
    this.products = this.products.filter(p => p !== productName);
  }

  ngOnDestroy() {
    this.productSubscription.unsubscribe();
  }
}
