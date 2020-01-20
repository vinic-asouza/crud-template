/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import * as Yup from 'yup';
import { startOfHour, parseISO, isBefore, format, subHours } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Pessoa from '../models/Pessoa';

class PessoaController {
    async find(req, res) {

        const pessoas = await Pessoa.findOne({
            where: { id: req.params.id },
        });

        return res.json(pessoas);
    }

    async index(req, res) {

        const pessoas = await Pessoa.findAll();

        return res.json(pessoas);
    }

    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            nascimento: Yup.string().required(),
            documento: Yup.string().required(),
            rua: Yup.string().required(),
            numero: Yup.string().required(),
            bairro: Yup.string().required(),
            cidade: Yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation failed.' });
        }

        const userExists = await Pessoa.findOne({
            where: { documento: req.body.documento },
        });

        if (userExists) {
            return res.status(400).json({ error: 'Person already exists.' });
        }

        const { id, name, nascimento, genero, documento, rua, numero, bairro, cidade, telefone, celular, email, created_at, updated_at } = await Pessoa.create(req.body);

        return res.json({ id, name, nascimento, genero, documento, rua, numero, bairro, cidade, telefone, celular, email, created_at, updated_at });
    }

    async update(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string(),
            nascimento: Yup.string(),
            documento: Yup.string().required(),
            rua: Yup.string(),
            numero: Yup.string(),
            bairro: Yup.string(),
            cidade: Yup.string(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation failed.' });
        }

        const { documento } = req.body;

        const pessoa = await Pessoa.findOne({
            where: { id: req.params.id}
        })

        if (documento !== pessoa.documento) {
            const pessoaExists = await Pessoa.findOne({
                where: { documento },
            });

            if (pessoaExists) {
                return res.status(400).json({ error: 'Pessoa already exists.' });
            }
        }

        await pessoa.update(req.body);

        const { id, name, nascimento, genero, rua, numero, bairro, cidade, telefone, celular, email, created_at, updated_at } = await Pessoa.findOne({
            where: { id: req.params.id }
        })

        return res.json({ id, name, nascimento, genero, documento, rua, numero, bairro, cidade, telefone, celular, email, created_at, updated_at });
    }

    async delete(req, res) {

    }
}

export default new PessoaController();
