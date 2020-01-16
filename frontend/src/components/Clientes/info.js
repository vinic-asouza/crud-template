/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Visibility } from '@material-ui/icons';
import { SmallContent, Actions, Aux } from '../../pages/Main/styles';

import api from '../../services/api';

export default function InfoCliente(cliId) {
  const [cliente, setCliente] = useState([]);
  const [cidade, setCidade] = useState([]);
  const [tipo, setTipo] = useState([]);
  const [categoria, setCategoria] = useState([]);
  const [situacao, setSituacao] = useState([]);
  const [status, setStatus] = useState([]);
  const [entidade, setEntidade] = useState([]);

  useEffect(() => {
    async function loadUser() {
      const id = cliId.cliId;
      const response = await api.get(`clientes/${id}`);
      setCliente(response.data[0]);
      setCidade(response.data[0].cidade);
      setTipo(response.data[0].tipos_cliente);
      setCategoria(response.data[0].categorias_cliente);
      setSituacao(response.data[0].situacoes_cliente);
      setStatus(response.data[0].status);
      setEntidade(response.data[0].entidade);
    }
    loadUser();
  }, [cliId]);

  return (
    <SmallContent grid="4">
      <Actions>
        <Visibility />
        <h1>Info. Cliente</h1>
      </Actions>

      <Aux>
        <Table aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                <strong>Código: </strong> {cliente.cli_id}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <strong>Nome Fantasia: </strong> {cliente.cli_fantasia} <br />
                <strong>Razão Social: </strong> {cliente.cli_razao}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <strong>Endereço: </strong> {cliente.cli_endereco} <br />
                <strong>Complemento: </strong> {cliente.cli_complemento} <br />
                <strong>Bairro: </strong> {cliente.cli_bairro} <br />
                <strong>CEP: </strong> {cliente.cli_cep} <br />
                <strong>Cidade: </strong> {cidade.cid_nome}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <strong>Documento: </strong> {cliente.cli_doc1} <br />
                <strong>Documento Adicional: </strong> {cliente.cli_doc2} <br />
                <strong>Documento Adicional: </strong> {cliente.cli_doc3}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <strong>Email: </strong> {cliente.cli_email} <br />
                <strong>Telefone Principal: </strong> {cliente.cli_fone1} <br />
                <strong>Contato Adicional: </strong> {cliente.cli_fone2} <br />
                <strong>Contato Adicional: </strong> {cliente.cli_fone3} <br />
                <strong>Site: </strong> {cliente.cli_website}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <strong>Tipo: </strong> {tipo.tcl_descricao} <br />
                <strong>Categoria: </strong> {categoria.ccl_descricao} <br />
                <strong>Situação: </strong> {situacao.scl_descricao} <br />
                <strong>Status: </strong> {status.sts_descricao} <br />
                <strong>Entidade: </strong> {entidade.ent_fantasia}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <strong>Data de Criação: </strong> {cliente.createdAt} <br />
                <strong>Ultima Modificação: </strong> {cliente.updatedAt}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Aux>
    </SmallContent>
  );
}
