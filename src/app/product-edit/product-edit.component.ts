import { Component, OnInit, Inject} from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Producto{
  id: number,
  name: string,
  price: number
}

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})

export class ProductEditComponent implements OnInit{

  producto: Producto = {
    id: 0,
    name: '',
    price: 0
  };

  constructor(
    private productService: ProductService,
    @Inject(ActivatedRoute) private route: ActivatedRoute,
    @Inject(Router) private router: Router
  ) { }

  private idProduct = Number(this.route.snapshot.paramMap.get('id'));

  ngOnInit(): void{
    this.productService.getProduct(this.idProduct).subscribe((data: Producto) => {
      this.producto = data;
    });
  }

  updateProduct(): void{
    this.productService.updateProduct(this.producto).subscribe(() => {
      this.router.navigate(['/']);
    })

  }

}
