const juan = {
    nombre: 'Juan',
    apellido: 'Morales',
    casado: false,
    estado: "BN",
    sueldo: 15.5,
    imprimirUsuario: (mensaje) => {
        return 'El mensaje es: ' + mensaje;
    },
    calcularImpuesto: (impuesto) => {
        return this.sueldo + (this.sueldo * impuesto);
    },
    estadoActual: () => {
        switch (this.estado) {
            case "AC": {
                return 'AP';
            }
            case "IN": {
                return 'AF';
            }
            case "BN": {
                return 'AT';
            }
        }
    }
};
//console.log(Juan.calcularImpuesto(4));
