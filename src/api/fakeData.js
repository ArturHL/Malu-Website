import Category from '../models/category';
import Client from '../models/client';
import Order from '../models/order';
import OrderDetail from '../models/orderDetail';
import Product from '../models/product';
import Reserve from '../models/reserve';

// const categories = [];
// const products = [];
// const clients = [];
// const orders = [];
// const orderDetails = [];
// const reserves = [];

// Datos de ejemplo para las categorías
const categories = [
  new Category(1, 'Tacos', 'Variety of tacos', '/receta-pozole-sin-carne.jpeg'),
  new Category(2, 'Bebidas', 'Bebidas refrescantes', '/receta-pozole-sin-carne.jpeg'),
  new Category(3, 'Postres', 'Deliciosos postres mexicanos', '/receta-pozole-sin-carne.jpeg'),
  new Category(4, 'Ensaladas', 'Fresh and healthy salads', '/receta-pozole-sin-carne.jpeg'),
  new Category(5, 'Platos Principales', 'Main course dishes', '/receta-pozole-sin-carne.jpeg'),
  new Category(6, 'Desayunos', 'Traditional breakfast options', '/receta-pozole-sin-carne.jpeg'),
  new Category(7, 'Sopas', 'Savory soup options', '/receta-pozole-sin-carne.jpeg'),
  new Category(8, 'Antojitos', 'Traditional Mexican snacks', '/receta-pozole-sin-carne.jpeg'),
  new Category(9, 'Especialidades', 'Specialty dishes', '/receta-pozole-sin-carne.jpeg'),
  new Category(10, 'Aperitivos', 'Appetizers and starters', '/receta-pozole-sin-carne.jpeg'),
];

// Datos de ejemplo para los clientes
const clients = [
  new Client(1, 'Alejandro González', 'alejandro@example.com', '555-1234', 'pass123', [
    { street: 'Av. Reforma 123', city: 'Ciudad de México', country: 'México' },
  ], [
    { type: 'tarjeta crédito', number: '**** **** **** 4321', expiration: '01/25' },
  ]),
  new Client(2, 'María Ramirez', 'maria@example.com', '555-5678', 'segura123', [
    { street: 'Calle Juárez 456', city: 'Guadalajara', country: 'México' },
  ], [
    { type: 'tarjeta débito', number: '**** **** **** 8765', expiration: '03/24' },
  ]),
  // Agregar más clientes (hasta 10) con datos ficticios aquí
];

// Datos de ejemplo para pedidos
const orders = [
  new Order(1, 1, '2023-12-18', 50.75, 'pendiente'),
  new Order(2, 2, '2023-12-17', 30.50, 'enviado'),
  // Agregar más pedidos (hasta 10) con datos ficticios aquí
];

// Datos de ejemplo para detalles de pedidos
const orderDetails = [
  new OrderDetail(1, 1, 1, 3, 10.25),
  new OrderDetail(2, 2, 2, 2, 12.75),
  // Agregar más detalles de pedidos (hasta 10) con datos ficticios aquí
];

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

// Datos de ejemplo para reservas
const reserves = [
  new Reserve(1, 1, '2023-12-19', orderDetails[0], 'confirmado'),
  new Reserve(2, 2, '2023-12-20', orderDetails[1], 'pendiente'),
  // Agregar más reservas (hasta 10) con datos ficticios aquí
];

export {
  categories,
  products,
  clients,
  orders,
  orderDetails,
  reserves,
}