// Define la estructura para un solo producto en el carrito
export interface CartItem {
  productId: number;
  name: string;
  imageURL: string;
  price: number;
  quantity: number;
  subtotal: number;
}

// Define la estructura principal del objeto Carrito
export interface ShoppingCart {
  cartId: number;
  items: CartItem[];
  totals: {
    totalItems: number;
    subtotal: number;
    discountApplied: number;
    totalAmount: number;
  };
}