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

import InfoPessoa from './info';
import CadastraPessoa from './store';
import AtualizaPessoa from './update';
import ExcluiPessoa from './delete';

export default function ListaPessoas() {
  const [pessoas, setPessoas] = useState([]);
  const [pssId, setPessoaId] = useState();
  const [auxComponent, setAuxComponent] = useState();
  const [detail, setDetail] = useState('');

  useEffect(() => {
    async function loadPessoas() {
      const res_pessoas = await api.get('pessoas');
      setPessoas(res_pessoas.data);
    }
    loadPessoas();
  }, [pssId]);

  function storePessoa() {
    setDetail('store');
  }
  function infoPessoa(id) {
    setPessoaId(id);
    setDetail('info');
  }
  function updatePessoa(id) {
    setPessoaId(id);
    setDetail('update');
  }

  function loadComponent() {
    switch (detail) {
      case 'info':
        setAuxComponent(<InfoPessoa pssId={pssId} />);
        return '';
      case 'store':
        setAuxComponent(<CadastraPessoa />);
        return '';
      case 'update':
        setAuxComponent(<AtualizaPessoa pssId={pssId} />);
        return '';
      default:
        setAuxComponent(<CadastraPessoa />);
        return '';
    }
  }

  useEffect(() => {
    loadComponent();
  }, [detail, pssId]);

  return (
    <>
      <MainContent grid="8">
        <Actions>
          <Fab size="small" aria-label="add" onClick={() => storePessoa()}>
            <Add />
          </Fab>

          {/* <Link to="/viewusuarios">
            <Fab size="small" aria-label="add">
              <AspectRatio />
            </Fab>
          </Link> */}

          <h1>Pessoas</h1>
        </Actions>

        <MaterialTable
          title="Registros:"
          columns={[
            { title: 'Código', field: 'pss_id' },
            { title: 'Nome', field: 'pss_nome' },
            { title: 'Email', field: 'pss_email' },
            { title: 'Telefone', field: 'pss_fone1' },
            { title: 'Cliente', field: 'cli_fantasia' },
            { title: 'Tipo', field: 'tps_descricao' },
            { title: 'Ações', field: 'acoes' },
          ]}
          data={pessoas.map(pessoa => ({
            pss_id: pessoa.pss_id,
            pss_nome: pessoa.pss_nome.concat(' ', pessoa.pss_sobrenome),
            pss_email: pessoa.pss_email,
            pss_fone1: pessoa.pss_fone1,
            cli_fantasia: pessoa.cliente.cli_fantasia,
            tps_descricao: pessoa.pessoas_tipo.tps_descricao,
            acoes: (
              <div>
                <button
                  type="button"
                  size="small"
                  aria-label="info"
                  onClick={() => infoPessoa(pessoa.pss_id)}
                >
                  <Visibility size="small" />
                </button>
                <button
                  type="button"
                  size="small"
                  aria-label="update"
                  onClick={() => updatePessoa(pessoa.pss_id)}
                >
                  <Edit size="small" />
                </button>

                <ExcluiPessoa pssId={pessoa.pss_id} />
              </div>
            ),
          }))}
        />
      </MainContent>

      {auxComponent}
    </>
  );
}
