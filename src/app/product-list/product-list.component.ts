import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import Producto from '../product.interface';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  providers: [ProductService],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent {

  constructor(private productService: ProductService, private router: Router) {}

  deleteProduct(arg0: string) {
    this.router.navigate(['/product-delete', arg0])
  }

  editProduct(arg0: string) {
    this.router.navigate(['/product-edit', arg0]);
  }
  products: Producto[] = [];


  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: Producto[]) => {
      this.products = data;
    });
  }
}
