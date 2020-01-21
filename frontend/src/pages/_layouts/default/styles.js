import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #f5f5f5, #f5f5f5);
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
  &:before,
  &:after {
    content: ' ';
    display: table;
  }
  &:after {
    clear: both;
  }
  padding-top: 10px;
  /* background: #f5f5f5; */
`;

export const MainContent = styled.div`
  /* display: flex; */
  justify-content: center;
  height: 100%;
  float: left;
  margin: 5px 5px 5px 5px;
  padding: 0.25rem;
  min-height: 1px;
  box-sizing: border-box;
  /* box-shadow: 5px 5px 5px 5px rgba(225, 225, 225, 0.9); */
  /* background: #fff; */
  text-align: center;
  /* border-radius: 5px; */

  @media only screen and (min-width: 432px) {
    width: ${props => (props.grid ? (props.grid / 12) * 100 : '8:33')}%;
    /* width: 65%; */
  }

  h1 {
    margin: 15px 0 0 0;
  }

  button {
    background: transparent;
    border: none !important;
  }
`;

export const SmallContent = styled.div`
  height: 100%;
  float: left;
  margin: 5px 5px 5px 5px;
  padding: 0.25rem;
  min-height: 1px;
  box-sizing: border-box;
  /* box-shadow: 5px 5px 5px 5px rgba(225, 225, 225, 0.9); */
  /* background: #fff; */
  text-align: center;
  /* border-radius: 5px; */

  @media only screen and (min-width: 432px) {
    width: ${props => (props.grid ? (props.grid / 12) * 100 : '8:33')}%;
    /* width: 33%; */
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 10px 10px 10px;

  button {
    margin-right: 10px;
    background: #1E90FF;
    color: #fff;
  }

  h1 {
    margin: 10px 10px 10px 10px;
    justify-content: center;
  }
`;

export const Aux = styled.div`
  background: #fff;
  margin: 0 auto;
  width: 100%;
  padding: 1em;
  /* border: 1px solid #ccc; */
  border-radius: 5px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  #row {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 0 auto;
    padding: 10px;
  }

  button {
    background: transparent;
    border: none !important;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    align-items: left;
    text-align: left;

    li {
      display: flex;
      flex-direction: row;

      label {
        width: 50%;
        margin: 0 5px 5px;
      }

      input {
        /* background: #fcfcfc; */
        /* border: 0; */
        border-radius: 3px;
        width: 100%;
        height: 30px;
        padding: 0 15px;
        margin: 0 5px 10px;

        border: 1px solid rgba(224, 224, 224, 1);
        /* border-bottom: 1px solid #1E90FF; */

        &::placeholder {
          color: rgba(0, 0, 0, 0.3);
          font-size: 14px;
        }
      }

      select {
        background: #fff;
        /* border: 0; */
        border-radius: 3px;
        width: 50%;
        height: 30px;
        padding: 0 15px;
        margin: 0 5px 10px;

        border: 1px solid rgba(224, 224, 224, 1);
        /* border-bottom: 1px solid #1E90FF; */

        &::placeholder {
          color: rgba(0, 0, 0, 0.3);
          font-size: 14px;
        }
      }
    }

    span {
      color: #ff0000;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #1E90FF;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2;

      &:hover {
        background: ${darken(0.05, '#1E90FF')};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
