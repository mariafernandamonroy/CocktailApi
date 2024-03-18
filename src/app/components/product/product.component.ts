import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { error } from 'console';
import { ProductInterface } from '../../interfaces/product.interface';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  productList: ProductInterface[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe({
      next: (result) => {
        this.getProducts = result;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
