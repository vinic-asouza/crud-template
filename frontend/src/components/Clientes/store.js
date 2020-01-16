/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input, Select } from '@rocketseat/unform';
import * as Yup from 'yup';
import Fab from '@material-ui/core/Fab';
import { Edit, Check } from '@material-ui/icons';
import { SmallContent, Actions, Aux } from '../../pages/Main/styles';
import api from '../../services/api';
import { createClienteRequest } from '../../store/modules/cliente/actions';

// const schema = Yup.object().shape({
//   cli_razao: Yup.string().required('*'),
//   cli_fantasia: Yup.string().required('*'),
//   cli_endereco: Yup.string().required('*'),
//   cli_bairro: Yup.string().required('*'),
//   cli_cep: Yup.string().required('*'),
//   cid_id: Yup.string().required('*'),
//   cli_doc1: Yup.string().required('*'),
//   cli_fone1: Yup.string().required('*'),
//   cli_email: Yup.string().required('*'),
//   tcl_id: Yup.string().required('*'),
//   ccl_id: Yup.string().required('*'),
//   scl_id: Yup.string().required('*'),
//   ent_id: Yup.string().required('*'),
//   sts_id: Yup.string().required('*'),
// });

export default function CadastraCliente() {
  const [cidades, setCidade] = useState([]);
  const [tipos, setTipo] = useState([]);
  const [categorias, setCategoria] = useState([]);
  const [situacoes, setSituacao] = useState([]);
  const [status, setStatus] = useState([]);
  const [entidades, setEntidade] = useState([]);

  useEffect(() => {
    async function loadOptions() {
      const res_cidades = await api.get('cidades');
      const res_tipos = await api.get('tiposclientes');
      const res_categorias = await api.get('categoriasclientes');
      const res_situacao = await api.get('situacoesclientes');
      const res_status = await api.get('status');
      const res_entidades = await api.get('entidades');
      setCidade(res_cidades.data);
      setTipo(res_tipos.data);
      setCategoria(res_categorias.data);
      setSituacao(res_situacao.data);
      setStatus(res_status.data);
      setEntidade(res_entidades.data);
    }
    loadOptions();
  }, []);

  const options_cidades = [
    cidades.map(cidade => ({
      id: cidade.cid_id,
      title: cidade.cid_nome,
    })),
  ];
  const options_tipos = [
    tipos.map(tipo => ({
      id: tipo.tcl_id,
      title: tipo.tcl_descricao,
    })),
  ];
  const options_categorias = [
    categorias.map(categoria => ({
      id: categoria.ccl_id,
      title: categoria.ccl_descricao,
    })),
  ];
  const options_situacoes = [
    situacoes.map(situacao => ({
      id: situacao.scl_id,
      title: situacao.scl_descricao,
    })),
  ];
  const options_status = [
    status.map(sts => ({
      id: sts.sts_id,
      title: sts.sts_descricao,
    })),
  ];
  const options_entidades = [
    entidades.map(entidade => ({
      id: entidade.ent_id,
      title: entidade.ent_fantasia,
    })),
  ];

  const dispatch = useDispatch();

  function handleSubmit({
    cli_razao,
    cli_fantasia,
    cli_endereco,
    cli_complemento,
    cli_bairro,
    cli_cep,
    cid_id,
    cli_doc1,
    cli_doc2,
    cli_doc3,
    cli_fone1,
    cli_fone2,
    cli_fone3,
    cli_website,
    cli_email,
    tcl_id,
    ccl_id,
    scl_id,
    ent_id,
    sts_id,
  }) {
    dispatch(
      createClienteRequest(
        cli_razao,
        cli_fantasia,
        cli_endereco,
        cli_complemento,
        cli_bairro,
        cli_cep,
        cid_id,
        cli_doc1,
        cli_doc2,
        cli_doc3,
        cli_fone1,
        cli_fone2,
        cli_fone3,
        cli_website,
        cli_email,
        tcl_id,
        ccl_id,
        scl_id,
        ent_id,
        sts_id
      )
    );
  }

  return (
    <SmallContent grid="4">
      <Actions>
        <Edit />
        <h1>Novo Cliente</h1>
      </Actions>
      <Aux>
        <Form onSubmit={handleSubmit}>
          <ul>
            <li>
              <label htmlFor="cli_fantasia">Nome Fantasia</label>
            </li>
            <li>
              <Input name="cli_fantasia" />
            </li>
          </ul>
          <ul>
            <li>
              <label htmlFor="cli_razao">Razão Social</label>
            </li>
            <li>
              <Input name="cli_razao" />
            </li>
          </ul>
          <ul>
            <li>
              <label htmlFor="cid_id">Cidade</label>
              <label htmlFor="cli_cep">CEP</label>
            </li>
            <li>
              <Select name="cid_id" options={options_cidades[0]} />
              <Input name="cli_cep" />
            </li>
          </ul>
          <ul>
            <li>
              <label htmlFor="cli_endereco">Endereço</label>
            </li>
            <li>
              <Input name="cli_endereco" />
            </li>
          </ul>
          <ul>
            <li>
              <label htmlFor="cli_complemento">Complemento</label>
            </li>
            <li>
              <Input name="cli_complemento" />
            </li>
          </ul>
          <ul>
            <li>
              <label htmlFor="cli_doc1">CNPJ</label>
              <label htmlFor="cli_doc2">Doc. Adiconal</label>
              <label htmlFor="cli_doc3">Doc. Adiconal</label>
            </li>
            <li>
              <Input name="cli_doc1" />
              <Input name="cli_doc2" />
              <Input name="cli_doc3" />
            </li>
          </ul>
          <ul>
            <li>
              <label htmlFor="cli_fone1">Tel. Principal</label>
              <label htmlFor="cli_fone2">Tel. Adiconal</label>
              <label htmlFor="cli_fone3">Tel. Adiconal</label>
            </li>
            <li>
              <Input name="cli_fone1" />
              <Input name="cli_fone2" />
              <Input name="cli_fone3" />
            </li>
          </ul>
          <ul>
            <li>
              <label htmlFor="cli_email">Email</label>
              <label htmlFor="cli_website">Site</label>
            </li>
            <li>
              <Input name="cli_email" />
              <Input name="cli_website" />
            </li>
          </ul>
          <ul>
            <li>
              <label htmlFor="tcl_id">Tipo</label>
              <label htmlFor="ccl_id">Categoria</label>
              <label htmlFor="scl_id">Situação</label>
            </li>
            <li>
              <Select name="tcl_id" options={options_tipos[0]} />
              <Select name="ccl_id" options={options_categorias[0]} />
              <Select name="scl_id" options={options_situacoes[0]} />
            </li>
          </ul>
          <ul>
            <li>
              <label htmlFor="sts_id">Status</label>
              <label htmlFor="ent_id">Entidade</label>
            </li>
            <li>
              <Select name="sts_id" options={options_status[0]} />
              <Select name="ent_id" options={options_entidades[0]} />
            </li>
          </ul>
          <button type="submit">Cadastrar</button>
        </Form>
      </Aux>
    </SmallContent>
  );
}
