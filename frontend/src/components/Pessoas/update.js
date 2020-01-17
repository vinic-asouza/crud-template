/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input, Select } from '@rocketseat/unform';
import * as Yup from 'yup';
// import Fab from '@material-ui/core/Fab';
import { Edit } from '@material-ui/icons';

import api from '../../services/api';

import { SmallContent, Actions, Aux } from '../../pages/Main/styles';

import { updatePessoaRequest } from '../../store/modules/pessoa/actions';

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

export default function AtualizaPessoa(pssId) {
  const dispatch = useDispatch();

  const id = pssId.pssId;

  const [pessoas, setPessoa] = useState([]);
  const [cidades, setCidade] = useState([]);
  const [tipos, setTipo] = useState([]);
  const [clientes, setCliente] = useState([]);
  const [convenios, setConvenio] = useState([]);
  const [entidades, setEntidade] = useState([]);

  useEffect(() => {
    async function loadPessoa() {
      const response = await api.get(`pessoas/${id}`);
      setPessoa(response.data[0]);
    }
    loadPessoa();
  }, [id, pssId]);

  useEffect(() => {
    async function loadOptions() {
      const res_cidades = await api.get('cidades');
      const res_tipos = await api.get('pessoastipos');
      const res_clientes = await api.get('clientes');
      const res_convenios = await api.get('convenios');
      const res_entidades = await api.get('entidades');
      setCidade(res_cidades.data);
      setTipo(res_tipos.data);
      setCliente(res_clientes.data);
      setConvenio(res_convenios.data);
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
      id: tipo.tps_id,
      title: tipo.tps_descricao,
    })),
  ];
  const options_clientes = [
    clientes.map(cliente => ({
      id: cliente.cli_id,
      title: cliente.cli_fantasia,
    })),
  ];
  const options_convenios = [
    convenios.map(convenio => ({
      id: convenio.con_id,
      title: convenio.con_fantasia,
    })),
  ];
  const options_entidades = [
    entidades.map(entidade => ({
      id: entidade.ent_id,
      title: entidade.ent_fantasia,
    })),
  ];

  function handleSubmit({
    pss_nome,
    pss_sobrenome,
    pss_tipo,
    pss_nascimento,
    pss_genero,
    pss_email,
    cid_id,
    pss_logradouro,
    pss_numero,
    pss_complemento,
    pss_fone1,
    pss_fone2,
    pss_fone3,
    pss_bairro,
    pss_cep,
    pss_cpf,
    pss_rg,
    pss_cns,
    pss_estado_civil,
    cli_id,
    tps_id,
    ent_id,
    con_id,
  }) {
    dispatch(
      updatePessoaRequest(
        id,
        pss_nome,
        pss_sobrenome,
        pss_tipo,
        pss_nascimento,
        pss_genero,
        pss_email,
        cid_id,
        pss_logradouro,
        pss_numero,
        pss_complemento,
        pss_fone1,
        pss_fone2,
        pss_fone3,
        pss_bairro,
        pss_cep,
        pss_cpf,
        pss_rg,
        pss_cns,
        pss_estado_civil,
        cli_id,
        tps_id,
        ent_id,
        con_id
      )
    );
  }

  return (
    <SmallContent grid="4">
      <Actions>
        <Edit />
        <h1>Atualizar Usuário</h1>
      </Actions>
      <Aux>
        <Form initialData={pessoas} onSubmit={handleSubmit}>
          <ul>
            <li>
              <label htmlFor="pss_nome">Nome</label>
              <label htmlFor="pss_sobrenome">Sobrenome</label>
            </li>
            <li>
              <Input name="pss_nome" />
              <Input name="pss_sobrenome" />
            </li>
          </ul>
          <ul>
            <li>
              <label htmlFor="pss_nascimento">Data Nascimento</label>
              <label htmlFor="pss_genero">Genero</label>
              <label htmlFor="pss_tipo">Tipo</label>
            </li>
            <li>
              <Input name="pss_nascimento" />
              <Input name="pss_genero" />
              <Input name="pss_tipo" />
            </li>
          </ul>
          <ul>
            <li>
              <label htmlFor="pss_estado_civil">Estado Civil</label>
              <label htmlFor="pss_email">Email</label>
            </li>
            <li>
              <Input name="pss_estado_civil" />
              <Input name="pss_email" />
            </li>
          </ul>
          <ul>
            <li>
              <label htmlFor="pss_fone1">Tel. Principal</label>
              <label htmlFor="pss_fone2">Tel. Adicional</label>
              <label htmlFor="pss_fone3">Tel. Adicional</label>
            </li>
            <li>
              <Input name="pss_fone1" />
              <Input name="pss_fone2" />
              <Input name="pss_fone3" />
            </li>
          </ul>
          <ul>
            <li>
              <label htmlFor="pss_cep">CEP</label>
              <label htmlFor="cid_id">Cidade</label>
            </li>
            <li>
              <Input name="pss_cep" />
              <Select name="cid_id" options={options_cidades[0]} />
            </li>
          </ul>
          <ul>
            <li>
              <label htmlFor="pss_logradouro">Logradouro</label>
              <label htmlFor="pss_numero">Número</label>
            </li>
            <li>
              <Input name="pss_logradouro" />
              <Input name="pss_numero" />
            </li>
          </ul>
          <ul>
            <li>
              <label htmlFor="pss_bairro">Bairro</label>
              <label htmlFor="pss_complemento">Complemento</label>
            </li>
            <li>
              <Input name="pss_bairro" />
              <Input name="pss_complemento" />
            </li>
          </ul>
          <ul>
            <li>
              <label htmlFor="pss_cpf">CPF</label>
              <label htmlFor="pss_rg">RG</label>
              <label htmlFor="pss_cns">CNS</label>
            </li>
            <li>
              <Input name="pss_cpf" />
              <Input name="pss_rg" />
              <Input name="pss_cns" />
            </li>
          </ul>
          <ul>
            <li>
              <label htmlFor="cli_id">Cliente</label>
              <label htmlFor="tps_id">Tipo Pessoa</label>
            </li>
            <li>
              <Select name="cli_id" options={options_clientes[0]} />
              <Select name="tps_id" options={options_tipos[0]} />
            </li>
          </ul>
          <ul>
            <li>
              <label htmlFor="con_id">Convênio</label>
              <label htmlFor="ent_id">Entidade</label>
            </li>
            <li>
              <Select name="con_id" options={options_convenios[0]} />
              <Select name="ent_id" options={options_entidades[0]} />
            </li>
          </ul>
          <button type="submit">Cadastrar</button>
        </Form>
      </Aux>
    </SmallContent>
  );
}
