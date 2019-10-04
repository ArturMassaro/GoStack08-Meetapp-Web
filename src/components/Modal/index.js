import React from 'react';
import Proptypes from 'prop-types';

import { Container, Card, Actions, Content } from './styles';

export default function Modal({ show, children, onClose, title, onAction }) {
  return (
    <>
      {!show ? null : (
        <Container>
          <Card>
            <h2>{title}</h2>

            <Content>{children}</Content>
            <Actions>
              <button type="button" onClick={onClose}>
                Fechar
              </button>
              <button type="button" onClick={onAction}>
                Okay
              </button>
            </Actions>
          </Card>
        </Container>
      )}
    </>
  );
}

Modal.propTypes = {
  show: Proptypes.bool.isRequired,
  children: Proptypes.oneOfType([Proptypes.element, Proptypes.func]).isRequired,
  onClose: Proptypes.func.isRequired,
  onAction: Proptypes.func.isRequired,
  title: Proptypes.string.isRequired,
};
