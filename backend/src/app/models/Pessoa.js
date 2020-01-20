/* eslint-disable no-unused-vars */
import Sequelize, { Model } from 'sequelize';

class Pessoa extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                nascimento: Sequelize.DATE,
                genero: Sequelize.STRING,
                documento: Sequelize.STRING,
                rua: Sequelize.STRING,
                numero: Sequelize.STRING,
                bairro: Sequelize.STRING,
                cidade: Sequelize.STRING,
                telefone: Sequelize.STRING,
                celular: Sequelize.STRING,
                email: Sequelize.STRING,
                created_at: Sequelize.DATE,
                updated_at: Sequelize.DATE
            },
            {
                sequelize,
            }
        );
        return this;
    }
}

export default Pessoa;
