interface Usuario {
    nombre: string;
    apellido: string;
    edad?: number;  // opcional
    sueldo?: number;  // opcional
    casado: boolean;
    estado: 'AC' | 'IN' | 'BN';
    imprimirUsuario: (mensaje: string) => string;  // función pero sin la implementación
    // parametro numero impuesto; sueldo + sueldo*impuesto
    calcularImpuesto: (impuesto: number) => number;
    // no reciba parametros; AC'AP', IN'AF', BN'AT'
    estadoActual: () => 'AP' | 'AF' | 'AT';
}

const juan: Usuario = {
    nombre: 'Juan',
    apellido: 'Morales',
    casado: false,
    estado: "BN",
    sueldo: 15.5,
    imprimirUsuario: (mensaje: string) => {
        return 'El mensaje es: ' + mensaje;
    },
    calcularImpuesto: (impuesto: number) => {
        return this.sueldo + (this.sueldo * impuesto);
    },
    estadoActual: () => {
        switch (this.estado) {
            case "AC": {
                return 'AP'
            }
            case "IN": {
                return 'AF';
            }
            case "BN": {
                return 'AT';
            }
        }
    }
}

//console.log(Juan.calcularImpuesto(4));







