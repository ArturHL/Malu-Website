import Product from '../models/product.js';

// Datos de ejemplo para productos
const products = [
  new Product(0, 'Pozole Surtido', 'Pozole Rojo', '85.00', 30, 4, '/receta-pozole-sin-carne.jpeg'),
  new Product(1, 'Taco al Pastor', 'Taco de carne al pastor', '12.0', 30, 0, '/receta-pozole-sin-carne.jpeg'),
  new Product(2, 'Torta Ahogada', 'Torta ahogada en salsa', '9.00', 20, 1, '/receta-pozole-sin-carne.jpeg'),
  new Product(3, 'Horchata', 'Refrescante bebida de horchata', '3.00', 50, 1, '/receta-pozole-sin-carne.jpeg'),
  new Product(4, 'Flan', 'Postre clásico mexicano', '6.00', 15, 2, '/receta-pozole-sin-carne.jpeg'),
  new Product(5, 'Flan', 'Postre clásico mexicano', '6.00', 15, 2, '/receta-pozole-sin-carne.jpeg'),
  new Product(6, 'Flan', 'Postre clásico mexicano', '6.00', 15, 2, '/receta-pozole-sin-carne.jpeg'),
  new Product(7, 'Flan', 'Postre clásico mexicano', '6.00', 15, 2, '/receta-pozole-sin-carne.jpeg'),
  new Product(8, 'Flan', 'Postre clásico mexicano', '6.00', 15, 2, '/receta-pozole-sin-carne.jpeg'),
  new Product(9, 'Flan', 'Postre clásico mexicano', '6.00', 15, 2, '/receta-pozole-sin-carne.jpeg'),
  new Product(10, 'Flan', 'Postre clásico mexicano', '6.00', 15, 2, '/receta-pozole-sin-carne.jpeg'),
  // Agregar más productos (hasta 10) con datos ficticios aquí
];

export {
  products,
}