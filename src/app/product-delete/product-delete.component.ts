import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import Producto from '../product.interface';
@Component({
  selector: 'app-product-delete',
  standalone: true,
  imports: [FormsModule, CommonModule],
  providers: [ProductService],
  templateUrl: './product-delete.component.html',
  styleUrl: './product-delete.component.css'
})
export class ProductDeleteComponent {

  product: Producto = {
    id: '',
    name: '',
    price: 0
  };

  constructor(private productService: ProductService, @Inject(ActivatedRoute) private route: ActivatedRoute, private router: Router){}

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

  deleteProduct(): void{
    if (this.product) {
      this.productService.deleteProduct(this.product.id).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }

  cancel():void{
    this.router.navigate(['/product-list'])
  }


}
