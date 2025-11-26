# 3.3-Maquetado-y-programaci-n-frontend

Viviana Margarita Rodriguez Cervera

Carrito de Compras (carrito-app)

Descripción del Proyecto

Este proyecto es una aplicación web simple desarrollada con Angular (Standalone Components) que simula la funcionalidad principal de un carrito de compras en una tienda en línea.

El objetivo principal es manejar el estado local del carrito, permitiendo a los usuarios agregar, eliminar y actualizar la cantidad de productos, así como calcular los totales (subtotal, descuentos y total final).

Características Implementadas:

Componente Standalone: ShoppingCartComponent como componente principal de la vista.

Gestión de Estado: Manejo del estado del carrito dentro del componente (sin uso de librerías externas de estado).

Cálculos Reactivos: Actualización automática de subtotales y totales al modificar la cantidad.

Tipado Estricto: Uso de interfaces (CartItem, ShoppingCart) para asegurar la estructura de datos.

Colaboración y Repositorio

Branch Principal: main 

Mecanismo de Colaboración: Se utiliza el flujo de trabajo de GitFlow simplificado, donde las nuevas funcionalidades se desarrollan en feature branches y se fusionan a main mediante Pull Requests (PRs).

1. Estructura de Carpetas del Proyecto (src/app/)
El proyecto sigue la convención de Angular. La lógica principal se encuentra en src/app/.

src/app/

Descripción: Contiene la lógica de la aplicación.

Archivos: app.component.ts (Componente principal que carga el Carrito).

src/app/cart/

Descripción: Carpeta que contiene la lógica y modelos específicos del carrito.

Archivos: cart.model.ts (Definiciones de interfaces ShoppingCart y CartItem - Modelo de datos).

src/app/cart/shopping-cart/

Descripción: Carpeta del componente de la vista del carrito.

Archivos: shopping-cart.component.ts (Lógica TS del componente), shopping-cart.component.html (Plantilla HTML), shopping-cart.component.css (Estilos CSS).

Otros: package.json (Dependencias del proyecto: Angular, TypeScript, etc.).

2. Estructura de la API (Simulada - Endpoints RESTful)
El proyecto utiliza datos simulados, pero esta es la estructura RESTful de la API que se consumiría en un futuro backend real:

Funcionalidad: Obtener Carrito

Método HTTP: GET

Endpoint (URL): /api/cart/{userId}

Cuerpo (Body): N/A

Descripción: Recupera el estado completo del carrito de un usuario.

Funcionalidad: Añadir Producto

Método HTTP: POST

Endpoint (URL): /api/cart/{userId}/item

Cuerpo (Body): { productId: number, quantity: number }

Descripción: Añade un producto al carrito o incrementa su cantidad.

Funcionalidad: Actualizar Cantidad

Método HTTP: PUT

Endpoint (URL): /api/cart/{userId}/item/{productId}

Cuerpo (Body): { quantity: number }

Descripción: Modifica la cantidad de un producto existente en el carrito.

Funcionalidad: Vaciar Carrito

Método HTTP: DELETE

Endpoint (URL): /api/cart/{userId}

Cuerpo (Body): N/A

Descripción: Elimina todos los ítems del carrito del usuario.
