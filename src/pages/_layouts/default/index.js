import React from 'react';

import { Wrapper, Content, Scroll } from './styles';

import Header from '~/components/Header';

export default function defaultLayout({ children }) {
  return (
    <Scroll>
      <Wrapper>
        <Header />
        {children}
      </Wrapper>
    </Scroll>
  );
}
