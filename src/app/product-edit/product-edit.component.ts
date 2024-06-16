import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import Producto from '../product.interface';
@Component({
  selector: 'app-product-edit',
  standalone: true,
  providers: [ProductService],
  imports: [FormsModule, CommonModule],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent {

  product: Producto = {
    id: '',
    name: '',
    price: 0
  }

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.productService.getProduct(id).subscribe(
        (data: Producto) => {
          this.product = data;
        },
        error => {
          console.error('Error fetching product:', error);
          this.router.navigate(['/']);
        }
      );
    } else {
      console.error('Invalid product ID');
      this.router.navigate(['/']);
    }
  }

  updateProduct(): void {
    if (this.product) {
      this.productService.updateProduct(this.product).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      console.error('Product is undefined');
    }
  }
}
