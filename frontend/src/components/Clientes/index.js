/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/pt-br';
import MaterialTable from 'material-table';
import Fab from '@material-ui/core/Fab';
import { Add, AspectRatio, Visibility, Edit, Delete } from '@material-ui/icons';
import { MainContent, Actions } from '../../pages/Main/styles';
import api from '../../services/api';

import InfoCliente from './info';
import CadastraCliente from './store';
import AtualizaCliente from './update';
import ExcluiCliente from './delete';

export default function ListaClientes() {
  const [clientes, setClientes] = useState([]);
  const [cliId, setClienteId] = useState();
  const [auxComponent, setAuxComponent] = useState();
  const [detail, setDetail] = useState('');

  useEffect(() => {
    async function loadClientes() {
      const res_clientes = await api.get('clientes');
      setClientes(res_clientes.data);
    }
    loadClientes();
  }, [cliId]);

  function storeCliente() {
    setDetail('store');
  }
  function infoCliente(id) {
    setClienteId(id);
    setDetail('info');
  }
  function updateCliente(id) {
    setClienteId(id);
    setDetail('update');
  }

  function loadComponent() {
    switch (detail) {
      case 'info':
        setAuxComponent(<InfoCliente cliId={cliId} />);
        return '';
      case 'store':
        setAuxComponent(<CadastraCliente />);
        return '';
      case 'update':
        setAuxComponent(<AtualizaCliente cliId={cliId} />);
        return '';
      default:
        setAuxComponent(<CadastraCliente />);
        return '';
    }
  }

  useEffect(() => {
    loadComponent();
  }, [detail, cliId]);

  return (
    <>
      <MainContent grid="8">
        <Actions>
          <Fab size="small" aria-label="add" onClick={() => storeCliente()}>
            <Add />
          </Fab>

          <Link to="/viewusuarios">
            <Fab size="small" aria-label="add">
              <AspectRatio />
            </Fab>
          </Link>

          <h1>Clientes</h1>
        </Actions>

        <MaterialTable
          title="Clientes cadastrados:"
          columns={[
            { title: 'Código', field: 'cli_id' },
            { title: 'Nome', field: 'cli_fantasia' },
            { title: 'Cidade', field: 'cid_nome' },
            { title: 'Telefone', field: 'cli_fone1' },
            { title: 'Email', field: 'cli_email' },
            { title: 'Status', field: 'sts_descricao' },
            { title: 'Ações', field: 'acoes' },
          ]}
          data={clientes.map(cliente => ({
            cli_id: cliente.cli_id,
            cli_fantasia: cliente.cli_fantasia,
            cid_nome: cliente.cidade.cid_nome,
            cli_fone1: cliente.cli_fone1,
            cli_email: cliente.cli_email,
            sts_descricao: cliente.status.sts_descricao,
            acoes: (
              <div>
                <button
                  type="button"
                  size="small"
                  aria-label="info"
                  onClick={() => infoCliente(cliente.cli_id)}
                >
                  <Visibility size="small" />
                </button>
                <button
                  type="button"
                  size="small"
                  aria-label="update"
                  onClick={() => updateCliente(cliente.cli_id)}
                >
                  <Edit size="small" />
                </button>

                <ExcluiCliente cliId={cliente.cli_id} />
              </div>
            ),
          }))}
        />
      </MainContent>

      {auxComponent}
    </>
  );
}
