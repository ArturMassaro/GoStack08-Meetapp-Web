import React, { useEffect, useState } from 'react';
import { Form, Input, Textarea } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import { toast } from 'react-toastify';
import { format, parseISO } from 'date-fns';
// import pt from 'date-fns/locale/pt';
import { Container } from './styles';

import api from '~/services/api';
import history from '~/services/history';

import BannerInput from './BannerInput';

export default function NewMeetup() {
  const [meetup, setMeetup] = useState({});
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (history.location.state) {
      const meet = history.location.state.meetup;
      meet.date = format(parseISO(meet.date), 'dd/MM/yyyy');
      console.tron.log(meet);
      setDescription(meet.description);
      setMeetup(history.location.state.meetup);
    }
  }, []);

  async function handleSave({ title, date, locale, banner_id }) {
    try {
      if (meetup.id) {
        console.tron.log('entrou 1');

        await api.put(`organization/${meetup.id}`, {
          title,
          description,
          date,
          locale,
          banner_id,
        });
      } else {
        console.tron.log('entrou 2');

        await api.post('meetup', {
          title,
          description,
          date,
          locale,
          banner_id,
        });
      }

      toast.success('Meetup inserido com sucesso');
      history.push('/');
    } catch (error) {
      console.tron.log(error);

      toast.error(`Erro ao salvar o meetup ${error}`);
    }
  }

  return (
    <Container>
      <Form initialData={meetup} onSubmit={handleSave}>
        <BannerInput name="banner_id" />

        <Input name="title" placeholder="Título do Meetup" />
        <Textarea
          name="description"
          placeholder="Descrição completa"
          onChange={e => setDescription(e.target.value)}
          rows="10"
          value={description}
        />
        <Input
          name="date"
          placeholder="Data do meetup"
          type="datetime-local"
          required
        />
        <Input name="locale" placeholder="Localização" />
        <button type="submit">
          <MdAddCircleOutline size={27} color="#fff" />
          Salvar meetup
        </button>
      </Form>
    </Container>
  );
}
