import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #87cefa;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  h1 {
    margin-top: 15px;
    color: #fff;
    font-size: 52px;
  }

  h2 {
    margin-top: 3px;
    color: #fff;
    font-size: 18px;
    color: rgba(255, 255, 255, 0.8);
  }

  img {
    max-height: 100px;
    width: auto;
    height: auto;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(255, 255, 255, 0.7);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: rgba(0, 0, 0, 0.7);
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(0, 0, 0, 0.3);
        font-size: 14px;
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
      background: #1e90ff;
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
