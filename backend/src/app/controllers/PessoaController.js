/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import * as Yup from 'yup';
import { startOfHour, parseISO, isBefore, format, subHours } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Pessoa from '../models/Pessoa';

class PessoaController {
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

        const { id, name, nascimento, genero, documento, rua, numero, bairro, cidade, telefone, celular, email } = await Pessoa.create(req.body);

        return res.json({ id, name, nascimento, genero, documento, rua, numero, bairro, cidade, telefone, celular, email });
    }

    async delete(req, res) {
        const appointment = await Appointment.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    as: 'provider',
                    attributes: ['name', 'email'],
                },
                {
                    model: User,
                    as: 'user',
                    attributes: ['name'],
                },
            ],
        });

        if (appointment.user_id !== req.userId) {
            return res.status(401).json({
                error: "You don't have permission to cancel this appointment",
            });
        }

        const dateWithSub = subHours(appointment.date, 2);

        if (isBefore(dateWithSub, new Date())) {
            return res.status(401).json({
                error: 'You can only cancel pessoas 2 hours in advance.',
            });
        }

        appointment.canceled_at = new Date();

        await appointment.save();

        await Queue.add(CancellationMail.key, {
            appointment,
        });

        return res.json(appointment);
    }
}

export default new PessoaController();
