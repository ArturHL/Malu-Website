export default class Client {
  constructor(id, name, email, phone, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.password = password;
    this.profileImage = '';
    this.address = [
      // {street: 'Calle 15 Ext. 1 Int. 1', postalCode: '12345', city: 'CDMX', state: 'CDMX', country: 'México'},
    ];
    this.payMethods = [
      // {type: 'visa', number: '1234', expiration: '12/23'},
    ]; 
    this.orders = [
      // orders
    ];
  }
}