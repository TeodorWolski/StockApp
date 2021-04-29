import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import PageTemplate from 'templates/PageTemplate';
import StartView from './StartView';

const Root = () => (
  <MainTemplate>
    <PageTemplate>
      <StartView />
    </PageTemplate>
  </MainTemplate>
);

export default Root;
