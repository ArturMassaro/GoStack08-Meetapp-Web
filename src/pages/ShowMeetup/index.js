import React, { useEffect, useState } from 'react';
import { MdEdit, MdDeleteForever, MdEvent, MdPlace } from 'react-icons/md';
import pt from 'date-fns/locale/pt';
import { format, parseISO } from 'date-fns';
import { toast } from 'react-toastify';
import { Container, Header } from './styles';
import Modal from '~/components/Modal';

import history from '~/services/history';
import api from '~/services/api';

export default function ShowMeetup() {
  const [meetup, setMeetup] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setMeetup(history.location.state);
  }, [meetup]);

  function handleEdit() {
    history.push('/new/meetup', {
      meetup,
    });
  }

  async function handleDelete(id) {
    console.tron.log(id);
    await api
      .delete(`organization/${id}`)
      .then(() => {
        toast.success('Meetup excluido com sucesso !');
        history.push('/');
      })
      .catch(() => {
        toast.error('Erro ao excluir meetup');
      });
  }

  return (
    <>
      <Modal
        show={showModal}
        onClose={() => setShowModal(!showModal)}
        title="Excluir Meetup ?"
        onAction={() => handleDelete(meetup.id)}
      >
        Certeza que gostaria de excluir este meetup ?
      </Modal>
      <Container>
        <Header>
          <strong>{meetup.title}</strong>

          <div>
            <button type="button" className="edit" onClick={handleEdit}>
              <MdEdit size={27} color="#fff" />
              Editar
            </button>

            <button
              type="button"
              className="delete"
              onClick={() => setShowModal(!showModal)}
            >
              <MdDeleteForever size={27} color="#fff" />
              Cancelar
            </button>
          </div>
        </Header>

        {meetup.banner && (
          <img src={`http://${meetup.banner.url}`} alt="Banner" />
        )}

        <p>{meetup.description}</p>

        <div className="infos">
          <div>
            <MdEvent size={27} color="#fff" />
            <p>
              {meetup.date &&
                format(parseISO(meetup.date), "dd 'de' MMMM', às' HH'h'", pt)}
            </p>
          </div>
          <div>
            <MdPlace size={27} color="#fff" />
            <p>{meetup.locale}</p>
          </div>
        </div>
      </Container>
    </>
  );
}
