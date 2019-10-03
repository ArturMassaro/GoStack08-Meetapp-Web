import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 940px;
  margin: 50px auto;

  form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    input {
      padding: 14px 20px;
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      color: #fff;
      font-size: 18px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }

      & + input {
        margin-top: 10px;
      }
    }

    div {
      width: 100%;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 30px 0 20px 0;
    }

    button {
      display: flex;
      width: 160px;
      height: 42px;
      background: #f94d6a;
      border-radius: 4px;
      border: 0;
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
      align-self: flex-end;

      svg {
        margin-right: 17px;
      }
    }
  }
`;
