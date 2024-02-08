export default class Client {
  constructor(id, name, email, phone, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.password = password;
    this.payMethods = []; // Deberia ser un array de objetos
    this.address = []; // Deberia ser un array de objetos
  }
}