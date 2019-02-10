export class User {
  uid?: string;
  nombre?: string;
  email?: string;

  constructor(obj: DataObj) {
    this.uid = (obj && obj.uid) || null;
    this.nombre = (obj && obj.nombre) || null;
    this.email = (obj && obj.email) || null;
  }
}

interface DataObj {
  uid: string;
  email: string;
  nombre: string;
}
