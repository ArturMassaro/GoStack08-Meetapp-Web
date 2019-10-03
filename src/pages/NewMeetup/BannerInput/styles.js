import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 4px;
  margin-bottom: 20px;

  label {
    width: 100%;
    height: 100%;
    cursor: pointer;

    div {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.4);
      border-radius: 4px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      input {
        display: none;
      }

      strong {
        color: rgba(255, 255, 255, 0.3);
      }

      img {
        width: 100%;
        height: 100%;
        border-radius: 4px;
        object-fit: cover;
      }
    }
  }
`;
