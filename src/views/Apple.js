import React from 'react';
import StockCard from 'components/organisms/StockCard/StockCard';
import InfoCard from 'components/molecules/InfoCard/InfoCard';
import { Apple as AppleData } from 'assets/data/companiesData';

const Apple = () =>
  AppleData.map(({ title, content, id, founderOne, founderTwo, link, icon, foName, ftName }) => (
    <InfoCard
      title={title}
      content={content}
      key={id}
      founderOne={founderOne}
      founderTwo={founderTwo}
      link={link}
      icon={icon}
      foName={foName}
      ftName={ftName}
    />
  ));

export default Apple;
