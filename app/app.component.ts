import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
// Importamos el componente del carrito para poder usarlo en la plantilla (template).
import { ShoppingCartComponent } from './cart/shopping-cart/shopping-cart.component';

@Component({
  // Selector HTML que usaremos en index.html o main.ts: <app-root>
  selector: 'app-root', 
  
  // Indica que este es un componente independiente y no necesita un NgModule.
  standalone: true,
  
  // Lista de otros módulos o componentes que este componente usará.
  imports: [
    CommonModule, 
    ShoppingCartComponent // <-- Añadimos el Carrito aquí para usarlo abajo.
  ], 
  
  // La plantilla (HTML) donde se muestra el componente del Carrito.
  template: `
    <main class="container">
      <app-shopping-cart></app-shopping-cart>
    </main>
  `, 
  
  // El archivo CSS asociado a este componente.
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mi-proyecto';
}