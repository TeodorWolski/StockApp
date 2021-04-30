import React from 'react';
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
