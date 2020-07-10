// Duck Typing
let nombre: string = 'Juan';
nombre = 'Jose';
let edad: number = 21;
let casado: boolean = false;
let fecha = new Date();
let sueldo: number;
sueldo = 10;

// ANY
let marihuana: any = 2;
marihuana = "2";
marihuana = true;
marihuana = () => '2';

// Datos multiple
let edadMultiple: number | string = 2;
edadMultiple = '2';
edadMultiple = 222;
edadMultiple = 'dos';
