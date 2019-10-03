import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 940px;
  margin: 0 auto;
  justify-items: center;
  align-items: center;
  margin-top: 50px;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input,
    textarea {
      width: 100%;
      border: 0;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.2);
      padding: 14px 20px;
      color: #fff;
      font-size: 18px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.2);
      }

      & + input,
      & + textarea {
        margin-top: 10px;
      }
      &::-webkit-inner-spin-button,
      &::-webkit-calendar-picker-indicator,
      &::-webkit-clear-button {
        display: none;
      }

      &::-webkit-datetime-edit-day-field:focus,
      &::-webkit-datetime-edit-month-field:focus,
      &::-webkit-datetime-edit-year-field:focus {
        background-color: #00000000;
        color: white;
        outline: none;
      }

      &:invalid::-webkit-datetime-edit {
        color: rgba(255, 255, 255, 0.2);
      }
    }

    button {
      background: #f94d6a;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      color: #fff;
      display: flex;
      align-items: center;
      align-self: flex-end;
      margin-top: 20px;
      margin-bottom: 20px;

      svg {
        margin-right: 17px;
      }
    }
  }
`;
