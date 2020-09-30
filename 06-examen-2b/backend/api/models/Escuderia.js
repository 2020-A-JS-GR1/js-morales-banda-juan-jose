/**
 * Escuderia.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: 'default',
  tableName: 'escuderia',

  attributes: {
    nombre: {
      type: 'string',
      required: true,
      unique: true,
    },
    anio_creacion: {
      type: 'number',
      required: true
    },
    pais: {
      type: 'string',
      required: true,
    },
    activa: {
      type: 'boolean',
      required: true,
    },
    director: {
      type: 'string',
      required: true,
    },
    motor: {
      type: 'string',
      required: true,
    },
    cantidad_campeonatos: {
      type: 'number',
      required: true,
    },

    // RELACIONES
    // Escuderia -> Piloto
    pilotos: { // Uno a muchos (nombre en plural)
      collection: 'Piloto', // Modelo a relacionarse
      via: 'escuderia', // Nombre atributo FK en el modelo relacionado
    }
  },
};

