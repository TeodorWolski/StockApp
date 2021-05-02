import React from 'react';
import StockCard from 'components/organisms/StockCard/StockCard';
import InfoCard from 'components/molecules/InfoCard/InfoCard';
import { Facebook as FacebookData } from 'assets/data/companiesData';

const Facebook = () =>
  FacebookData.map(
    ({
      title,
      content,
      id,
      founderOne,
      founderTwo,
      link,
      icon,
      foName,
      ftName,
      companyStockName,
    }) => (
      <>
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
        <StockCard companyStockName={companyStockName} />
      </>
    ),
  );

export default Facebook;
