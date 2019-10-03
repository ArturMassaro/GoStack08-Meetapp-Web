import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 41px;
    height: 41px;
    margin-bottom: 50px;
  }

  form {
    display: flex;
    width: 100%;
    flex-direction: column;

    input {
      padding: 20px 15px;
      font-size: 18px;
      border: 0;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      margin-bottom: 10px;
      color: #fff;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }

    button {
      width: 100%;
      height: 50px;
      font-size: 18px;
      color: #fff;
      background: #f94d6a;
      border: 0;
      border-radius: 4px;
      margin-top: 5px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#f94d6a')};
      }
    }

    span {
      margin-right: 5px;
      margin-bottom: 15px;
      color: #f94d6a;
    }
  }

  a {
    margin-top: 20px;
    color: rgba(255, 255, 255, 0.6);

    &:hover {
      color: rgba(255, 255, 255, 1);
    }
  }
`;
