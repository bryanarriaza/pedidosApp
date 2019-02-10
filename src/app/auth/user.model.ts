export class User {
    uid?: string;
    nombre?: string;
    email?: string;

    constructor(nombre: string, email: string, uid: string) {
        this.uid = uid;
        this.nombre = nombre;
        this.email = email;
    }

}
