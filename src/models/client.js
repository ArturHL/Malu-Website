export default class Client {
  constructor(id, name, email, phone, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.address = []; // Deberia ser un array de objetos
    this.phone = phone;
    this.payMethods = []; // Deberia ser un array de objetos
    this.password = password;
  }
}