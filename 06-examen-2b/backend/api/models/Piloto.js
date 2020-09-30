/**
 * Piloto.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: 'default',
  tableName: 'piloto',

  attributes: {
    nombre: {
      type: 'string',
      required: true,
      unique: true,
    },
    apellido: {
      type: 'string',
      required: true,
      unique: true,
    },
    pais: {
      type: 'string',
      required: true,
    },
    pole_positions: {
      type: 'number',
      required: true
    },
    cantidad_victorias: {
      type: 'number',
      required: true
    },
    cantidad_campeonatos: {
      type: 'number',
      required: true
    },
    retirado: {
      type: 'boolean',
      required: true,
    },

    // RELACIONES
    escuderia: { // Nombre de FK
      model: 'Escuderia', // Modelo con el cual relacionamos
      required: false, // No requerida 0 - N
    },
  },
};

