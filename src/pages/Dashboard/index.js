import React, { useState, useEffect } from 'react';
import { MdChevronRight, MdAddCircleOutline } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import api from '~/services/api';
import history from '~/services/history';
import { Container, Scroll } from './styles';

export default function Dashboard() {
  const token = useSelector(state => state.auth.token);
  // const token = 'asd';
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeets() {
      const response = await api.get('organization');

      setMeetups(response.data);
    }

    loadMeets();
  }, [token]);

  function handleShow(meet) {
    history.push('/meetup', meet);
  }

  function handleNew() {
    history.push('/new/meetup');
  }

  return (
    <Container>
      <div>
        <strong>Meus meetups</strong>
        <button type="button" onClick={handleNew}>
          <MdAddCircleOutline size={27} color="#fff" />
          Novo meetup
        </button>
      </div>
      <Scroll>
        <ul>
          {meetups.map(meetup => (
            <li key={meetup.id}>
              <strong>{meetup.title}</strong>
              <button type="button" onClick={() => handleShow(meetup)}>
                <time>
                  {format(parseISO(meetup.date), "dd 'de' MMMM', às' HH'h'", {
                    locale: pt,
                  })}
                </time>
                <MdChevronRight size={32} color="#fff" />
              </button>
            </li>
          ))}
        </ul>
      </Scroll>
    </Container>
  );
}
