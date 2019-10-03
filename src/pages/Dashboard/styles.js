import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 940px;
  max-height: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 32px;

  & > div {
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    strong {
      color: #fff;
      font-size: 32px;
    }

    button {
      background: #f94d6a;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      color: #fff;
      display: flex;
      align-items: center;

      svg {
        margin-right: 17px;
      }
    }
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  padding-top: auto;
  height: 100%;
  max-height: 80vh;
  margin-top: 30px;
  border-radius: 4px;
  display: flex;
  align-items: start;
  justify-content: start;

  ul {
    border-radius: 4px;
    width: 100%;
    max-height: 100%;

    li {
      width: 100%;
      background: rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 30px;

      & + li {
        margin-top: 15px;
      }

      strong {
        color: #fff;
        font-size: 18px;
      }

      button {
        display: flex;
        align-items: center;
        background: none;
        border: 0;

        time {
          color: #fff;
        }
      }
    }
  }
`;
