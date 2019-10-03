import styled from 'styled-components';

export const Container = styled.div`
  height: 92px;
  width: 100%;
  display: flex;
  align-self: flex-start;
  justify-self: center;
  background: rgba(0, 0, 0, 0.3);
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 940px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav img {
    width: 32px;
    height: 32px;
  }
`;

export const Perfil = styled.div`
  height: 100%;
  display: flex;

  div {
    display: flex;
    flex-direction: column;
    padding-right: 30px;

    strong {
      color: #fff;
      font-size: 14px;
    }

    a {
      align-self: flex-end;
      color: #999999;
    }
  }

  button {
    background: #d44059;
    border: 0;
    border-radius: 4px;
    color: #fff;
    padding: 12px 20px;
  }
`;
