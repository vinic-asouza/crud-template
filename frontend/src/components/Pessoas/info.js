/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Visibility } from '@material-ui/icons';
import moment from 'moment';
import 'moment/locale/pt-br';
import { SmallContent, Actions, Aux } from '../../pages/Main/styles';

import api from '../../services/api';

export default function InfoPessoa(pssId) {
  const [pessoa, setPessoa] = useState([]);

  useEffect(() => {
    async function loadPessoa() {
      const id = pssId.pssId;
      const response = await api.get(`pessoas/${id}`);
      setPessoa(response.data);
    }
    loadPessoa();
  }, [pssId]);

  return (
    <SmallContent grid="4">
      <Actions>
        <Visibility />
        <h1>Info. Pessoa</h1>
      </Actions>

      <Aux>
        <Table aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                <strong>Código: </strong> {pessoa.id}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <strong>Nome: </strong> {pessoa.name} <br />
                <strong>Gênero: </strong> {pessoa.genero} <br />
                <strong>Idade: </strong> 18 <br />
                <strong>Data de Nascimento: </strong>{' '}
                {moment(pessoa.nascimento).calendar()}
                <br />
                <strong>Documento: </strong> {pessoa.documento} <br />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <strong>Endereço: </strong> {pessoa.rua} <br />
                <strong>Número: </strong> {pessoa.numero} <br />
                <strong>Bairro: </strong> {pessoa.bairro} <br />
                <strong>Cidade: </strong> {pessoa.cidade}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <strong>Email: </strong> {pessoa.email} <br />
                <strong>Telefone Residencial: </strong> {pessoa.telefone} <br />
                <strong>Celular: </strong> {pessoa.celular} <br />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <strong>Data de Criação: </strong> {moment(pessoa.created_at).calendar()} <br />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Aux>
    </SmallContent>
  );
}
