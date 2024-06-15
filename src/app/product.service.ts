import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Producto{
  id: number,
  name: string,
  price: number;
}

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private apiURL = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.apiURL);
  }

  getProduct(id: number): Observable<Producto>{
    return this.http.get<Producto>(`${this.apiURL}/${id}`);
  }

  addProduct(producto: Producto): Observable<Producto>{
    return this.http.post<Producto>(this.apiURL, producto);
  }

  updateProduct(producto: Producto): Observable<Producto>{
    return this.http.put<Producto>(`${this.apiURL}/${producto.id}`, producto);
  }

  deleteProduct(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }

  getMaxId(): Observable<number> {
    return this.getProducts().pipe(
      map(products => products.length > 0 ? Math.max(...products.map(product => product.id)) : 0)
    );
  }

}
