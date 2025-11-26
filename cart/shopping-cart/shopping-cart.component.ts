import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para el pipe 'number' y *ngFor
import { ShoppingCart, CartItem } from './../cart.model'; 

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule], // Aquí se soluciona el error NG8004
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartData: ShoppingCart | null = null;
  isLoading: boolean = true; 

  constructor() { }

  ngOnInit(): void {
    this.loadCartData();
  }

  loadCartData(): void {
    const mockData: ShoppingCart = {
      cartId: 456,
      items: [
        {
          productId: 123,
          name: 'Zapatos deportivos',
          imageURL: 'https://via.placeholder.com/60/c8e5e5/333?text=👟',
          price: 89.99,
          quantity: 1,
          subtotal: 89.99
        }
      ],
      totals: {
        totalItems: 1,
        subtotal: 89.99,
        discountApplied: 0.00,
        totalAmount: 89.99
      }
    };

    setTimeout(() => {
      this.cartData = mockData;
      this.isLoading = false;
    }, 500);
  }

  proceedToCheckout(): void {
    if (this.cartData) {
      alert(`Iniciando pago para el carrito #${this.cartData.cartId}.`);
    }
  }
}