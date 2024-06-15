import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Producto{
  id: number,
  name: string,
  price: number;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  providers: [ProductService],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent{

  constructor(private productService: ProductService, private router: Router) { }

  deleteProduct(arg0: number){
    throw new Error('Metodo no implementado');
  }

  editProduct(id: number){
    this.router.navigate(['/product-edit', id]);
  }

  products: Producto[] = [];


  ngOnInit(): void {
    this.productService.getProducts().subscribe((data:Producto[]) => {
      this.products = data;
    });
  }
}
