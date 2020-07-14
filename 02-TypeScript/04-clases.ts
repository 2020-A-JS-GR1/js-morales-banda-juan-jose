class Persona {
    public nombre: string;
    public apellido: string;
    static nombreReferencial: string = 'Humano';
    protected nombreYApellido: string = '';

    constructor(
        parametroNombre: string,
        parametroApellido: string,
    ) {
        this.nombre = parametroNombre;
        this.apellido = parametroApellido;
        this.nombreYApellido = this.nombre + ' ' + this.apellido;
    };

    private mostrarNombreApellido(): string {
        return this.nombreYApellido;
    }
}


class Usuario extends Persona {
    constructor(
        nombreParametro: string,
        apellidoParametro: string,
        public cedula: string,
        public estadoCivil: string,
    ) {
        super(nombreParametro, apellidoParametro);
    }
}

const juan = new Usuario(
    'Juan',
    'Morales',
    '1723765390',
    'soltero'
);
console.log(juan.nombre);
console.log(juan.apellido);
console.log(juan.cedula);
console.log(juan.estadoCivil);






