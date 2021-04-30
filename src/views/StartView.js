import React from 'react';
import styled from 'styled-components';
import PageTemplate from 'templates/PageTemplate';
import StockCard from 'components/organisms/StockCard/StockCard';
import InfoCard from 'components/molecules/InfoCard/InfoCard';

const StartView = () => (
  <PageTemplate>
    <StockCard />
    <InfoCard />
  </PageTemplate>
);

export default StartView;
