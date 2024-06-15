import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Producto{
  id: number,
  name: string,
  price: number,
}

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {
  product: Producto = {
    id: 0,
    name: '',
    price: 0
  };

  constructor(private productService: ProductService, private router: Router){}

  addProduct(): void {
    this.productService.getMaxId().subscribe(maxId => {
      this.product.id = maxId + 1;
      this.productService.addProduct(this.product).subscribe(() => {
        this.router.navigate(['/']);
      });
    });
  }

}
