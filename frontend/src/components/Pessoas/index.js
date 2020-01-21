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
import { MainContent, Actions } from '../../pages/_layouts/default/styles';
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
            { title: 'Código', field: 'id' },
            { title: 'Nome', field: 'name' },
            // { title: 'Data de Nascimento', field: 'nascimento' },
            // { title: 'Genero', field: 'genero' },
            { title: 'Documento', field: 'documento' },
            // { title: 'Rua', field: 'rua' },
            // { title: 'Numero', field: 'numero' },
            // { title: 'Bairro', field: 'bairro' },
            // { title: 'Cidade', field: 'cidade' },
            { title: 'Telefone', field: 'telefone' },
            { title: 'Celular', field: 'celular' },
            { title: 'Email', field: 'email' },
            { title: 'Data do Cadastro', field: 'created_at' },
            { title: '', field: 'acoes' },
          ]}
          data={pessoas.map(pessoa => ({
            id: pessoa.id,
            name: pessoa.name,
            // nascimento: moment(pessoa.nascimento).calendar(),
            // genero: pessoa.genero,
            documento: pessoa.documento,
            // rua: pessoa.rua,
            // numero: pessoa.numero,
            // bairro: pessoa.bairro,
            // cidade: pessoa.cidade,
            telefone: pessoa.telefone,
            celular: pessoa.celular,
            email: pessoa.email,
            created_at: moment(pessoa.created_at).calendar(),
            acoes: (
              <div>
                <button
                  type="button"
                  size="small"
                  aria-label="info"
                  onClick={() => infoPessoa(pessoa.id)}
                >
                  <Visibility size="small" />
                </button>
                <button
                  type="button"
                  size="small"
                  aria-label="update"
                  onClick={() => updatePessoa(pessoa.id)}
                >
                  <Edit size="small" />
                </button>

                <ExcluiPessoa pssId={pessoa.id} />
              </div>
            ),
          }))}
        />
      </MainContent>

      {auxComponent}
    </>
  );
}
