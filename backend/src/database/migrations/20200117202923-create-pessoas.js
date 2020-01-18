module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('pessoas', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            nascimento: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            genero: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            documento: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            // cep: {
            //     type: Sequelize.STRING,
            //     allowNull: false,
            // },
            rua: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            numero: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            bairro: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            cidade: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            telefone: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            celular: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: true,
                unique: true,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },

    down: queryInterface => {
        return queryInterface.dropTable('pessoas');
    },
};
