import styled from 'styled-components';

const bgc = '#FF6347'; // background color
const fc = '#FFF'; // foreground color

export const Container = styled.div`
  float: left;
  min-height: 1px;
  box-sizing: border-box;

  height: 64px;
  padding: 0 30px;
  background: ${bgc};
  box-shadow: 5px 5px 5px rgba(226, 226, 226, 0.5);

  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (min-width: 432px) {
    width: ${props => (props.grid ? (props.grid / 12) * 100 : '8:33')}%;
  }

  img {
    max-height: 35px;
    margin-right: 15px;
    /* padding-right: 20px; */
    /* border-right: 1px solid #eee; */
    color: ${fc};
  }

  nav {
    display: flex;
    align-items: center;

    a {
      font-size: 16px;
      font-weight: bold;
      color: ${fc};
      margin-right: 10px;
      padding-right: 10px;

      &:hover {
        color: rgba(255, 255, 255, 0.8);
      }
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
  padding-right: 10px;

  h1 {
    display: flex;
    font-size: 25px;
    /* flex-direction: column;
      margin-top: 2px; */
    color: ${fc};
    font-weight: bold;
    margin-right: 10px;
    padding-right: 10px;
  }

  h2 {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.7);
    font-weight: bold;
    margin-right: 10px;
    padding-right: 10px;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  /* border-left: 1px solid #eee; */

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      font-size: 16px;
      display: block;
      color: ${fc};
    }

    h5 {
      font-size: 12px;
      display: block;
      color: ${fc};
    }

    button {
      margin-top: 2px;
      font-size: 14px;
      color: rgba(255, 255, 255, 0.7);
      font-weight: bold;
      border: none;
      background-color: Transparent;
    }
  }
`;
