import React, { useRef, useEffect, useState } from 'react';
import { useField } from '@rocketseat/unform';
import { MdCameraAlt } from 'react-icons/md';

import { rgba } from 'polished';
import { Container } from './styles';
import api from '~/services/api';

export default function BannerInput() {
  const { defaultValue, registerField } = useField('banner');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();
  const [lastRef, setLastRef] = useState({});

  useEffect(() => {
    if (ref.current !== lastRef) {
      registerField({
        name: 'banner_id',
        ref: ref.current,
        path: 'dataset.file',
      });
      setLastRef(ref.current);
    }
  }, [lastRef, registerField]);

  useEffect(() => {
    if (defaultValue) {
      setPreview(defaultValue.url);
    }
  }, [defaultValue]);

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;
    console.tron.log(id);
    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="banner">
        <div>
          <input
            type="file"
            id="banner"
            accept="image/*"
            data-file={file}
            onChange={handleChange}
            ref={ref}
          />
          {preview ? (
            <img src={`http://${preview}`} alt="banner" />
          ) : (
            <>
              <MdCameraAlt size={72} color={rgba(255, 255, 255, 0.2)} />
              <strong>Selecionar imagem</strong>
            </>
          )}
        </div>
      </label>
    </Container>
  );
}
