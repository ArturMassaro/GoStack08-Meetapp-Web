import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 940px;
  margin: 0 auto;
  flex-direction: column;

  img {
    height: 300px;
    object-fit: cover;
    margin-top: 50px;
  }

  > p {
    margin-top: 25px;
    color: #fff;
    font-size: 18px;
  }
  .infos {
    display: flex;
    align-items: center;
    margin-top: 30px;
    opacity: 0.6;

    div {
      display: flex;
      align-items: center;
      margin-right: 30px;

      p {
        color: #fff;
      }
      svg {
        margin-right: 17px;
      }
    }
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 52px;

  strong {
    color: #fff;
    font-size: 32px;
  }
  div {
    display: flex;
    align-items: center;

    button {
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      display: flex;
      align-items: center;
      color: #fff;
      font-size: 16px;
      font-weight: bold;

      & + button {
        margin-left: 15px;
      }

      svg {
        margin-right: 16px;
      }
    }

    .edit {
      background: #4dbaf9;
    }

    .delete {
      background: #d44059;
    }
  }
`;
