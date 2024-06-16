import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import Producto from '../product.interface';
@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {

  product: Producto = {
    id: '',
    name: '',
    price: 0
  };

  constructor(private productService: ProductService, private router: Router){}

  addProduct(): void {
    this.productService.getProducts().subscribe((data: Producto[]) => {
      const lastId = data.length > 0 ? data[data.length - 1].id : '0';
      this.product.id = (parseInt(lastId) + 1).toString();

      this.productService.addProduct(this.product).subscribe(() => {
        this.router.navigate(['/']);
      });
    }, error => {
      console.error('Error fetching products:', error);
    });
  }

}
