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
  const [cliente, setCliente] = useState([]);
  const [cidade, setCidade] = useState([]);
  const [tipo, setTipo] = useState([]);
  const [convenio, setConvenio] = useState([]);
  const [entidade, setEntidade] = useState([]);

  useEffect(() => {
    async function loadUser() {
      const id = pssId.pssId;
      const response = await api.get(`pessoas/${id}`);
      setPessoa(response.data[0]);
      setCliente(response.data[0].cliente);
      setCidade(response.data[0].cidade);
      setTipo(response.data[0].pessoas_tipo);
      setConvenio(response.data[0].convenio);
      setEntidade(response.data[0].entidade);
    }
    loadUser();
  }, [pssId]);

  function idade() {
    const i = new Date().getFullYear() - pessoa.pss_nascimento;
    console.log(pessoa.pss_nascimento);
    return i;
  }

  // calcIdade(() => {
  //   return new Date().getFullYear() - pessoa.pss_nascimento;
  // });

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
                <strong>Código: </strong> {pessoa.pss_id}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <strong>Nome: </strong> {pessoa.pss_nome} {pessoa.pss_sobrenome}
                <br />
                <strong>Gênero: </strong> {pessoa.pss_genero} <br />
                <strong>Idade: </strong> {idade()} <br />
                <strong>Data de Nascimento: </strong>{' '}
                {moment(pessoa.pss_nascimento).calendar()}
                <br />
                <strong>Tipo: </strong> {pessoa.pss_tipo} <br />
                <strong>Estado Civil: </strong> {pessoa.pss_estado_civil} <br />
                <strong>RG: </strong> {pessoa.pss_rg} <br />
                <strong>CPF: </strong> {pessoa.pss_cpf} <br />
                <strong>CNS: </strong> {pessoa.pss_cns} <br />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <strong>Endereço: </strong> {pessoa.pss_logradouro} <br />
                <strong>Número: </strong> {pessoa.pss_numero} <br />
                <strong>Complemento: </strong> {pessoa.pss_complemento} <br />
                <strong>Bairro: </strong> {pessoa.pss_bairro} <br />
                <strong>CEP: </strong> {pessoa.pss_cep} <br />
                <strong>Cidade: </strong> {cidade.cid_nome}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <strong>Email: </strong> {pessoa.pss_email} <br />
                <strong>Telefone Principal: </strong> {pessoa.pss_fone1} <br />
                <strong>Contato Adicional: </strong> {pessoa.pss_fone2} <br />
                <strong>Contato Adicional: </strong> {pessoa.pss_fone3} <br />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <strong>Tipo Pessoa: </strong> {tipo.tps_descricao} <br />
                <strong>Cliente: </strong> {cliente.cli_fantasia} <br />
                <strong>Convenio: </strong> {convenio.con_fantasia} <br />
                <strong>Entidade: </strong> {entidade.ent_fantasia} <br />
              </TableCell>
            </TableRow>
            {/* <TableRow>
              <TableCell component="th" scope="row">
                <strong>Data de Criação: </strong> {pessoa.createdAt} <br />
                <strong>Ultima Modificação: </strong> {pessoa.updatedAt}
              </TableCell>
            </TableRow> */}
          </TableBody>
        </Table>
      </Aux>
    </SmallContent>
  );
}
