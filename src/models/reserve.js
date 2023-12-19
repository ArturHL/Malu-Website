export default class Reserve {
  constructor(id, client_id, date, details, status) {
    this.id = id;
    this.client_id = client_id;
    this.date = date;
    this.details = details;
    this.status = status;
  }
}