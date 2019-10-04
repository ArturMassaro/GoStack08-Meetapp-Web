import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  z-index: 1;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
`;

export const Card = styled.div`
  position: fixed;
  background: white;
  width: 100%;
  max-width: 500px;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4px;

  h2 {
    padding: 12px 20px;
    font-weight: bold;
  }
  p {
    color: #7159c1;
  }
`;

export const Actions = styled.div`
  border-top: 1px solid #ccc;
  background: #eee;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0 0 4px 4px;

  button {
    border: 0;
    background: #402845;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
    line-height: 1;
    color: #fff;
    font-weight: bold;

    & + button {
      background: #d44059;
    }
  }
`;

export const Content = styled.div`
  padding: 1rem;
`;
