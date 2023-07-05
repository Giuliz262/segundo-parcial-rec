// TODO: Crear modelo de datos de Reserva
const { DataTypes, sequelize } = require('../reservas.db');

const Reserva = sequelize.define('Reserva', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    codigo: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    fecha_reserva: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    fecha_vuelo: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    telefono: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: 'reservas'
});

// Crear tabla si no existe ({force: true} borra y crea la tabla)
Reserva.sync({ force: true }).then(() => {
    console.log('Tabla de Reservas creada');
});

module.exports = Reserva;