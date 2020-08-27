/**
 * Usuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: 'default',  // nombre conexión
  tableName: 'epn_usuario',  // nombre tabla
  attributes: {
    cedula: {
      type: 'string',
      required: true,
      columnName: 'epn_cedula',
      unique: true,
      minLength: 10,
      maxLength: 25
    },
    nombre: {
      type: 'string',
      minLength: 3,
      required: true
    },
    correo: {
      type: 'string',
      isEmail: true
    },
    estadoCivil: {
      type: 'string',
      isIn: ['Soltero', 'Casado', 'Divorciado', 'Viudo', 'Union Libre'],
      defaultsTo: 'Soltero'
    },

    // RELACIONES
    // Usuario -> Pokemon
    pokemones: { // Uno a muchos (nombre en plural)
      collection: 'Pokemon', // Modelo a relacionarse
      via: 'usuario', // Nombre atributo FK en el modelo relacionado
    }
  },
};

